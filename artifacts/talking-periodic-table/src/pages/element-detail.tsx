import { useEffect, useState } from 'react';
import { Link, useParams } from 'wouter';
import { ArrowRight, AudioLines, Atom, ChevronLeft, Copy, ExternalLink, ImageOff, MessageCircle, Radiation, Share2 } from 'lucide-react';
import { elements, categories, type ElementRecord } from '@/data/elements';
import { onElementVoiceClick, stopElementVoice } from '@/lib/element-voice-adapter';
import { BohrAtomModel } from '@/components/bohr-atom-model';

const unavailable = 'غير متاح في البيانات الحالية';
const notConfirmed = 'غير مؤكد';

function fact(value: string | number | null | undefined, unknownLabel = unavailable) {
  return value === null || value === undefined || String(value).trim() === '' ? unknownLabel : String(value);
}

function Fact({ label, value, mono = false, unknownLabel = unavailable }: { label: string; value: string | number | null | undefined; mono?: boolean; unknownLabel?: string }) {
  return <div className="border-b border-[#ddd6c8] py-3">
    <dt className="text-[11px] text-[#7b8580]">{label}</dt>
    <dd className={`mt-1 text-sm text-[#2c3c3e] ${mono ? 'mono-font' : ''}`} dir={mono ? 'ltr' : 'auto'}>{fact(value, unknownLabel)}</dd>
  </div>;
}

function buildShareText(element: ElementRecord, categoryLabel: string) {
  return [
    `${element.nameAr} (${element.nameEn}) — ${element.symbol}`,
    `العدد الذري: ${element.number} · الكتلة الذرية: ${element.mass}`,
    `العائلة: ${categoryLabel} · الحالة: ${element.phase}`,
    element.summaryAr,
    element.propertiesAr.length ? `الخواص: ${element.propertiesAr.join('؛ ')}` : '',
    element.usesAr.length ? `الاستخدامات: ${element.usesAr.join('؛ ')}` : '',
    element.occurrenceAr ? `الوجود في الطبيعة: ${element.occurrenceAr}` : '',
    element.imageUrl ? `صورة مرجعية: ${element.imageUrl}` : '',
    `المصادر: ${window.location.href}`,
  ].filter(Boolean).join('\n');
}

