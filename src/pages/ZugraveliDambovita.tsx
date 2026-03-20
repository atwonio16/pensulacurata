import { SEOPageTemplate } from '../components/SEOPageTemplate';

const faqs = [
  {
    question: "Lucrați în toată zona județului Dâmbovița?",
    answer: "Da, lucrăm în tot județul Dâmbovița: Târgoviște, Ploiești (zona limitrofă), Găești, Titu, Moreni, Pucioasa, Fieni și satele din jur."
  },
  {
    question: "Cât costă deplasarea în afara Târgoviștei?",
    answer: "Deplasarea este gratuită în Târgoviște și în localitățile din jur (până la 15 km). Pentru distanțe mai mari, discutăm separat."
  },
  {
    question: "Cât durează zugrăvirea unei case în Dâmbovița?",
    answer: "O casă cu 3-4 camere se zugrăvește în 4-6 zile, în funcție de starea pereților și de suprafața totală."
  },
  {
    question: "Lucrați și la case la țară în Dâmbovița?",
    answer: "Da, lucrăm și la case din satele din județul Dâmbovița. Am experiență cu renovări complete și zugrăveli parțiale."
  },
  {
    question: "Pot plăti în rate?",
    answer: "Plata se face la finalul lucrării, în două tranșe: 50% la început și 50% la final. Nu oferim rate, dar putem discuta un program de plată flexibil."
  }
];

export function ZugraveliDambovita() {
  return (
    <SEOPageTemplate
      metaTitle="Zugrăveli Dâmbovița | Pensula Curată | 0774 613 207"
      metaDescription="Zugrăveli profesionale în tot județul Dâmbovița. Târgoviște și localitățile din jur. Sună acum: 0774 613 207."
      h1="Zugrăveli în Județul Dâmbovița"
      problemText="Ai o proprietate în județul Dâmbovița care are nevoie de zugrăveală? Găsești greu un zugrav de încredere care să vină la tine?"
      solutionText="Acoperim tot județul Dâmbovița cu servicii de zugrăveli profesionale. Venim la tine, evaluăm gratuit, și lucrăm cu materiale de calitate. Fără stres, fără complicații."
      areaText="Județul Dâmbovița: Târgoviște, Găești, Titu, Moreni, Pucioasa, Fieni, Răcari, Băleni și toate localitățile din jur."
      faqs={faqs}
    />
  );
}
