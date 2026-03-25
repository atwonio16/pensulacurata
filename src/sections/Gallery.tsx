import { Link } from "react-router-dom";

const images = [
  {
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Finisaj interior hol în Târgoviște",
    style: "plain",
  },
  {
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Zugrăveli exterior casă în Dâmbovița",
    style: "card",
  },
  {
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Detaliu tavan finisat profesional",
    style: "plain",
  },
  {
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Vopsire pereți exterior în lucru",
    style: "card",
  },
] as const;

interface GalleryProps {
  title?: string;
  subtitle?: string;
  sectionId?: string;
  showMoreLink?: boolean;
}

const defaultSubtitle =
  "Lucrări de zugrăveli în Târgoviște și Dâmbovița pentru apartamente, case și spații comerciale. Vezi rezultate reale și cere o ofertă gratuită.";

export function Gallery({
  title = "Lucrări în Târgoviște și Dâmbovița",
  subtitle = defaultSubtitle,
  sectionId = "lucrari",
  showMoreLink = false,
}: GalleryProps) {
  return (
    <section id={sectionId} className="bg-white py-10 md:py-16 lg:py-[78px]">
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-10">
          <h2 className="mb-2 text-balance text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">
            {title}
          </h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-[30px]">
          {images.map((img, i) => (
            <figure
              key={img.alt}
              className={
                img.style === "card"
                  ? "relative overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-px"
                  : "relative overflow-hidden rounded-2xl"
              }
            >
              <div className="aspect-[16/10] w-full md:aspect-[583/416]">
                <img src={img.src} alt={img.alt} loading={i > 1 ? "lazy" : "eager"} className="h-full w-full object-cover" />
              </div>
            </figure>
          ))}
        </div>

        {showMoreLink && (
          <div className="mt-6 text-center md:mt-8">
            <Link
              to="/lucrari"
              className="cta-base inline-flex items-center justify-center text-[13px] font-bold leading-none text-[#3156f5] underline decoration-[1.5px] underline-offset-[5px] md:text-[16px]"
            >
              Vezi portofoliu complet
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