export default function ElementPage() {
  const params = useParams<{ atomicNumber: string }>();
  const number = Number(params.atomicNumber);
  const element = elements.find((item) => item.number === number);
  const [shareMessage, setShareMessage] = useState('');
  const [imageFailed, setImageFailed] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState('');

  useEffect(() => {
    setImageFailed(false);
    setVoiceActive(false);
    setVoiceMessage('');
    return () => stopElementVoice();
  }, [number]);

  if (!Number.isInteger(number) || !element) {
    return <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <div className="eyebrow">ملف العنصر</div><h1 className="display-font mt-3 text-3xl">لم نعثر على هذا العنصر</h1>
      <p className="mt-3 text-sm text-[#687273]">تحقق من العدد الذري، أو عد إلى الجدول الكامل.</p>
      <Link href="/" data-testid="link-back-table" className="mt-6 inline-flex border border-[#315d52] px-5 py-3 text-sm text-[#315d52]">العودة إلى الجدول</Link>
    </section>;
  }

  const category = categories.find((item) => item.key === element.category);
  const previous = elements.find((item) => item.number === element.number - 1);
  const next = elements.find((item) => item.number === element.number + 1);
  const categoryLabel = category?.labelAr ?? unavailable;
  const shareText = buildShareText(element, categoryLabel);

  const requestVoice = async () => {
    try {
      const isSpeaking = onElementVoiceClick(element, setVoiceActive);
      setVoiceMessage(isSpeaking ? 'الصوت يعمل؛ اضغط لإيقافه.' : 'تم إيقاف الصوت.');
    } catch {
      setVoiceActive(false);
      setVoiceMessage('تعذر تشغيل الصوت. تحقق من دعم المتصفح للصوت العربي.');
    }
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: `${element.nameAr} (${element.symbol}) — الجدول الدوري الناطق`, text: shareText, url });
      else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        setShareMessage('نُسخت معلومات العنصر إلى الحافظة.');
      } else {
        setShareMessage('المشاركة غير متاحة في هذا المتصفح.');
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(shareText);
          setShareMessage('تعذرت المشاركة المباشرة؛ نُسخت المعلومات إلى الحافظة.');
        } else {
          setShareMessage('تعذرت المشاركة. يمكنك نسخ الرابط من شريط العنوان.');
        }
      } catch {
        setShareMessage('تعذرت المشاركة أو نسخ الرابط. يمكنك نسخه من شريط العنوان.');
      }
    }
  };

  const copyInfo = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setShareMessage('نُسخت معلومات العنصر إلى الحافظة.');
    } catch {
      setShareMessage('تعذر النسخ تلقائيًا. استخدم زر المشاركة أو رابط واتساب.');
    }
  };

  return (
    <article className="mx-auto max-w-[1200px] px-5 py-7 md:px-10 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" data-testid="link-back-table" className="flex items-center gap-2 text-xs text-[#61706c] hover:text-[#315d52]"><ArrowRight size={15} />الجدول الدوري</Link>
        <div className="mono-font text-[10px] text-[#87908b]" dir="ltr">ELEMENT FILE / {String(element.number).padStart(3, '0')}</div>
      </div>
      <section className="grid overflow-hidden border border-[#d6cebf] bg-[#f8f5ed] md:grid-cols-[1.05fr_.95fr]">
        <div className="p-6 md:p-10">
          <div className="eyebrow mb-3 flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 text-[#2c3c3e]" style={{ backgroundColor: category?.color ?? '#e7e2d6' }} data-testid={`badge-category-${element.number}`}>{categoryLabel}</span>
            <span>العنصر رقم {element.number}</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="display-font text-7xl leading-none text-[#315d52] md:text-8xl" dir="ltr" data-testid={`text-symbol-${element.number}`}>{element.symbol}</div>
            <div className="min-w-0 pt-2">
              <h1 className="display-font text-3xl leading-tight text-[#26373a] md:text-5xl" data-testid={`text-element-name-${element.number}`}>{element.nameAr}</h1>
              <p className="mono-font mt-2 text-sm text-[#7b8580]" dir="ltr">{element.nameEn}</p>
            </div>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#556360]" data-testid={`text-summary-${element.number}`}>{fact(element.summaryAr)}</p>
          {element.radioactive && <div className="mt-5 inline-flex items-center gap-2 border border-[#b95e4c]/50 bg-[#f4e1d9] px-3 py-2 text-xs font-semibold text-[#8c3d31]" role="status" data-testid={`badge-radioactive-${element.number}`}><Radiation size={15} />عنصر مشع</div>}
          {element.number >= 104 && <div className="mt-4 border-r-2 border-[#a88a53] bg-[#eee8d9] px-4 py-3 text-xs leading-6 text-[#596663]" role="note" data-testid={`notice-predicted-${element.number}`}>عنصر فائق الثقل صُنّع في المختبر. لا تتوفر عينة مرئية؛ كثير من خواصه وتصنيفه الكيميائي مستنتج نظريًا.</div>}
          <div className="mt-7 flex flex-wrap gap-2">
            <button type="button" onClick={requestVoice} data-testid="button-speak" aria-label={voiceActive ? `أوقف صوت عنصر ${element.nameAr}` : `استمع إلى تعريف ${element.nameAr}`} aria-pressed={voiceActive} aria-describedby="voice-status"
               className={`inline-flex items-center gap-2 bg-[#315d52] px-4 py-3 text-sm text-[#f7f3e9] transition hover:bg-[#25483f] disabled:cursor-not-allowed disabled:bg-[#747e78] disabled:text-[#ece9df] ${voiceActive ? 'element-voice-active' : ''}`}>
              <AudioLines size={17} />{voiceActive ? 'أوقف الصوت' : 'استمع إليّ — أنا العنصر'}
            </button>
            <button type="button" onClick={share} data-testid="button-share-element" aria-label={`مشاركة معلومات ${element.nameAr}`} className="inline-flex items-center gap-2 border border-[#c9c1b1] px-4 py-3 text-sm text-[#3e5050] transition hover:border-[#315d52]"><Share2 size={16} />مشاركة المعلومات</button>
            <button type="button" onClick={copyInfo} data-testid="button-copy-element" aria-label={`نسخ معلومات ${element.nameAr}`} className="inline-flex items-center gap-2 border border-[#c9c1b1] px-4 py-3 text-sm text-[#3e5050] transition hover:border-[#315d52]"><Copy size={15} />نسخ المعلومات</button>
            <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer" data-testid="link-share-whatsapp" aria-label={`مشاركة معلومات ${element.nameAr} عبر واتساب`} className="inline-flex items-center gap-2 border border-[#c9c1b1] px-4 py-3 text-sm text-[#3e5050] transition hover:border-[#315d52]"><MessageCircle size={15} />واتساب</a>
          </div>
          <p id="voice-status" className="mt-2 text-xs text-[#717b76]" role="status" data-testid="status-voice">{voiceMessage || 'يعتمد النطق العربي على الأصوات المتاحة في جهازك ومتصفحك.'}</p>
          {shareMessage && <p className="mt-3 text-xs text-[#547367]" role="status" data-testid="status-share">{shareMessage}</p>}
        </div>
        <figure className="relative m-0 flex min-h-[280px] items-center justify-center overflow-hidden border-t border-[#d6cebf] bg-[#e7e2d6] p-6 md:border-r md:border-t-0">
          <div className="absolute inset-4 border border-[#c7bdab]" />
          <div className="absolute left-8 top-8 text-left mono-font text-[9px] tracking-widest text-[#89918a]" dir="ltr">SPECIMEN / {element.symbol.toUpperCase()}</div>
          {element.imageUrl && !imageFailed ? <img src={element.imageUrl} alt={`صورة مرجعية للعنصر ${element.nameAr}؛ راجع وصف التمثيل`} onError={() => setImageFailed(true)} className="relative max-h-[300px] max-w-full object-contain mix-blend-multiply" data-testid={`img-element-${element.number}`} /> :
            <div className="relative flex flex-col items-center gap-4 text-[#7c8782]" data-testid={`image-unavailable-${element.number}`}><div className="flex h-40 w-40 items-center justify-center border border-[#c3b9a7] bg-[#eee9de] shadow-[inset_0_0_35px_rgba(52,63,56,.08)]">{element.number >= 104 || element.radioactive ? <Atom size={52} strokeWidth={1} /> : <ImageOff size={32} strokeWidth={1} />}</div><span className="text-xs">{element.number >= 104 || element.radioactive ? 'تمثيل تخطيطي — ليس عينة فعلية' : 'لا تتوفر صورة موثوقة للعينة'}</span></div>}
          <figcaption className="absolute bottom-6 right-8 left-8 border-t border-[#c9c0af] pt-2 text-[10px] leading-5 text-[#707c77]" data-testid={`text-image-credit-${element.number}`}>
            <span className="font-semibold text-[#56625e]">تمثيل بصري:</span> {element.imageUrl && !imageFailed ? 'صورة مرجعية؛ ليست بالضرورة عينة نقية أو بالحجم الطبيعي.' : element.number >= 104 ? 'لا توجد عينة فعلية معروضة؛ هذا الملف لا يعرض صورة على أنها عينة.' : 'لا توجد صورة عينة متاحة لهذا العنصر.'}
            {element.imageUrl && !imageFailed && element.imageCredit && <span> · {element.imageCredit}</span>}
          </figcaption>
        </figure>
      </section>

      <BohrAtomModel element={element} />

      <section className="mt-7 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="border border-[#d6cebf] bg-[#f8f5ed] p-5 md:p-7">
          <div className="eyebrow">بطاقة التعريف</div>
          <h2 className="display-font mt-2 text-2xl">حقائق أساسية</h2>
          <dl className="mt-3 grid grid-cols-2 gap-x-5">
            <Fact label="العدد الذري" value={element.number} mono />
            <Fact label="الكتلة الذرية" value={element.mass} mono />
            <Fact label="المجموعة" value={element.group} />
            <Fact label="الدورة" value={element.period} />
            <Fact label="العائلة" value={category?.labelAr} />
            <Fact label="الحالة" value={element.phase} />
            <Fact label="نصف العمر" value={element.halfLife} />
            <Fact label="نوع الإشعاع" value={element.radiationType} />
          </dl>
          <div className="mt-4 border-t border-[#ddd6c8] pt-4">
            <div className="text-[11px] text-[#7b8580]">الوجود في الطبيعة</div>
            <p className="mt-2 text-sm leading-7 text-[#39494a]" data-testid={`text-occurrence-${element.number}`}>{fact(element.occurrenceAr)}</p>
          </div>
          <div className="mt-4 border-t border-[#ddd6c8] pt-4">
            <div className="text-[11px] text-[#7b8580]">أصل الاسم</div>
            <p className="mt-2 text-sm leading-7 text-[#39494a]" data-testid={`text-name-origin-${element.number}`}>{fact(element.nameOriginAr)}</p>
          </div>
        </div>
        <div className="space-y-5">
          <InfoSection title="الخواص" items={element.propertiesAr} empty={unavailable} testId={`section-properties-${element.number}`} />
          <InfoSection title="الاستخدامات" items={element.usesAr} empty={unavailable} testId={`section-uses-${element.number}`} />
          <div className="border border-[#d6cebf] bg-[#f8f5ed] p-5 md:p-7" data-testid={`section-discovery-${element.number}`}>
            <div className="eyebrow">سجل الاكتشاف</div>
            <h2 className="display-font mt-2 text-2xl">كيف عُرف؟</h2>
            <p className="mt-3 text-sm leading-7 text-[#455553]">{element.storyAr ? fact(element.storyAr, notConfirmed) : notConfirmed}</p>
            <p className="mt-2 text-[10px] leading-5 text-[#7b8580]">المكتشف وأصل الاسم معلومتان منفصلتان؛ لا ننسب التسمية لشخص بعينه ما لم يذكر المصدر ذلك.</p>
            <dl className="mt-4 grid gap-3 border-t border-[#ddd6c8] pt-3 sm:grid-cols-3">
              <Fact label="المكتشف" value={element.discoverer} unknownLabel={notConfirmed} />
              <Fact label="السنة" value={element.discoveryYear} unknownLabel={notConfirmed} />
              <Fact label="المكان" value={element.discoveryPlace} unknownLabel={notConfirmed} />
            </dl>
            <p className="mt-2 text-[10px] leading-5 text-[#7b8580]">تُعرض معلومات الاكتشاف غير المثبتة على أنها غير مؤكدة؛ لا تُستكمل بالتخمين.</p>
          </div>
          <div className="border border-[#d6cebf] bg-[#f8f5ed] p-5 md:p-7" data-testid={`section-sources-${element.number}`}>
            <div className="eyebrow">قابلية التحقق</div>
            <h2 className="display-font mt-2 text-2xl">مصادر موثوقة</h2>
            {element.sources?.length ? <ul className="mt-3 space-y-2">
              {element.sources.map((source, index) => <li key={`${source.url}-${index}`}><a href={source.url} target="_blank" rel="noreferrer" data-testid={`link-source-${element.number}-${index}`} className="inline-flex items-center gap-2 text-sm text-[#315d52] underline underline-offset-4"><ExternalLink size={14} />{source.label || source.url}</a></li>)}
            </ul> : <p className="mt-3 text-sm leading-7 text-[#65716e]">لا توجد إحالات موثقة مرفقة بهذا الملف حاليًا. راجع سياسة المصادر قبل استخدام المعلومة أكاديميًا.</p>}
          </div>
        </div>
      </section>
      <section className="mt-7 flex items-center justify-between border-y border-[#d6cebf] py-4">
        {previous ? <Link href={`/element/${previous.number}`} data-testid="link-previous-element" className="flex items-center gap-2 text-xs text-[#47645a]"><ChevronLeft size={16} />السابق: {previous.nameAr}</Link> : <span />}
        <Link href="/" data-testid="link-all-elements" className="text-xs text-[#47645a] underline underline-offset-4"><Atom size={14} className="ml-1 inline" />كل العناصر</Link>
        {next ? <Link href={`/element/${next.number}`} data-testid="link-next-element" className="flex items-center gap-2 text-xs text-[#47645a]">{next.nameAr} :التالي<ChevronLeft className="rotate-180" size={16} /></Link> : <span />}
      </section>
    </article>
  );
}

function InfoSection({ title, items, empty, testId }: { title: string; items: string[]; empty: string; testId: string }) {
  return <section className="border border-[#d6cebf] bg-[#f8f5ed] p-5 md:p-7" data-testid={testId}>
    <h2 className="display-font text-2xl">{title}</h2>
    {items?.length ? <ul className="mt-3 space-y-2">{items.map((item, index) => <li key={`${item}-${index}`} className="flex gap-3 text-sm leading-7 text-[#455553]" data-testid={`${testId}-item-${index}`}><span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#9e8450]" />{item}</li>)}</ul> :
      <p className="mt-3 text-sm text-[#687570]">{empty}</p>}
  </section>;
}
