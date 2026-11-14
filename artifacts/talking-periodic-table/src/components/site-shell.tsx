import { type ReactNode } from 'react';
import { Atom, BookOpen, Info } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Shell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="museum-shell" dir="rtl" lang="ar">
      <header className="masthead">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link href="/" data-testid="link-home" aria-label="العودة إلى الجدول الدوري" className="flex items-center gap-3 text-inherit no-underline">
            <span className="flex h-10 w-10 items-center justify-center border border-[#bfa56e]/60 text-[#d9bd82]"><Atom size={23} strokeWidth={1.4} /></span>
            <span>
               <span className="block display-font text-lg leading-tight md:text-xl">الجدول الدوري الناطق</span>
              <span className="mt-1 block text-[9px] tracking-[.18em] text-[#c7c4b8]">موسوعة الكيمياء العربية</span>
            </span>
          </Link>
          <nav aria-label="التنقل الرئيسي" className="flex items-center gap-2 text-sm md:gap-5">
            <Link href="/" data-testid="link-periodic-table" className={`flex items-center gap-1.5 px-2 py-2 transition-colors hover:text-[#ddc48c] ${location === '/' ? 'text-[#ddc48c]' : 'text-[#e5e2d9]'}`}>
              <BookOpen size={15} /><span>الجدول الدوري</span>
            </Link>
            <Link href="/about" data-testid="link-about" className={`flex items-center gap-1.5 px-2 py-2 transition-colors hover:text-[#ddc48c] ${location === '/about' ? 'text-[#ddc48c]' : 'text-[#e5e2d9]'}`}>
              <Info size={15} /><span>عن الموسوعة</span>
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#d8d1c1] bg-[#e9e5da]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-[#687273] md:flex-row md:items-center md:justify-between md:px-10">
          <span>مرجع تعليمي باللغة العربية — تُذكر حدود المعرفة بوضوح.</span>
          <span className="mono-font" dir="ltr">118 ELEMENTS · A LIVING REFERENCE</span>
        </div>
      </footer>
    </div>
  );
}
