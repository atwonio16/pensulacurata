import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria P.",
    loc: "Târgoviște",
    text: "Am renovat un apartament în Târgoviște și lucrarea a fost foarte curată. A acoperit tot, a respectat termenul și rezultatul final arată impecabil.",
  },
  {
    name: "Ion D.",
    loc: "Moreni",
    text: "Serios și punctual. A venit la timp în fiecare zi și a terminat exact când am stabilit. Pereții sunt drepți, fără urme sau imperfecțiuni.",
  },
  {
    name: "Elena G.",
    loc: "Târgoviște",
    text: "Comunicare foarte bună, preț corect și multă atenție la detalii. A lăsat curat după lucrare și a fost o experiență fără stres.",
  },
];

export function Testimonials() {
  return (
    <section className="section-wrap border-t border-grey-100 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex rounded-full bg-brand/10 text-brand-dark px-4 py-1.5 text-sm font-semibold mb-4">Dovadă socială</p>
          <h2 className="mb-4 text-balance">Recenzii reale de la clienți</h2>
          <p className="text-grey-600 text-lg text-balance">Feedback autentic din lucrări de zugrăveli executate în Târgoviște și în localitățile din Dâmbovița.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <article key={i} className="surface-card p-6 h-full">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-black">{review.name}</p>
                <span className="text-xs font-semibold text-grey-500 bg-grey-100 border border-grey-200 px-2.5 py-1 rounded-full">{review.loc}</span>
              </div>

              <div className="flex gap-1 mb-3" aria-label="5 stele din 5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-sm text-grey-700 leading-relaxed">“{review.text}”</p>
              <p className="mt-4 text-xs text-grey-500">Recenzie Google</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Pensula+Curată+Târgoviște"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-7 py-3.5 text-base"
          >
            Vezi recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  );
}
