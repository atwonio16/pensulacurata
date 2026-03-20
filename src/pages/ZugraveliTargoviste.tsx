import { SEOPageTemplate } from '../components/SEOPageTemplate';

const faqs = [
  {
    question: "Cât costă zugrăvirea unui apartament în Târgoviște?",
    answer: "Prețul depinde de suprafață și starea pereților. Pentru un apartament de 2 camere, prețul variază în funcție de cât de multe reparații sunt necesare. Sună la 0774 613 207 pentru o estimare gratuită."
  },
  {
    question: "Cât durează o zugrăveală în Târgoviște?",
    answer: "Un apartament de 2 camere se zugrăvește în 2-3 zile lucrătoare, dacă pereții sunt în stare bună. Dacă e nevoie de glet și reparații, poate dura 4-5 zile."
  },
  {
    question: "Folosiți materiale de calitate?",
    answer: "Da, folosim vopsea lavabilă de calitate, glet și materiale profesionale. Putem cumpăra noi materialele sau poți să le furnizezi tu."
  },
  {
    question: "Lucrați și în weekend în Târgoviște?",
    answer: "Da, putem lucra și în weekend dacă este necesar. Programul este flexibil și îl stabilim împreună."
  },
  {
    question: "Oferiți garanție pentru zugrăveli?",
    answer: "Da, oferim garanție pentru lucrările efectuate. Dacă apar probleme în primele luni, revenim și remediem fără costuri suplimentare."
  }
];

export function ZugraveliTargoviste() {
  return (
    <SEOPageTemplate
      metaTitle="Zugrăveli Târgoviște | Pensula Curată | 0774 613 207"
      metaDescription="Zugrăveli profesionale în Târgoviște. Pereți curați, finisaje de calitate, fără stres. Sună acum: 0774 613 207."
      h1="Zugrăveli în Târgoviște"
      problemText="Pereții din casa ta arată obosiți? Vopseaua s-a îngălbenit, au apărut pete sau crăpături? Un interior neîngrijit afectează starea ta de spirit și valoarea locuinței."
      solutionText="Îți oferim zugrăveli curate și profesionale în Târgoviște. Lucrăm rapid, fără praf excesiv, și lăsăm totul curat la final. Pereți drepți, finisaje impecabile, fără bătăi de cap."
      areaText="Deservim întreg orașul Târgoviște și zonele limitrofe: Micro 1-12, Centru, Priseaca, Romanesti, și cartierele rezidențiale."
      faqs={faqs}
    />
  );
}
