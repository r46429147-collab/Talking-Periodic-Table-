Name="tile-name block">{element.nameAr}</span>
      <span cimport { useMemo, useState, type CSSProperties } from 'react';
import { Link } from 'wouter';
import { Search, X, ArrowDownLeft, FlaskConical, Layers3 } from 'lucide-react';
import { categories, elements, type CategoryKey, type ElementRecord } from '@/data/elements';

const colors = Object.fromEntries(categories.map((item) => [item.key, item.color])) as Record<CategoryKey, string>;

function tilePosition(element: ElementRecord) {
  if (element.category === 'lanthanide') return { gridColumn: element.number - 56, gridRow: 1 };
  if (element.category === 'actinide') return { gridColumn: element.number - 88, gridRow: 1 };
  return { gridColumn: element.group ?? 3, gridRow: element.period };
}

function ElementTile({ element, series = false }: { element: ElementRecord; series?: boolean }) {
  return (
    <Link href={`/element/${element.number}`} data-testid={`tile-element-${element.number}`}
      aria-label={`${element.number}: ${element.nameAr}، ${element.symbol}، الكتلة الذرية ${element.mass}`}
      className="element-tile group text-[#26373a] no-underline"
      style={{ '--tile-color': colors[element.category], ...(series ? {} : tilePosition(element)) } as CSSProperties}>
      <span className="tile-number block text-left">{element.number}</span>
      <span className="tile-symbol block" dir="ltr">{element.symbol}</span>
      <span className="tile-mass block text-left" dir="ltr">{element.mass}</span>
    </Link>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryKey | 'all'>('all');
  const normalized = query.trim().toLocaleLowerCase();
  const visibleElements = useMemo(() => elements.filter((element) => {
    const matchesCategory = category === 'all' || element.category === category;
    const matchesSearch = !normalized || [
      element.nameAr, element.nameEn, element.symbol, String(element.number),
    ].some((value) => value.toLocaleLowerCase().includes(normalized));
    return matchesCategory && matchesSearch;
  }), [category, normalized]);
  const visibleSet = new Set(visibleElements.map((element) => element.number));
  const mainElements = visibleElements.filter((element) => element.category !== 'lanthanide' && element.category !== 'actinide');
  const lanthanides = visibleElements.filter((element) => element.category === 'lanthanide');
  const actinides = visibleElements.filter((element) => element.category === 'actinide');

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[#d7cfbe] bg-[#e9e5da]">
        <div className="pointer-events-none absolute -left-12 top-[-120px] h-[380px] w-[380px] rounded-full border border-[#c4b997]/50" />
        <div className="pointer-events-none absolute -left-2 top-[-80px] h-[300px] w-[300px] rounded-full border border-[#c4b997]/40" />
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:grid-cols-[1.2fr_.8fr] md:items-end md:px-10 md:py-16">
          <div className="fade-up">
            <div className="eyebrow mb-4">دليل تفاعلي للكيمياء · الإصدار العربي</div>
            <h1 className="display-font max-w-3xl text-4xl leading-[1.35] text-[#25363b] md:text-6xl">
              لكل عنصرٍ <span className="text-[#8e7140]">حكاية.</span><br />ولكل حكاية دليل.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-8 text-[#586568] md:text-base">
              استكشف العناصر الـ١١٨، من أبسط الذرات إلى أثقلها. معرفة علمية موثّقة، بصوت عربي يعرّفك بنفسه.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#586568] md:text-base">
  الجدول الدوري الناطق هو موسوعة كيميائية عربية تفاعلية تضم العناصر الكيميائية الـ118، وتتيح استكشاف خصائص كل عنصر ومعلوماته ومصادر وجوده، مع إمكانية الاستماع إلى تعريف صوتي باللغة العربية. يهدف الموقع إلى تقديم الكيمياء بطريقة تعليمية مبسطة وتفاعلية، تجمع بين المعرفة العلمية والتجربة الصوتية.
</p>
          </div>
          <div className="grid grid-cols-3 border-y border-[#c9c1b1] py-4 text-center md:pb-1">
            <div className="border-l border-[#c9c1b1]"><div className="display-font text-3xl text-[#25363b]">١١٨</div><div className="mt-1 text-[11px] text-[#687273]">عنصرًا موثقًا</div></div>
            <div className="border-l border-[#c9c1b1]"><div className="display-font text-3xl text-[#25363b]">١٠</div><div className="mt-1 text-[11px] text-[#687273]">عائلات كيميائية</div></div>
            <div><div className="display-font text-3xl text-[#25363b]">١</div><div className="mt-1 text-[11px] text-[#687273]">مرجع عربي مفتوح</div></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-10 md:py-12" aria-labelledby="table-title">
        <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-2">قاعة العناصر</div>
            <h2 id="table-title" className="display-font text-3xl text-[#26373a]">الجدول الدوري</h2>
            <p className="mt-1 text-xs text-[#758080]">اختر أي بطاقة لفتح ملف العنصر الكامل.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="relative block min-w-[230px] flex-1 md:flex-none">
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8684]" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search"
                placeholder="ابحث بالاسم أو الرمز أو العدد"
                aria-label="ابحث باسم العنصر أو رمزه أو عدده الذري" data-testid="input-element-search"
                className="h-10 w-full border border-[#cec7b8] bg-[#f7f4ec] pr-9 pl-9 text-sm outline-none transition focus:border-[#446e63]" />
              {query && <button type="button" onClick={() => setQuery('')} aria-label="مسح البحث" data-testid="button-clear-search" className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-[#6e7775]"><X size={14} /></button>}
            </label>
            <span className="mono-font text-xs text-[#73807d]" data-testid="text-result-count">{visibleElements.length} / 118</span>
          </div>
        </div>
        <div className="mb-5 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="تصفية حسب العائلة الكيميائية">
          <button type="button" onClick={() => setCategory('all')} data-testid="filter-category-all" aria-pressed={category === 'all'}
            className={`shrink-0 border px-3 py-2 text-xs transition ${category === 'all' ? 'border-[#315d52] bg-[#315d52] text-[#f5f1e7]' : 'border-[#cec7b8] bg-[#f6f2e9] text-[#455457] hover:border-[#315d52]'}`}>كل العائلات</button>
          {categories.map((item) => (
            <button key={item.key} type="button" onClick={() => setCategory(category === item.key ? 'all' : item.key)}
              data-testid={`filter-category-${item.key}`} aria-pressed={category === item.key}
              className={`flex shrink-0 items-center gap-2 border px-3 py-2 text-xs transition ${category === item.key ? 'border-[#315d52] bg-[#315d52] text-[#f5f1e7]' : 'border-[#cec7b8] bg-[#f6f2e9] text-[#455457] hover:border-[#315d52]'}`}>
              <span className="h-2 w-2" style={{ backgroundColor: colors[item.key] }} />{item.labelAr}
            </button>
          ))}
        </div>
        <div className="mb-3 flex items-center gap-2 text-[11px] text-[#77817e]"><Layers3 size={14} />مواضع العناصر محفوظة وفق المجموعات والدورات</div>
        <div className="table-scroll border border-[#d5cebf] bg-[#e7e3d8] p-2 md:p-4" data-testid="periodic-table">
          <div className="periodic-grid" dir="ltr">
            {mainElements.map((element) => <ElementTile key={element.number} element={element} />)}
          </div>
          <div className="mt-4 space-y-2">
            {lanthanides.length > 0 && <div className="flex min-w-[740px] items-center gap-3"><span className="w-[92px] shrink-0 text-[10px] text-[#727c78]">اللانثانيدات</span><div className="series-grid">{lanthanides.map((element) => <ElementTile key={element.number} element={element} series />)}</div></div>}
            {actinides.length > 0 && <div className="flex min-w-[740px] items-center gap-3"><span className="w-[92px] shrink-0 text-[10px] text-[#727c78]">الأكتينيدات</span><div className="series-grid">{actinides.map((element) => <ElementTile key={element.number} element={element} series />)}</div></div>}
          </div>
          {visibleElements.length === 0 && <div className="px-6 py-12 text-center text-sm text-[#65716f]" role="status" data-testid="status-no-results">لا توجد عناصر تطابق البحث. جرّب اسمًا أو رمزًا آخر.</div>}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-b border-[#d5cebf] pb-5">
          {categories.map((item) => <span key={item.key} className="flex items-center gap-1.5 text-[10px] text-[#64706e]"><i className="h-2.5 w-2.5" style={{ background: colors[item.key] }} />{item.labelAr}</span>)}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-3 text-xs leading-6 text-[#66716e]"><FlaskConical size={16} className="mt-1 shrink-0 text-[#8b7447]" /><p>تُعرض المعلومات المتاحة من السجلات العلمية، وتُوسم البيانات غير المتوفرة أو غير المؤكدة بوضوح. الصور — حيث تظهر — توضيحية وليست بالضرورة عينات حقيقية.</p></div>
          <Link href="/about" className="text-xs text-[#315d52] underline underline-offset-4" data-testid="link-source-policy"><ArrowDownLeft size={14} className="inline" /> سياسة المصادر</Link>
        </div>
      </section>
      <div className="sr-only" aria-live="polite">{visibleSet.size} عنصرًا ظاهرًا</div>
    </div>
  );
}
