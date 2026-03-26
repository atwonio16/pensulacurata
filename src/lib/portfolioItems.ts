export interface PortfolioItem {
  slug: string;
  src: string;
  alt: string;
  title: string;
  area: string;
  serviceType: string;
  duration: string;
  scope: string;
  details: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "zugraveli-interioare-apartament",
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Zugraveli interioare in hol de apartament din Targoviste",
    title: "Zugraveli interioare apartament",
    area: "Targoviste",
    serviceType: "Zugraveli interioare",
    duration: "1-2 zile",
    scope: "Hol + pereti, pregatire si 2 straturi de lavabila",
    details: [
      "Am protejat pardoseala si plintele inainte de aplicarea materialelor.",
      "Peretii au fost corectati local, amorsati si vopsiti in 2 straturi pentru acoperire uniforma.",
      "La final, am facut curatenie si am lasat spatiul gata de folosit.",
    ],
  },
  {
    slug: "pregatire-completa-lavabila",
    src: "/images/zugraveli-interioare-targoviste-camera-alba.jpg",
    alt: "Camera pregatita pentru finisaje interioare in Targoviste",
    title: "Pregatire completa inainte de lavabila",
    area: "Targoviste",
    serviceType: "Pregatire pereti + lavabila",
    duration: "2-3 zile",
    scope: "Acoperire mobilier, reparatii punctuale, amorsa si finisaj",
    details: [
      "Mobila si zonele sensibile au fost protejate integral cu folie.",
      "Am facut reparatii locale unde a fost nevoie si am uniformizat suprafata.",
      "Aplicarea finala a fost realizata curat, cu margini precise si rezultat uniform.",
    ],
  },
  {
    slug: "finisaje-interioare-detalii",
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Tavan cu grinzi si pereti finisati curat in Targoviste",
    title: "Finisaje interioare cu atentie la detalii",
    area: "Targoviste",
    serviceType: "Finisaje decorative interioare",
    duration: "2 zile",
    scope: "Pereti + zone cu grinzi decorative",
    details: [
      "Am lucrat atent in zona grinzilor pentru delimitari curate si aspect premium.",
      "Finisajul a fost gandit pentru lumina naturala a incaperii, fara umbre sau urme de rola.",
      "S-a urmarit un rezultat elegant, cu aspect omogen pe toata suprafata.",
    ],
  },
  {
    slug: "fatada-casa-finisaj-premium",
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Casa cu finisaj exterior alb realizat in Dambovita",
    title: "Fatada casa - finisaj premium",
    area: "Dambovita",
    serviceType: "Zugraveli exterioare",
    duration: "3-5 zile",
    scope: "Fatada completa, pregatire si protectie",
    details: [
      "Am pregatit suportul si am aplicat sistemul de vopsire pentru exterior.",
      "Materialele au fost alese pentru rezistenta la umiditate si variatii de temperatura.",
      "Rezultatul final este curat si uniform, cu accent pe durabilitate in timp.",
    ],
  },
  {
    slug: "zugraveli-exterioare-executie",
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Aplicare vopsea exterior pe pereti in judetul Dambovita",
    title: "Zugraveli exterioare in executie",
    area: "Dambovita",
    serviceType: "Reimprospatare fatada",
    duration: "2-4 zile",
    scope: "Pereti exteriori, zone de detaliu si retusuri",
    details: [
      "Am realizat pregatirea suprafetelor si mascarea zonelor sensibile.",
      "Aplicarea vopselei a fost facuta controlat pentru acoperire buna si aspect uniform.",
      "La final, au fost verificate toate zonele pentru un finisaj coerent.",
    ],
  },
];
