import { SEOPageTemplate } from '../components/SEOPageTemplate';

const faqs = [
  {
    question: "Ce înseamnă zugrăveală interioară completă?",
    answer: "Zugrăveală interioară completă include: protejarea mobilierului, reparații minore ale pereților, aplicare glet unde e necesar, șlefuire, grunduire și două straturi de vopsea lavabilă."
  },
  {
    question: "Trebuie să golesc camera înainte de zugrăveală?",
    answer: "Nu e necesar să golești complet. Mutăm mobilierul în centrul camerei și îl protejăm cu folie. Lucrăm curat și lăsăm totul la loc la final."
  },
  {
    question: "Cât timp trebuie să aerisesc după zugrăveală?",
    answer: "Vopseaua lavabilă se usucă în 2-4 ore la atingere, dar e bine să aerisești 2-3 zile pentru a elimina orice miros. Poți locui în casă imediat după uscare."
  },
  {
    question: "Faceți și tavane?",
    answer: "Da, zugrăvim și tavanele. Folosim vopsea specială pentru tavane care nu picură și acoperă uniform."
  },
  {
    question: "Cât costă zugrăvirea unei camere în Târgoviște?",
    answer: "O cameră de 20 mp costă în funcție de starea pereților. Prețul include materialele sau doar manopera, la alegere. Sună pentru o estimare exactă."
  }
];

export function ZugravInteriorTargoviste() {
  return (
    <SEOPageTemplate
      metaTitle="Zugrav Interior Târgoviște | Pensula Curată | 0774 613 207"
      metaDescription="Zugrav interior profesional în Târgoviște. Zugrăveli curate, finisaje de calitate. Sună acum: 0774 613 207."
      h1="Zugrav Interior în Târgoviște"
      problemText="Cauți un zugrav interior de încredere în Târgoviște? Ai nevoie de cineva care să lucreze curat, să respecte termenele și să ofere finisaje de calitate?"
      solutionText="Suntem specializați în zugrăveli interioare în Târgoviște. Lucrăm cu atenție la detalii, protejăm mobilierul și lăsăm spațiul curat la final. Fără stres, fără dezordine."
      areaText="Târgoviște și împrejurimi: toate cartierele, case și apartamente, birouri și spații comerciale."
      faqs={faqs}
    />
  );
}
