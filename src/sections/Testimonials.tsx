const reviews = [
  {
    name: "Maria P.",
    initial: "M",
    loc: "Târgoviște",
    text: "Am renovat un apartament în Târgoviște și a lucrat foarte curat. A acoperit tot înainte și nu a lăsat mizerie. A terminat în 4 zile exact cum am stabilit.",
  },
  {
    name: "Ion D.",
    initial: "I",
    loc: "Moreni",
    text: "Serios și punctual. A venit la timp în fiecare zi și a respectat termenul. Pereții au ieșit foarte bine, fără imperfecțiuni.",
  },
  {
    name: "Elena G.",
    initial: "E",
    loc: "Târgoviște",
    text: "Mi-a făcut zugrăveala completă într-o casă. S-a ocupat și de materiale și a fost corect la preț. Recomand pentru cine vrea lucrare fără stres.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-grey-50 border-t border-grey-100">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Recenzii reale de la clienți din Târgoviște
          </h2>
          <p className="text-grey-600 text-sm">
            Ce spun clienții despre lucrările noastre
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-grey-100 p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {/* Initial Circle */}
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-semibold flex items-center justify-center text-base">
                  {r.initial}
                </div>
                {/* Name & Location */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-black text-sm truncate">{r.name}</p>
                  <p className="text-grey-500 text-xs">{r.loc}</p>
                </div>
              </div>
              
              {/* Source */}
              <p className="text-grey-400 text-xs mb-3">Recenzie Google</p>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-grey-700 text-sm leading-relaxed">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Pensula+Curată+Târgoviște"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-grey-700 font-medium px-6 py-3 rounded-lg border border-grey-200 hover:border-grey-300 hover:bg-grey-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Vezi recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  );
}
