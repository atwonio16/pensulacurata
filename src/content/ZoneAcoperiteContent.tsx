import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Check } from 'lucide-react';

// Lista completă a localităților din Dâmbovița
const orase = [
  'Târgoviște',
  'Moreni',
  'Găești',
  'Pucioasa',
  'Titu',
  'Fieni'
];

const comuneApropiere = [
  'Aninoasa', 'Băleni', 'Bărbulețu', 'Bezdead', 'Bilciurești', 'Braniștea',
  'Bucșani', 'Cândești', 'Ciocănești', 'Comișani', 'Corbii Mari', 'Cornățelu',
  'Costeștii din Vale', 'Crângurile', 'Dărmănești', 'Dobra', 'Doicești',
  'Dragomirești', 'Finta'
];

const comuneMoreni = [
  'Arcuș', 'Bărbătescu', 'Bâldana', 'Iedera', 'Lucieni', 'Mănești',
  'Șotânga', 'Văcărești'
];

const comuneGaesti = [
  'Croitori', 'Mănăstirea', 'Priboiu', 'Rățoi', 'Lungulețu', 'Produlești'
];

const comuneMunte = [
  'Moroeni', 'Glod', 'Bolovani', 'Dobrești', 'Pucheni', 'Runcu'
];

const comuneTitu = [
  'Bărbuceanu', 'Bădulești', 'Boteni', 'Broșteni', 'Greci', 'Mârla', 'Sălcioara'
];

const alteComune = [
  'Niculești', 'Nucet', 'Ocnița', 'Odobești', 'Petrești', 'Pietroșița',
  'Poiana', 'Potlogi', 'Raciu', 'Răscăeți', 'Răzvad', 'Șelaru',
  'Slobozia Moară', 'Tărtășești', 'Tătărani', 'Uliești', 'Ulmi',
  'Valea Lungă', 'Văleni-Dâmbovița', 'Vârfuri', 'Vișina', 'Vișinești'
];

export default function ZoneAcoperiteContent() {
  const handleCall = () => {
    window.location.href = 'tel:0774613207';
  };

  return (
    <>
      <Helmet>
        <title>Zone Acoperite | Zugrav Târgoviște Dâmbovița | Pensula Curată</title>
        <meta name="description" content="Acoperim Târgoviște și tot județul Dâmbovița: Moreni, Găești, Pucioasa și toate satele. Zugrăveli profesionale. Sună: 0774 613 207." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        {/* Hero */}
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Zone acoperite – unde venim să lucrăm
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Suntem bazați în Târgoviște și acoperim tot județul Dâmbovița. 
              Fie că ești în oraș sau la țară, putem ajunge la tine.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Orașe principale */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C2C2C] mb-8 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#5A7D6F]" />
              Orașe acoperite
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orase.map((oras) => (
                <div key={oras} className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5A7D6F] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] text-lg">{oras}</h3>
                      <p className="text-[#666666] text-sm mt-1">
                        {oras === 'Târgoviște' 
                          ? 'Toate cartierele: Centru, Micro 4-12, Matei Voievod, Priseaca'
                          : 'Cartiere rezidențiale și zone centrale'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Zone Târgoviște */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Zone în apropiere de Târgoviște (transport gratuit)
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <p className="text-[#666666] mb-4">
                Pentru localitățile la maxim 15 km de Târgoviște, nu percepem cost suplimentar de transport:
              </p>
              <div className="flex flex-wrap gap-2">
                {comuneApropiere.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#5A7D6F]/10 text-[#5A7D6F] rounded-full text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Alte zone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Zona Moreni</h3>
              <div className="flex flex-wrap gap-2">
                {comuneMoreni.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Zona Găești</h3>
              <div className="flex flex-wrap gap-2">
                {comuneGaesti.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Zona Pucioasa (munți)</h3>
              <div className="flex flex-wrap gap-2">
                {comuneMunte.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Zona Titu</h3>
              <div className="flex flex-wrap gap-2">
                {comuneTitu.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Alte comune */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Alte comune din Dâmbovița
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <div className="flex flex-wrap gap-2">
                {alteComune.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Info transport */}
          <section className="bg-[#5A7D6F]/5 rounded-lg p-6 md:p-8 mb-12">
            <h2 className="text-xl font-serif font-bold text-[#2C2C2C] mb-4">
              Costuri de transport
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Zona 1 (0-15 km)</h3>
                <p className="text-[#666666] text-sm">Târgoviște și împrejurimi</p>
                <p className="text-[#5A7D6F] font-semibold mt-2">GRATUIT</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Zona 2 (15-40 km)</h3>
                <p className="text-[#666666] text-sm">Moreni, Găești, Pucioasa, Titu, Fieni</p>
                <p className="text-[#5A7D6F] font-semibold mt-2">100-200 lei</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Zona 3 (40+ km)</h3>
                <p className="text-[#666666] text-sm">Sate îndepărtate sau alte județe</p>
                <p className="text-[#5A7D6F] font-semibold mt-2">Discutăm separat</p>
              </div>
            </div>
            <p className="text-[#666666] text-sm mt-4">
              * Pentru lucrări mari, costul de transport poate fi inclus în preț sau negociat.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C2C2C] mb-4">
              Ești în Dâmbovița și ai nevoie de zugrăveli?
            </h2>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              Indiferent de localitate, sună-ne și discutăm. De multe ori putem ajunge 
              și în zone care nu sunt în listă, mai ales pentru lucrări complete.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-[#5A7D6F] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#4A6D5F] transition-colors"
            >
              <Phone className="w-5 h-5" />
              0774 613 207
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
