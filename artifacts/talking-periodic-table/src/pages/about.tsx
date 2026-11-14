import { type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowUpLeft, BookOpenCheck, CircleHelp, ExternalLink, FileCheck2, Microscope } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1160px] px-5 py-9 md:px-10 md:py-14">
      <div className="grid gap-8 border-b border-[#d4ccbd] pb-10 md:grid-cols-[1.2fr_.8fr] md:items-end md:pb-14">
        <div>
          <div className="eyebrow mb-3">عن المشروع · منهجنا</div>
          <h1 className="display-font text-4xl leading-tight text-[#26373a] md:text-6xl">العلم أوضح،<br /><span className="text-[#8e7140]">حين يتكلم بلغتك.</span></h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#596663] md:text-base">«الجدول الدوري الناطق» موسوعة تعليمية تفاعلية باللغة العربية، تساعد طلاب الكيمياء على استكشاف العناصر وفهم ما نعرفه عنها — وما لا نعرفه بعد.</p>
        </div>
        <div className="flex items-center gap-4 border-r-2 border-[#a88a53] bg-[#e8e3d7] p-5">
          <span className="display-font text-5xl text-[#a88a53]">١١٨</span>
          <p className="text-sm leading-6 text-[#57645f]">ملفًا للعناصر، من الهيدروجين إلى أوغانيسون، في بنية واحدة قابلة للبحث والاستكشاف.</p>
        </div>
      </div>
      <section className="grid gap-8 py-10 md:grid-cols-[.65fr_1.35fr] md:py-14">
        <div><div className="eyebrow">الفكرة</div><h2 className="display-font mt-2 text-3xl">معرفة بلا ادعاء</h2></div>
        <div className="space-y-5 text-sm leading-8 text-[#52615d]">
          <p>كل عنصر يتحدث بصيغة المتكلم، عبر ميزة قراءة صوتية في المتصفح. هذا أسلوب تعليمي لتقريب المفاهيم؛ لا يعني أن للعنصر صوتًا حقيقيًا أو شخصية علمية.</p>
          <p>تُبنى ملفات العناصر على البيانات المرفقة مع الموسوعة وإحالاتها. لا نملأ الحقول المجهولة بتخمينات؛ وتظهر تفاصيل الاكتشاف غير المتحققة على أنها «غير مؤكدة» بدل عرضها كحقيقة.</p>
          <p>صور العينات في صفحات العناصر لها تسمية صريحة. قد تكون الصورة تمثيلًا بصريًا، وقد لا تتوفر صورة أصلًا؛ ولا تُعرض الصورة على أنها عينة حقيقية ما لم يثبت مصدرها ذلك.</p>
        </div>
      </section>
      <section className="border-y border-[#d4ccbd] py-10 md:py-12">
        <div className="eyebrow">ثلاثة مبادئ تحريرية</div>
        <div className="mt-6 grid gap-px bg-[#d4ccbd] md:grid-cols-3">
          <Policy icon={<BookOpenCheck size={20} />} number="٠١" title="مصدر قبل المعلومة" body="نفضّل المراجع العلمية والمؤسساتية، ونُظهر الإحالات الموجودة على صفحة العنصر مباشرة." />
          <Policy icon={<CircleHelp size={20} />} number="٠٢" title="المجهول معلومة" body="عندما لا توفر البيانات تفصيلًا موثوقًا، نصرّح بأنه غير متاح أو غير مؤكد، ولا نخترع تاريخًا أو مكتشفًا." />
          <Policy icon={<Microscope size={20} />} number="٠٣" title="الصورة ليست الدليل" body="المادة البصرية تشرح وتقرّب، لكنها لا تحل محل التوثيق، ويُذكر بوضوح إن كانت تمثيلًا أو غير متاحة." />
        </div>
      </section>
      <section className="grid gap-8 py-10 md:grid-cols-[.65fr_1.35fr] md:py-14">
        <div><div className="eyebrow">سياسة المصادر</div><h2 className="display-font mt-2 text-3xl">كيف تستخدم هذا المرجع؟</h2></div>
        <div className="space-y-4">
          <p className="text-sm leading-8 text-[#52615d]">افتح ملف أي عنصر لمراجعة المصادر المرفقة به. إذا لم تظهر إحالات في الملف، فهذا يعني أن سجل البيانات الحالي لا يحتوي على روابط موثقة؛ لا يعني أن جميع التفاصيل قد خضعت لمراجعة مستقلة.</p>
          <div className="flex items-start gap-3 border border-[#d4ccbd] bg-[#e9e5da] p-4 text-xs leading-6 text-[#5c6864]"><FileCheck2 size={17} className="mt-1 shrink-0 text-[#8e7140]" /><p>للأبحاث أو القرارات الأكاديمية، ارجع إلى المراجع الأولية والكتب العلمية التي تناسب تخصصك، وتحقق من تاريخ النشر ونطاق كل مصدر.</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#d4ccbd] pt-4 text-xs">
            <a href="https://periodic-table.rsc.org/" target="_blank" rel="noreferrer" data-testid="link-source-rsc" className="inline-flex items-center gap-1.5 text-[#315d52] underline underline-offset-4">الجمعية الملكية للكيمياء <ExternalLink size={13} /></a>
            <a href="https://pubchem.ncbi.nlm.nih.gov/periodic-table" target="_blank" rel="noreferrer" data-testid="link-source-pubchem" className="inline-flex items-center gap-1.5 text-[#315d52] underline underline-offset-4">PubChem <ExternalLink size={13} /></a>
            <a href="https://iupac.org/what-we-do/periodic-table-of-elements/" target="_blank" rel="noreferrer" data-testid="link-source-iupac" className="inline-flex items-center gap-1.5 text-[#315d52] underline underline-offset-4">IUPAC <ExternalLink size={13} /></a>
          </div>
          <p className="text-xs text-[#7b8580]">لا تقدّم هذه الموسوعة استشارة مهنية أو بيانات تجريبية جديدة، ولا تستبدل الكتب الدراسية أو مراجع السلامة المختبرية.</p>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#d4ccbd] pt-6">
        <p className="text-xs text-[#7b8580]">صُممت كأداة تعليمية عربية قابلة للاستكشاف، مع الحفاظ على حدود البيانات كما هي.</p>
        <Link href="/" data-testid="link-explore-table" className="inline-flex items-center gap-2 bg-[#315d52] px-5 py-3 text-sm text-[#f7f3e9] hover:bg-[#25483f]">استكشف الجدول <ArrowUpLeft size={16} /></Link>
      </div>
    </div>
  );
}

function Policy({ icon, number, title, body }: { icon: ReactNode; number: string; title: string; body: string }) {
  return <article className="bg-[#f7f4ec] p-5 md:p-7">
    <div className="flex items-center justify-between text-[#8e7140]">{icon}<span className="mono-font text-[10px]">{number}</span></div>
    <h3 className="display-font mt-5 text-xl text-[#29393b]">{title}</h3>
    <p className="mt-3 text-xs leading-7 text-[#62706b]">{body}</p>
  </article>;
}
