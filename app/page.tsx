// @ts-nocheck
"use client";

import { Amatic_SC, Cabin } from "next/font/google";
import content from "../data/content.json";

const display = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });
const body = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const SAGE = "#6B7F60";
const SAGE_DARK = "#4F6347";
const COFFEE = "#3D2817";
const CREAM = "#FAF6F0";
const WARM = "#F2E8D5";
const ACCENT = "#D4A574";

const GALLERY = content.gallery || [content.hero.image];

export default function Page() {
  return (
    <main className={body.className} style={{ background: CREAM, color: COFFEE }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(24px, -14px); } }
        .fade-up { animation: fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-up-d1 { animation-delay: 120ms; }
        .blob { animation: drift 18s ease-in-out infinite alternate; }
      `}</style>

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5 lg:px-10 lg:py-6 flex items-center justify-between">
        <div className={display.className} style={{ fontSize: '30px', lineHeight: 1, color: COFFEE, fontWeight: 700, letterSpacing: '0.02em' }}>
          {content.businessName}
        </div>
        <div className="flex items-center gap-3 text-[13px] font-medium" style={{ color: COFFEE }}>
          <a href="#menu" className="hidden sm:inline hover:opacity-70 transition">Menu</a>
          <a href="#visit" className="hidden sm:inline hover:opacity-70 transition">Visit</a>
          <a href={content.hero.ctaLink} className="px-4 py-2 rounded-full font-semibold text-[13px]" style={{ background: SAGE, color: 'white' }}>
            Call
          </a>
        </div>
      </nav>

      <section className="relative min-h-[88vh] flex items-center px-6 lg:px-10 overflow-hidden" style={{ background: `linear-gradient(135deg, ${CREAM} 0%, ${WARM} 100%)` }}>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] blob opacity-50" style={{ background: `radial-gradient(circle, ${ACCENT}AA, transparent 70%)`, borderRadius: '64% 36% 52% 48% / 38% 52% 48% 62%' }}></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] blob opacity-40" style={{ background: `radial-gradient(circle, ${SAGE}70, transparent 70%)`, borderRadius: '36% 64% 48% 52% / 52% 48% 62% 38%', animationDelay: '4s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-24 pb-12">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" style={{ background: 'white', border: `1px solid ${SAGE}40` }}>
              <span style={{ color: ACCENT, fontSize: '16px' }}>★★★★★</span>
              <span className="text-[13px] font-semibold" style={{ color: COFFEE }}>{content.rating} · {content.reviewCount.toLocaleString()} reviews</span>
            </div>
            <h1 className={display.className} style={{ fontSize: 'clamp(64px, 9vw, 120px)', lineHeight: 0.92, color: COFFEE, fontWeight: 700, marginBottom: '24px' }}>
              {content.hero.heading}
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8 max-w-lg" style={{ color: COFFEE + 'CC' }}>
              {content.hero.subheading}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={content.hero.ctaLink} className="px-7 py-3.5 rounded-full font-semibold text-[15px] transition-transform hover:scale-105" style={{ background: SAGE, color: 'white', boxShadow: `0 12px 24px ${SAGE}40` }}>
                {content.hero.ctaText}
              </a>
              <a href="#menu" className="px-7 py-3.5 rounded-full font-semibold text-[15px] transition-colors hover:bg-white" style={{ background: 'rgba(255,255,255,0.6)', color: COFFEE, border: `1.5px solid ${COFFEE}25` }}>
                View menu
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[13px]" style={{ color: COFFEE + '99' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {content.contact.address}
            </div>
          </div>

          <div className="fade-up fade-up-d1 relative">
            <div className="relative aspect-[5/6] overflow-hidden" style={{ borderRadius: '48px 36px 42px 38px', boxShadow: '0 30px 60px rgba(61,40,23,0.22)' }}>
              <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-[180px] h-[230px] overflow-hidden hidden lg:block" style={{ borderRadius: '36px 30px 32px 28px', boxShadow: '0 20px 40px rgba(61,40,23,0.24)', transform: 'rotate(-6deg)' }}>
              <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[1] || GALLERY[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto px-6 py-20 lg:py-28 text-center">
        <div className={display.className} style={{ fontSize: '32px', color: SAGE, fontWeight: 700, lineHeight: 1 }}>About us</div>
        <h2 className="text-[36px] lg:text-[52px] font-bold leading-tight mt-3 mb-7" style={{ color: COFFEE }}>{content.about.heading}</h2>
        <div className="space-y-5">
          {content.about.paragraphs.map((p, i) => (
            <p key={i} className="text-[16.5px] lg:text-[18px] leading-relaxed" style={{ color: COFFEE + 'C0' }}>{p}</p>
          ))}
        </div>
      </section>

      <section id="menu" className="px-6 lg:px-10 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <div className={display.className} style={{ fontSize: '32px', color: SAGE, fontWeight: 700, lineHeight: 1 }}>What we make</div>
          <h2 className="text-[36px] lg:text-[52px] font-bold leading-tight mt-3" style={{ color: COFFEE }}>Coffee with intention.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.map((s, i) => {
            const radii = ['40px 30px 40px 30px', '32px 44px 28px 40px', '36px 28px 44px 32px', '28px 38px 32px 44px'];
            return (
              <div key={i} className="p-8 transition-transform hover:scale-[1.015]" style={{ background: WARM, borderRadius: radii[i % 4] }}>
                <div className={display.className} style={{ fontSize: '34px', color: SAGE, fontWeight: 700, lineHeight: 1, marginBottom: '8px' }}>0{i + 1}</div>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-[22px] font-bold" style={{ color: COFFEE }}>{s.title}</h3>
                  {s.price && <span className="text-[14px] font-semibold whitespace-nowrap" style={{ color: SAGE_DARK }}>{s.price}</span>}
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: COFFEE + 'B0' }}>{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {GALLERY.map((p, i) => {
            const radii = ['32px 28px 36px 30px', '40px 32px 28px 40px', '28px 40px 32px 36px', '36px 30px 40px 28px'];
            return (
              <div key={i} className="aspect-square overflow-hidden transition-transform hover:scale-[1.02]" style={{ borderRadius: radii[i % 4] }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${p}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 lg:py-28" style={{ background: SAGE + '14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className={display.className} style={{ fontSize: '32px', color: SAGE, fontWeight: 700, lineHeight: 1 }}>What folks say</div>
            <h2 className="text-[36px] lg:text-[52px] font-bold leading-tight mt-3" style={{ color: COFFEE }}>{content.rating} ★ on Google</h2>
            <p className="text-[15px] mt-3" style={{ color: COFFEE + 'A0' }}>{content.reviewCount.toLocaleString()} happy regulars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reviews.map((r, i) => (
              <div key={i} className="p-7 bg-white" style={{ borderRadius: '36px 30px 34px 32px', boxShadow: '0 8px 24px rgba(61,40,23,0.08)' }}>
                <div className="mb-3" style={{ color: ACCENT, fontSize: '18px', letterSpacing: '2px' }}>{'★'.repeat(r.rating)}</div>
                <p className="text-[15.5px] leading-relaxed mb-5" style={{ color: COFFEE }}>&ldquo;{r.text}&rdquo;</p>
                <div className="text-[13px] font-semibold" style={{ color: SAGE_DARK }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 lg:px-10 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <div className={display.className} style={{ fontSize: '32px', color: SAGE, fontWeight: 700, lineHeight: 1 }}>Come visit</div>
            <h2 className="text-[36px] lg:text-[52px] font-bold leading-tight mt-3 mb-6" style={{ color: COFFEE }}>Honolulu Avenue, Glendale.</h2>
            <div className="mb-6">
              <div className="font-semibold text-[16px] mb-1" style={{ color: COFFEE }}>{content.contact.address}</div>
              <a href={content.hero.ctaLink} className="text-[15px] hover:underline" style={{ color: SAGE_DARK }}>{content.contact.phone}</a>
            </div>
            <table className="w-full max-w-md">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, h]) => (
                  <tr key={day} className="border-b" style={{ borderColor: COFFEE + '14' }}>
                    <td className="py-3 text-[14.5px] font-medium" style={{ color: COFFEE }}>{day}</td>
                    <td className="py-3 text-[14.5px] text-right tabular-nums" style={{ color: COFFEE + 'B0' }}>{String(h)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative overflow-hidden h-[480px] lg:h-auto" style={{ borderRadius: '48px 36px 42px 38px', boxShadow: '0 24px 50px rgba(61,40,23,0.15)' }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(content.contact.mapEmbedQuery)}`} className="absolute inset-0 w-full h-full border-0" loading="lazy" title="Location"></iframe>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto p-10 lg:p-16 text-center relative overflow-hidden" style={{ background: SAGE, borderRadius: '60px 48px 54px 50px', color: 'white' }}>
          <div className="absolute -top-20 -left-20 w-[260px] h-[260px] opacity-30" style={{ background: ACCENT, borderRadius: '64% 36% 52% 48% / 38% 52% 48% 62%' }}></div>
          <div className="absolute -bottom-32 -right-20 w-[300px] h-[300px] opacity-25" style={{ background: WARM, borderRadius: '36% 64% 48% 52% / 52% 48% 62% 38%' }}></div>
          <div className="relative">
            <div className={display.className} style={{ fontSize: '32px', color: ACCENT, fontWeight: 700, lineHeight: 1, marginBottom: '6px' }}>See you tomorrow morning</div>
            <h2 className="text-[40px] lg:text-[64px] font-bold leading-tight mb-6">Coffee, the way Glendale wakes up.</h2>
            <a href={content.hero.ctaLink} className="inline-block px-9 py-4 rounded-full text-[16px] font-semibold transition-transform hover:scale-105" style={{ background: 'white', color: SAGE_DARK }}>
              Call {content.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 lg:px-10 py-10 border-t" style={{ borderColor: COFFEE + '14' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={display.className} style={{ fontSize: '26px', color: COFFEE, fontWeight: 700, lineHeight: 1 }}>{content.businessName}</div>
          <div className="text-[13px]" style={{ color: COFFEE + '80' }}>© {new Date().getFullYear()} {content.businessName} · Glendale, CA · {content.rating}★ · {content.reviewCount.toLocaleString()} reviews</div>
        </div>
      </footer>
    </main>
  );
}
