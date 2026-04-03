import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alexia Serafim",
    loc: "București",
    text: "Am renovat un apartament în Târgoviște și lucrarea a fost foarte curată. A acoperit tot, a respectat termenul și rezultatul final arată impecabil.",
  },
  {
    name: "Gabi Stingaciu",
    loc: "Târgoviște",
    text: "Punctual, corect și atent la detalii. Pereții au ieșit foarte bine, iar la final a lăsat totul curat. Se vede că știe ce face.",
    avatar: "/images/GabrielPFP.jpeg",
    avatarPosition: "50% 20%",
  },
  {
    name: "Gabi Stingaciu",
    loc: "Târgoviște",
    text: "Punctual, corect și atent la detalii. Pereții au ieșit foarte bine, iar la final a lăsat totul curat. Se vede că știe ce face.",
    avatar: "/images/GabrielPFP.jpeg",
    avatarPosition: "50% 20%",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-6 md:py-10 lg:py-11">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-9">
          <h2 className="mb-2 text-balance text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">
            Recenzii reale de la clienți
          </h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            Feedback autentic din lucrări de zugrăveli executate în Târgoviște și în localitățile din Dâmbovița.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:gap-[30px]">
          {reviews.map((review, i) => (
            <article key={`${review.name}-${i}`} className="flex h-full flex-col rounded-2xl border border-[#e9e7e5] bg-[#fcfcfc] p-4 md:bg-white md:p-5 lg:p-6">
              <div className="mb-3 flex items-start justify-between gap-3 md:mb-4">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={`Poza de profil ${review.name}`}
                      className="h-[52px] w-[52px] shrink-0 rounded-full object-cover md:h-[68px] md:w-[68px]"
                      style={{ objectPosition: review.avatarPosition ?? "center" }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-[52px] w-[52px] shrink-0 rounded-full bg-[#dddddf] md:h-[68px] md:w-[68px]" aria-hidden="true" />
                  )}
                  <div>
                    <p className="text-[15px] font-semibold leading-[1.2] text-[#222] md:text-[18px]">{review.name}</p>
                    <div className="mt-1 flex gap-1 md:mt-1.5" aria-label="5 stele din 5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-[14px] w-[14px] fill-[#f59e0b] text-[#f59e0b] md:h-[17px] md:w-[17px]" />
                      ))}
                    </div>
                  </div>
                </div>

                <span className="rounded-full border border-[#ece9e9] bg-[#fdfdfc] px-2.5 py-1 text-[12px] font-semibold leading-none text-[#8c8581] md:px-3 md:py-1.5 md:text-[14px]">
                  {review.loc}
                </span>
              </div>

              <p className="text-[12px] leading-[1.5] text-[#222] md:text-[16px] md:leading-[1.55]">"{review.text}"</p>

              <div className="mt-auto pt-3">
                <p className="text-[12px] font-medium leading-[1.2] text-[#938d89] md:text-[14px]">
                  Recenzie{" "}
                  <span className="text-[#3b82f6]">G</span>
                  <span className="text-[#ef4444]">o</span>
                  <span className="text-[#f59e0b]">o</span>
                  <span className="text-[#3b82f6]">g</span>
                  <span className="text-[#22c55e]">l</span>
                  <span className="text-[#ef4444]">e</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center md:mt-8">
          <a
            href="https://www.google.com/search?q=Pensula+Curata+Targoviste"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-base inline-flex items-center justify-center text-[13px] font-bold leading-none text-[#3156f5] underline decoration-[1.5px] underline-offset-[5px] md:text-[16px]"
          >
            Vezi recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  );
}

