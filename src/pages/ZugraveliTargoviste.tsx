import { SEOPageTemplate } from "@/components/SEOPageTemplate";

export function ZugraveliTargoviste() {
  return (
    <SEOPageTemplate
      title="Zugrăveli Târgoviște | Zugrav Profesionist"
      headline="Zugrăveli în Târgoviște"
      description="Zugrav în Târgoviște. Zugrăvit, gletuit, finisaje pentru apartamente și case. Sună: 0774 613 207"
      locationName="Târgoviște"
      locationDescription="Lucrez în Târgoviște și zonele înconjurătoare. Ofer servicii de zugrăvit pentru apartamente, case și spații comerciale. Știu particularitățile construcțiilor din zonă și cum să obțin cele mai bune rezultate."
      areaServed={[
        "Centru Târgoviște",
        "Micro 1-12",
        "Cartierul 1 Mai",
        "Cartierul Tudor Vladimirescu",
        "Cartierul CFR",
        "Satele limitrofe",
      ]}
    />
  );
}
