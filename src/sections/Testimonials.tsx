const reviews = [
  {
    name: "Maria P.",
    loc: "Târgoviște",
    text: "Am rămas plăcut surprinsă. A venit la timp, a lucrat curat și rezultatul e excelent.",
  },
  {
    name: "Ion D.",
    loc: "Moreni",
    text: "Mi-a zugrăvit apartamentul în 3 zile. Fără praf, fără dezordine. Preț corect.",
  },
  {
    name: "Elena G.",
    loc: "Târgoviște",
    text: "S-a ocupat de toate, inclusiv de cumpărarea materialelor. Pereți impecabili.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Ce spun clienții
          </h2>
          <p className="text-grey-600">
            Păreri de la oameni reali.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-grey-50 rounded-lg p-6">
              <p className="text-grey-700 mb-4 text-sm leading-relaxed">
                "{r.text}"
              </p>
              <div className="pt-4 border-t border-grey-200">
                <p className="font-medium text-black text-sm">{r.name}</p>
                <p className="text-grey-500 text-xs">{r.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
