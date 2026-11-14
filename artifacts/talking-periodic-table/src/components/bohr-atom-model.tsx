import { useEffect, useMemo, useRef, useState } from 'react';
import { Minus, Pause, Play, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import type { ElementRecord } from '@/data/elements';

type Point3D = { x: number; y: number; z: number; proton: boolean };
type Rotation = { yaw: number; pitch: number };

const shellNames = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];

function hashUnit(index: number, seed: number) {
  const value = Math.sin((index + 1) * 12.9898 + seed * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function createNucleons(protonCount: number, neutronCount: number, isotope: number): Point3D[] {
  const total = protonCount + neutronCount;
  if (total <= 0) return [];

  const protonOrder = Array.from({ length: total }, (_, index) => index)
    .sort((a, b) => hashUnit(a, isotope) - hashUnit(b, isotope));
  const protonIndices = new Set(protonOrder.slice(0, protonCount));
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return Array.from({ length: total }, (_, index) => {
    const fraction = (index + 0.5) / total;
    const latitude = Math.acos(1 - 2 * fraction);
    const longitude = index * goldenAngle;
    const radius = Math.cbrt(fraction);
    return {
      x: Math.sin(latitude) * Math.cos(longitude) * radius,
      y: Math.sin(latitude) * Math.sin(longitude) * radius,
      z: Math.cos(latitude) * radius,
      proton: protonIndices.has(index),
    };
  });
}

export function BohrAtomModel({ element }: { element: ElementRecord }) {
  const [isotopeMass, setIsotopeMass] = useState(element.defaultIsotope);
  const [rotation, setRotation] = useState<Rotation>({ yaw: -0.42, pitch: 0.24 });
  const [zoom, setZoom] = useState(1);
  const [isOrbiting, setIsOrbiting] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ x: number; y: number; rotation: Rotation } | null>(null);
  const rotationRef = useRef(rotation);
  const zoomRef = useRef(zoom);
  const orbitingRef = useRef(isOrbiting);
  rotationRef.current = rotation;
  zoomRef.current = zoom;
  orbitingRef.current = isOrbiting;

  useEffect(() => {
    setIsotopeMass(element.defaultIsotope);
    setRotation({ yaw: -0.42, pitch: 0.24 });
    setZoom(1);
  }, [element.number, element.defaultIsotope]);

  const isotope = element.isotopes.find((item) => item.massNumber === isotopeMass)
    ?? element.isotopes.find((item) => item.massNumber === element.defaultIsotope)
    ?? element.isotopes[0];
  const neutronCount = isotope ? isotope.massNumber - element.number : 0;
  const nucleons = useMemo(
    () => createNucleons(element.number, neutronCount, isotope?.massNumber ?? element.defaultIsotope),
    [element.number, neutronCount, isotope?.massNumber, element.defaultIsotope],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let frame = 0;
    let animationTime = 0;
    let lastTime = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
    };

    const project = (x: number, y: number, z: number, centerX: number, centerY: number, size: number) => {
      const currentRotation = rotationRef.current;
      const cosPitch = Math.cos(currentRotation.pitch);
      const sinPitch = Math.sin(currentRotation.pitch);
      const cosYaw = Math.cos(currentRotation.yaw);
      const sinYaw = Math.sin(currentRotation.yaw);
      const pitchedY = y * cosPitch - z * sinPitch;
      const pitchedZ = y * sinPitch + z * cosPitch;
      const rotatedX = x * cosYaw + pitchedZ * sinYaw;
      const rotatedZ = -x * sinYaw + pitchedZ * cosYaw;
      const perspective = Math.max(0.72, Math.min(1.32, 1 + rotatedZ / (size * 3.2)));
      const scale = zoomRef.current * perspective;
      return {
        x: centerX + rotatedX * scale,
        y: centerY + pitchedY * scale,
        depth: rotatedZ,
        scale,
      };
    };

    const draw = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      if (orbitingRef.current) animationTime += delta;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const size = Math.min(width, height);
      const orbitLimit = size * 0.405;
      const shellTotal = Math.max(1, element.shells.length);
      const selectedMass = isotope?.massNumber ?? element.defaultIsotope;
      const nucleusRadius = Math.min(size * 0.17, 18 + Math.cbrt(selectedMass) * 3.7);

      const glow = context.createRadialGradient(centerX, centerY, nucleusRadius * 0.1, centerX, centerY, orbitLimit * 0.98);
      glow.addColorStop(0, 'rgba(56, 212, 232, 0.11)');
      glow.addColorStop(0.58, 'rgba(95, 93, 227, 0.045)');
      glow.addColorStop(1, 'rgba(5, 14, 32, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.save();
      for (let shellIndex = 0; shellIndex < element.shells.length; shellIndex += 1) {
        const radius = orbitLimit * (0.31 + 0.69 * ((shellIndex + 1) / shellTotal));
        const tilt = (shellIndex % 2 === 0 ? 0.48 : -0.48) + shellIndex * 0.085;
        context.beginPath();
        for (let step = 0; step <= 100; step += 1) {
          const angle = (step / 100) * Math.PI * 2;
          const point = project(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius * Math.cos(tilt),
            Math.sin(angle) * radius * Math.sin(tilt),
            centerX,
            centerY,
            size,
          );
          if (step === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.closePath();
        context.strokeStyle = shellIndex % 2 === 0 ? 'rgba(52, 214, 231, 0.36)' : 'rgba(160, 113, 255, 0.34)';
        context.lineWidth = 1;
        context.stroke();
      }

      const particles = nucleons.map((nucleon) => {
        const point = project(
          nucleon.x * nucleusRadius,
          nucleon.y * nucleusRadius,
          nucleon.z * nucleusRadius,
          centerX,
          centerY,
          size,
        );
        return { ...point, proton: nucleon.proton };
      }).sort((a, b) => a.depth - b.depth);
      const nucleonRadius = Math.max(3.1, Math.min(7, 8 - Math.sqrt(selectedMass) * 0.25));

      for (const particle of particles) {
        const radius = nucleonRadius * Math.max(0.76, particle.scale);
        const gradient = context.createRadialGradient(
          particle.x - radius * 0.34,
          particle.y - radius * 0.4,
          radius * 0.12,
          particle.x,
          particle.y,
          radius,
        );
        gradient.addColorStop(0, particle.proton ? '#ffd2df' : '#f2f5fa');
        gradient.addColorStop(0.44, particle.proton ? '#ff7698' : '#aebacb');
        gradient.addColorStop(1, particle.proton ? '#b73361' : '#556277');
        context.beginPath();
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
        context.strokeStyle = particle.proton ? 'rgba(255, 203, 220, 0.46)' : 'rgba(232, 238, 247, 0.4)';
        context.lineWidth = 0.55;
        context.stroke();
        context.fillStyle = particle.proton ? '#54182d' : '#273142';
        context.font = `700 ${Math.max(5, radius * 1.1)}px IBM Plex Mono, monospace`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(particle.proton ? '+' : '0', particle.x, particle.y + 0.2);
      }
      context.restore();

      const electrons: Array<{ x: number; y: number; depth: number; scale: number; shell: number }> = [];
      element.shells.forEach((electronCount, shellIndex) => {
        const radius = orbitLimit * (0.31 + 0.69 * ((shellIndex + 1) / shellTotal));
        const tilt = (shellIndex % 2 === 0 ? 0.48 : -0.48) + shellIndex * 0.085;
        for (let electronIndex = 0; electronIndex < electronCount; electronIndex += 1) {
          const speed = shellIndex % 2 === 0 ? 0.22 : -0.17;
          const angle = (Math.PI * 2 * electronIndex) / electronCount + animationTime * speed + shellIndex * 0.37;
          electrons.push({
            ...project(
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * Math.cos(tilt),
              Math.sin(angle) * radius * Math.sin(tilt),
              centerX,
              centerY,
              size,
            ),
            shell: shellIndex,
          });
        }
      });
      electrons.sort((a, b) => a.depth - b.depth);
      for (const electron of electrons) {
        const radius = Math.max(4.4, Math.min(6.4, size * 0.014)) * Math.max(0.85, electron.scale);
        context.save();
        context.shadowColor = '#4de7f4';
        context.shadowBlur = 12;
        context.beginPath();
        context.arc(electron.x, electron.y, radius, 0, Math.PI * 2);
        context.fillStyle = '#8bf8ff';
        context.fill();
        context.restore();
        context.beginPath();
        context.arc(electron.x, electron.y, radius, 0, Math.PI * 2);
        context.strokeStyle = electron.shell % 2 === 0 ? '#d3fdff' : '#c7b5ff';
        context.lineWidth = 1;
        context.stroke();
        context.fillStyle = '#07313e';
        context.font = `700 ${Math.max(7, radius * 1.4)}px IBM Plex Mono, monospace`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('−', electron.x, electron.y - 0.2);
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [element.defaultIsotope, element.shells, isotope?.massNumber, nucleons]);

  const setClampedZoom = (value: number) => setZoom(Math.max(0.72, Math.min(1.32, value)));
  const beginDrag = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { x: event.clientX, y: event.clientY, rotation: rotationRef.current };
  };
  const moveDrag = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    setRotation({
      yaw: drag.rotation.yaw + (event.clientX - drag.x) * 0.008,
      pitch: Math.max(-1.25, Math.min(1.25, drag.rotation.pitch + (event.clientY - drag.y) * 0.008)),
    });
  };
  const endDrag = () => { dragRef.current = null; };

  return (
    <section className="atomic-model-card glass-panel" data-testid={`section-atomic-model-${element.number}`}>
      <header className="atomic-model-heading">
        <div>
          <div className="eyebrow">تصوّر ذري تفاعلي</div>
          <h2 className="display-font">النموذج الذري ثلاثي الأبعاد</h2>
          <p>ذرة متعادلة · {element.number} بروتونًا و{element.number} إلكترونًا</p>
        </div>
        <span className="atomic-model-chip" dir="ltr">3D / BOHR</span>
      </header>

      <div className="atomic-model-stage">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`نموذج بور ثلاثي الأبعاد لعنصر ${element.nameAr}، ${element.number} بروتونًا و${element.number} إلكترونًا و${neutronCount} نيوترونًا في النظير ${element.symbol}-${isotope?.massNumber ?? element.defaultIsotope}`}
          data-testid={`canvas-atomic-model-${element.number}`}
          className="atomic-model-canvas"
          onPointerDown={beginDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={(event) => {
            event.preventDefault();
            setClampedZoom(zoomRef.current + (event.deltaY < 0 ? 0.08 : -0.08));
          }}
        />
        <div className="atomic-model-stage-tag mono-font" dir="ltr">{element.symbol}-{isotope?.massNumber ?? element.defaultIsotope}</div>
        <div className="atomic-model-controls" aria-label="أدوات النموذج الذري">
          <button type="button" onClick={() => setClampedZoom(zoom + 0.12)} aria-label="تكبير النموذج" data-testid={`button-atom-zoom-in-${element.number}`}><ZoomIn size={16} /></button>
          <button type="button" onClick={() => setClampedZoom(zoom - 0.12)} aria-label="تصغير النموذج" data-testid={`button-atom-zoom-out-${element.number}`}><ZoomOut size={16} /></button>
          <button type="button" onClick={() => { setRotation({ yaw: -0.42, pitch: 0.24 }); setZoom(1); }} aria-label="إعادة ضبط زاوية النموذج" data-testid={`button-atom-reset-${element.number}`}><RotateCcw size={15} /></button>
          <button type="button" onClick={() => setIsOrbiting((current) => !current)} aria-label={isOrbiting ? 'إيقاف حركة الإلكترونات' : 'تشغيل حركة الإلكترونات'} aria-pressed={isOrbiting} data-testid={`button-atom-motion-${element.number}`}>
            {isOrbiting ? <Pause size={15} /> : <Play size={15} />}
          </button>
        </div>
        <p className="atomic-model-drag-hint">اسحب لتدوير النموذج، واستخدم العجلة أو الأزرار للتكبير</p>
      </div>

      <div className="atomic-model-readout">
        <label className="atomic-isotope-select">
          <span>النظير المختار لحساب النيوترونات</span>
          <select value={isotope?.massNumber ?? element.defaultIsotope} onChange={(event) => setIsotopeMass(Number(event.target.value))} data-testid={`select-isotope-${element.number}`}>
            {element.isotopes.map((item) => (
              <option key={item.massNumber} value={item.massNumber}>
                {element.symbol}-{item.massNumber}{item.naturalAbundance !== null ? ` · وفرة طبيعية ${(item.naturalAbundance * 100).toPrecision(3)}%` : ''}
              </option>
            ))}
          </select>
        </label>
        <div className="atomic-count-grid">
          <div><span className="atomic-count-dot proton-dot" />البروتونات <strong>{element.number}</strong></div>
          <div><span className="atomic-count-dot neutron-dot" />النيوترونات <strong>{neutronCount}</strong></div>
          <div><span className="atomic-count-dot electron-dot" />الإلكترونات <strong>{element.number}</strong></div>
        </div>
        <div className="atomic-shell-row">
          <span>توزيع الأغلفة</span>
          <div className="atomic-shell-list" dir="ltr">
            {element.shells.map((count, index) => (
              <span key={`${shellNames[index] ?? index}-${count}`}><b>{shellNames[index] ?? `n${index + 1}`}</b> {count}</span>
            ))}
          </div>
        </div>
        <div className="atomic-configuration">
          <span>التوزيع الإلكتروني التفصيلي</span>
          <code dir="ltr" data-testid={`text-electron-configuration-${element.number}`}>{element.electronConfiguration}</code>
        </div>
        <div className="atomic-model-legend" aria-label="مفتاح ألوان الجسيمات">
          <span><i className="proton-dot">+</i> بروتون</span>
          <span><i className="neutron-dot">0</i> نيوترون</span>
          <span><i className="electron-dot"><Minus size={10} /></i> إلكترون</span>
        </div>
        <p className="atomic-model-note">
          نموذج بور وسيلة تعليمية مبسطة؛ لا تمثل المدارات مسارات الإلكترونات الحقيقية. يختلف عدد النيوترونات باختلاف النظير المختار، والخيارات المعروضة هي النظائر الواردة في جدول NIST المرجعي.
        </p>
        <div className="atomic-model-sources">
          <a href="https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ascii=ascii&isotype=some" target="_blank" rel="noreferrer">بيانات النظائر والكتل — NIST</a>
          <a href="https://github.com/Bowserinator/Periodic-Table-JSON" target="_blank" rel="noreferrer">بيانات التوزيع الإلكتروني</a>
        </div>
      </div>
    </section>
  );
}
