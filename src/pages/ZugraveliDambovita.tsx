import { SEOPageTemplate } from "@/components/SEOPageTemplate";

export function ZugraveliDambovita() {
  return (
    <SEOPageTemplate
      title="Zugrăveli Dâmbovița | Zugrav Județul Dâmbovița"
      headline="Zugrăveli în județul Dâmbovița"
      description="Servicii de zugrăvit în județul Dâmbovița. Târgoviște, Moreni, Pucioasa, Găești, Titu. Sună: 0774 613 207"
      locationName="Județul Dâmbovița"
      locationDescription="Mă deplasez în toate localitățile din județul Dâmbovița. Târgoviște, Moreni, Pucioasa, Găești, Titu și satele din împrejurimi. Transport gratuit în raza de 50km din Târgoviște."
      areaServed={[
        "Târgoviște",
        "Moreni",
        "Pucioasa",
        "Găești",
        "Titu",
        "Fieni",
        "Răcari",
        "Satele din împrejurimi",
      ]}
    />
  );
}
