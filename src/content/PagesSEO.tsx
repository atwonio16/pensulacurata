// Componente React gata de implementat pentru fiecare pagină SEO
// Aceste componente pot fi copiate direct în src/pages/

// ============================================
// PAGINA: ZugraveliTargoviste.tsx
// ============================================
export const ZugraveliTargovisteCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, Check, Clock, MapPin, Shield } from 'lucide-react';

export default function ZugraveliTargoviste() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  return (
    <>
      <Helmet>
        <title>Zugrăveli Târgoviște | Prețuri 2025 | Zugrav Interior</title>
        <meta name="description" content="Zugrăveli interioare în Târgoviște. Zugrav profesionist, prețuri corecte, lucrare curată. Sună: 0774 613 207. Deviz gratuit." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        {/* Hero */}
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Zugrăveli interioare în Târgoviște
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Prețuri corecte, meserie bună, lucrare curată
            </p>
            <button
              onClick={handleCall}
              className="bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Sună acum: 0774 613 207
            </button>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Introducere */}
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Dacă cauți pe cineva care să-ți vopsească apartamentul sau casa în Târgoviște, 
            ești în locul potrivit. Facem zugrăveli complete sau parțiale în toate 
            cartierele orașului: Centru, Micro 4, Micro 5, Micro 6, Matei Voievod, 
            Priseaca și zona industrială.
          </p>

          {/* Prețuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-[#5A7D6F]" />
              Cât costă zugrăvelile în Târgoviște în 2025
            </h2>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5] mb-6">
              <h3 className="font-semibold text-[#2C2C2C] mb-4">Zugrăveală cu material inclus:</h3>
              <ul className="space-y-2 text-[#666666]">
                <li>• Garsonieră (30-40 mp): <strong className="text-[#2C2C2C]">2.500 – 3.500 lei</strong></li>
                <li>• Apartament 2 camere (50-60 mp): <strong className="text-[#2C2C2C]">4.000 – 5.500 lei</strong></li>
                <li>• Apartament 3 camere (70-80 mp): <strong className="text-[#2C2C2C]">5.500 – 7.500 lei</strong></li>
                <li>• Casă individuală: se calculează la fața locului</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <h3 className="font-semibold text-[#2C2C2C] mb-4">Doar manoperă (tu cumperi materialele):</h3>
              <p className="text-[#666666]">35 – 50 lei/mp în funcție de starea pereților</p>
            </div>

            <p className="text-sm text-[#666666] mt-4">
              Acestea sunt prețuri orientative. Sună la 0774 613 207 și venim să vedem exact ce ai de făcut.
            </p>
          </section>

          {/* Ce include */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Ce include o zugrăveală completă
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '1. Pregătirea', desc: 'Mutăm mobila, protejăm parchetul și suprafețele' },
                { title: '2. Gletuirea', desc: 'Aplicăm glet, reparăm crăpături, uscare 24h' },
                { title: '3. Șlefuirea', desc: 'Șlefuim manual și electric, aspirăm praful' },
                { title: '4. Vopsirea', desc: 'Grund + două straturi de lavabilă de calitate' },
                { title: '5. Finisajele', desc: 'Colțuri drepte, prize curate, tavan perfect' },
                { title: '6. Curățenia', desc: 'Strângem tot, aspirăm, pregătim pentru mutare' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                  <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                  <p className="text-sm text-[#666666] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Durată */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#5A7D6F]" />
              Cât durează o lucrare în Târgoviște
            </h2>
            <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
              <ul className="space-y-3 text-[#666666]">
                <li><strong className="text-[#2C2C2C]">Garsonieră:</strong> 3-4 zile lucrătoare</li>
                <li><strong className="text-[#2C2C2C]">Apartament 2 camere:</strong> 5-7 zile lucrătoare</li>
                <li><strong className="text-[#2C2C2C]">Apartament 3 camere:</strong> 7-10 zile lucrătoare</li>
                <li><strong className="text-[#2C2C2C]">Casă parter:</strong> 10-14 zile lucrătoare</li>
              </ul>
              <p className="text-sm text-[#666666] mt-4">
                Program: luni-sâmbătă, 8:00-18:00. Duminica nu lucrăm.
              </p>
            </div>
          </section>

          {/* Zone */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#5A7D6F]" />
              Zonele din Târgoviște unde lucrăm
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Centru vechi', 'Micro 4', 'Micro 5', 'Micro 6', 'Micro 9', 'Micro 10', 'Micro 11', 'Micro 12', 'Matei Voievod', 'Priseaca', 'Dragomirești', 'Cartierul Industrial'].map((zona) => (
                <span key={zona} className="px-3 py-1 bg-[#5A7D6F]/10 text-[#5A7D6F] rounded-full text-sm">
                  {zona}
                </span>
              ))}
            </div>
          </section>

          {/* Garanție */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#5A7D6F]" />
              De ce să alegi un zugrav din Târgoviște
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Suntem aproape</h3>
                <p className="text-sm text-[#666666]">Dacă apare ceva de rezolvat după ce terminăm, venim rapid. Nu aștepți pe cineva din alt oraș.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Conoaștem clima locală</h3>
                <p className="text-sm text-[#666666]">Știm cum se comportă materialele în condițiile de umiditate din Târgoviște.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Gata să începem?</h2>
            <p className="text-white/90 mb-6">
              Sună sau trimite mesaj pe WhatsApp. Venim în Târgoviște, evaluăm gratuit, 
              și îți dăm deviz clar.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// PAGINA: ZugravInteriorTargoviste.tsx
// ============================================
export const ZugravInteriorCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, Award, Users, ThumbsUp, MessageCircle } from 'lucide-react';

export default function ZugravInteriorTargoviste() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  return (
    <>
      <Helmet>
        <title>Zugrav Interior Târgoviște | Meseriaș de Încredere | 0774 613 207</title>
        <meta name="description" content="Cauți zugrav interior în Târgoviște? Meserie calificată, prețuri corecte, lucrare curată. Sună acum pentru deviz gratuit." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Zugrav interior în Târgoviște
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Meserie calificată, oameni serioși, rezultate de durată
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Un zugrav interior bun face diferența între o casă care arată „bine" și 
            una care arată „excelent". În Târgoviște sunt mulți care se laudă că fac 
            zugrăveli, dar puțini care chiar știu meserie.
          </p>

          {/* Ce face un zugrav bun */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#5A7D6F]" />
              Ce face un zugrav interior bun
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Pregătește corect suprafața', desc: 'Curăță, chituiește, șlefuiește înainte de a vopsi' },
                { title: 'Știe să lucreze cu diferite materiale', desc: 'Lavabilă, superlavabilă, vopsea pentru bucătărie și baie' },
                { title: 'Are răbdare la detalii', desc: 'Colțuri drepte, tavan perfect, prize curate' },
                { title: 'Respectă clientul', desc: 'Vine la timp, lucrează curat, comunică transparent' },
                { title: 'Își asumă greșelile', desc: 'Dacă iese ceva prost, repară fără discuții' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                  <ThumbsUp className="w-5 h-5 text-[#5A7D6F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cum alegi */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#5A7D6F]" />
              Cum alegi zugravul potrivit în Târgoviște
            </h2>
            <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
              <ol className="space-y-4 text-[#666666]">
                <li><strong className="text-[#2C2C2C]">1. Cere referințe</strong> – Un zugrav bun are clienți mulțumiți care pot confirma calitatea.</li>
                <li><strong className="text-[#2C2C2C]">2. Compară devizele</strong> – Nu alege automat pe cel mai ieftin. Citește ce include fiecare deviz.</li>
                <li><strong className="text-[#2C2C2C]">3. Discută despre materiale</strong> – Întreabă ce marcă de vopsea folosește.</li>
                <li><strong className="text-[#2C2C2C]">4. Verifică disponibilitatea</strong> – Un zugrav bun are programul ocupat cu 1-2 săptămâni în avans.</li>
                <li><strong className="text-[#2C2C2C]">5. Cere garanție scrisă</strong> – Oferim 12 luni garanție pentru toate finisajele.</li>
              </ol>
            </div>
          </section>

          {/* Proces */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-[#5A7D6F]" />
              Cum decurge o colaborare cu noi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { step: '1', title: 'Contact', desc: 'Ne suni la 0774 613 207 sau ne scrii pe WhatsApp' },
                { step: '2', title: 'Evaluare', desc: 'Venim în Târgoviște să vedem spațiul, gratuit' },
                { step: '3', title: 'Deviz', desc: 'Îți trimitem deviz clar cu toate costurile' },
                { step: '4', title: 'Programare', desc: 'Stabilim data de începere (1-2 săptămâni avans)' },
                { step: '5', title: 'Execuția', desc: 'Lucrăm zilnic, ținem legătura, recepție finală' },
                { step: '6', title: 'Garanție', desc: '12 luni garanție, rămânem disponibili' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5] flex gap-4">
                  <span className="w-8 h-8 bg-[#5A7D6F] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Hai să discutăm despre proiectul tău</h2>
            <p className="text-white/90 mb-6">
              Sună și programăm o vizită în Târgoviște. Evaluare gratuită, deviz clar, fără presiune.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// PAGINA: ZugraveliDambovita.tsx
// ============================================
export const ZugraveliDambovitaCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Truck, HeartHandshake } from 'lucide-react';

export default function ZugraveliDambovita() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  const orase = ['Târgoviște', 'Moreni', 'Găești', 'Pucioasa', 'Titu', 'Fieni'];
  
  const comune = [
    'Aninoasa', 'Băleni', 'Bărbulețu', 'Bezdead', 'Bilciurești', 'Braniștea',
    'Bucșani', 'Cândești', 'Ciocănești', 'Comișani', 'Corbii Mari', 'Cornățelu',
    'Costeștii din Vale', 'Crângurile', 'Dărmănești', 'Dobra', 'Doicești',
    'Dragomirești', 'Finta', 'Glodeni', 'Gura Foii', 'Gura Ocniței',
    'I. L. Caragiale', 'Iedera', 'Lucieni', 'Ludești', 'Mănești',
    'Mătăsaru', 'Mogoșani', 'Moroeni', 'Niculești', 'Nucet', 'Ocnița',
    'Odobești', 'Petrești', 'Pietroșița', 'Poiana', 'Potlogi', 'Produlești',
    'Pucheni', 'Raciu', 'Răscăeți', 'Răzvad', 'Runcu', 'Sălcioara',
    'Șelaru', 'Slobozia Moară', 'Șotânga', 'Tărtășești', 'Tătărani',
    'Uliești', 'Ulmi', 'Văcărești', 'Valea Lungă', 'Văleni-Dâmbovița',
    'Vârfuri', 'Vișina', 'Vișinești'
  ];

  return (
    <>
      <Helmet>
        <title>Zugrăveli Dâmbovița | Zugrav în Moreni, Găești, Pucioasa</title>
        <meta name="description" content="Zugrăveli în tot județul Dâmbovița: Moreni, Găești, Pucioasa, Titu, Fieni. Meserie calificată, prețuri corecte. Sună: 0774 613 207." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Zugrăveli în Dâmbovița
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Acoperim tot județul – de la orașe la sate
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Deși suntem bazați în Târgoviște, facem zugrăveli în tot județul Dâmbovița. 
            Am lucrat în Moreni, Găești, Pucioasa, Titu, Fieni și în multe sate din 
            jur. Dacă ești în Dâmbovița și ai nevoie de un zugrav bun, suntem disponibili.
          </p>

          {/* Orașe */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#5A7D6F]" />
              Orașe acoperite
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {orase.map((oras) => (
                <div key={oras} className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5] text-center">
                  <h3 className="font-semibold text-[#2C2C2C]">{oras}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Comune */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Comune și sate în Dâmbovița
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <div className="flex flex-wrap gap-2">
                {comune.map((comuna) => (
                  <span key={comuna} className="px-3 py-1 bg-[#F8F7F4] text-[#666666] rounded text-sm">
                    {comuna}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#666666] mt-4">
              Dacă localitatea ta nu e în listă, sună-ne oricum. De multe ori putem ajunge și în alte zone.
            </p>
          </section>

          {/* De ce să aleagă */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-[#5A7D6F]" />
              De ce aleg clienții din Dâmbovița să lucreze cu noi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Suntem din zonă</h3>
                <p className="text-sm text-[#666666]">Nu trebuie să aștepți pe cineva din București sau Ploiești. Suntem aici, în Dâmbovița.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Prețuri fără transport majorat</h3>
                <p className="text-sm text-[#666666]">Deși venim din Târgoviște, nu percepem costuri exagerate de transport.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Înțelegem specificul local</h3>
                <p className="text-sm text-[#666666]">Știm cum sunt construite casele în Dâmbovița și ce probleme apar frecvent.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">Disponibilitate</h3>
                <p className="text-sm text-[#666666]">Programăm lucrări în toată săptămâna și adaptăm programul la nevoile tale.</p>
              </div>
            </div>
          </section>

          {/* Prețuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Truck className="w-6 h-6 text-[#5A7D6F]" />
              Prețuri zugrăveli Dâmbovița
            </h2>
            <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
              <p className="text-[#666666] mb-4">Prețurile sunt similare cu cele din Târgoviște, cu o diferență mică pentru transport:</p>
              <ul className="space-y-2 text-[#666666]">
                <li><strong className="text-[#2C2C2C]">Moreni:</strong> +100 lei transport</li>
                <li><strong className="text-[#2C2C2C]">Găești:</strong> +150 lei transport</li>
                <li><strong className="text-[#2C2C2C]">Pucioasa:</strong> +150 lei transport</li>
                <li><strong className="text-[#2C2C2C]">Titu:</strong> +100 lei transport</li>
                <li><strong className="text-[#2C2C2C]">Fieni:</strong> +200 lei transport</li>
                <li><strong className="text-[#2C2C2C]">Satele din apropiere de Târgoviște:</strong> gratuit</li>
              </ul>
              <p className="text-sm text-[#666666] mt-4">
                Pentru lucrări mari, transportul poate fi inclus în preț.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Ești în Dâmbovița și ai nevoie de zugrăveli?</h2>
            <p className="text-white/90 mb-6">
              Indiferent că ești în oraș sau la sat, sună-ne și discutăm. 
              Evaluare gratuită în tot județul.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// PAGINA: VopseaLavabilaTargoviste.tsx
// ============================================
export const VopseaLavabilaCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, Droplets, Sparkles, Brush, Clock } from 'lucide-react';

export default function VopseaLavabilaTargoviste() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  return (
    <>
      <Helmet>
        <title>Vopsea Lavabilă Târgoviște | Aplicare Profesională | Prețuri</title>
        <meta name="description" content="Aplicare vopsea lavabilă în Târgoviște. Calitate superioară, finisaje impecabile, garanție 12 luni. Sună: 0774 613 207." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Vopsea lavabilă în Târgoviște
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Aplicare profesională, rezultate de durată
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Vopseaua lavabilă e alegerea potrivită pentru majoritatea locuințelor. 
            Se curăță ușor, rezistă în timp și arată bine ani de zile. În Târgoviște, 
            majoritatea clienților noștri aleg lavabilă pentru apartamente și case.
          </p>

          {/* Beneficii */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#5A7D6F]" />
              De ce să alegi vopsea lavabilă
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Se curăță ușor', desc: 'Pete de murdărie, urme de mâini – totul se șterge cu o lavetă umedă' },
                { title: 'Rezistă la uzură', desc: 'Nu se cojește, nu crapă și își păstrează culoarea' },
                { title: 'Permeabilitate la vapori', desc: 'Pereții „respiră", reduce riscul de mucegai' },
                { title: 'Variații de finisaj', desc: 'Mat, satinat, lucios – alege aspectul preferat' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                  <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                  <p className="text-sm text-[#666666] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tipuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Tipuri de vopsea lavabilă – ce să alegi
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Lavabilă economică (80-100 lei/2.5L)</h3>
                <p className="text-sm text-[#666666]">Pentru spații de închiriat. Rezistență medie la spălare, durată 3-5 ani.</p>
              </div>
              <div className="bg-[#5A7D6F]/10 rounded-lg p-4 border border-[#5A7D6F]/20">
                <h3 className="font-semibold text-[#2C2C2C]">Lavabilă premium (120-180 lei/2.5L) ⭐ Recomandată</h3>
                <p className="text-sm text-[#666666]">Pentru locuințe proprii. Rezistență bună la spălare, durată 7-10 ani.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Superlavabilă (200-300 lei/2.5L)</h3>
                <p className="text-sm text-[#666666]">Pentru spații cu trafic intens, familii cu copii sau animale.</p>
              </div>
            </div>
          </section>

          {/* Proces */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Brush className="w-6 h-6 text-[#5A7D6F]" />
              Cum aplicăm vopseaua lavabilă
            </h2>
            <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
              <ol className="space-y-4 text-[#666666]">
                <li><strong className="text-[#2C2C2C]">1. Pregătirea</strong> – Curățăm suprafața, reparăm crăpături, aplicăm grund</li>
                <li><strong className="text-[#2C2C2C]">2. Gletuirea</strong> – Dacă e necesar, două straturi de glet cu uscare</li>
                <li><strong className="text-[#2C2C2C]">3. Vopsirea</strong> – Primul strat de lavabilă, uscare 4-6 ore</li>
                <li><strong className="text-[#2C2C2C]">4. Stratul final</strong> – Al doilea strat, finisaje, curățenie</li>
              </ol>
            </div>
          </section>

          {/* Prețuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Cât costă aplicarea vopselei lavabile în Târgoviște
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Doar aplicare</h3>
                <p className="text-2xl font-bold text-[#5A7D6F] mt-2">15-20 lei/mp</p>
                <p className="text-sm text-[#666666]">Tu cumperi vopseaua</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Cu material inclus</h3>
                <p className="text-2xl font-bold text-[#5A7D6F] mt-2">+40-60 lei/mp</p>
                <p className="text-sm text-[#666666]">Adaos pentru vopsea premium</p>
              </div>
            </div>
            <p className="text-sm text-[#666666] mt-4">
              Prețul exact îl stabilim după evaluare la fața locului.
            </p>
          </section>

          {/* Îngrijire */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-[#5A7D6F]" />
              Îngrijirea pereților vopsiți cu lavabilă
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <ul className="space-y-3 text-[#666666]">
                <li>• Așteaptă minimum 2 săptămâni înainte de prima spălare</li>
                <li>• Folosește o lavetă moale umezită cu apă călduță</li>
                <li>• Evită bureții abrazivi și solvenții</li>
                <li>• Șterge praful periodic cu o lavetă uscată</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Vrei pereți cu lavabilă aplicată profesional?</h2>
            <p className="text-white/90 mb-6">
              Sună și programăm o evaluare în Târgoviște. Îți recomandăm marca potrivită.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// PAGINA: GletSiFinisajeTargoviste.tsx
// ============================================
export const GletSiFinisajeCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, Layers, CheckCircle, Hammer } from 'lucide-react';

export default function GletSiFinisajeTargoviste() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  return (
    <>
      <Helmet>
        <title>Glet și Finisaje Târgoviște | Pereți Perfecți | Zugrav</title>
        <meta name="description" content="Gletuire profesională și finisaje de calitate în Târgoviște. Pereți perfecți, fără denivelări. Sună: 0774 613 207." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Glet și finisaje în Târgoviște
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Pentru pereți perfecți – fără denivelări, fără imperfecțiuni
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Un perete bine gletuit e baza unei zugrăveli reușite. Indiferent cât de 
            scumpă e vopseaua, dacă sub ea sunt denivelări, crăpături sau suprafețe 
            neregulate, rezultatul final va fi prost.
          </p>

          {/* Ce este gletul */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#5A7D6F]" />
              Ce este gletul și la ce folosește
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <p className="text-[#666666] mb-4">
                Gletul e un material de construcție pe bază de ipsos sau ciment care servește la:
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#5A7D6F] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#2C2C2C]">Nivelarea pereților</strong> – elimină denivelările și crează suprafețe plane</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#5A7D6F] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#2C2C2C]">Acoperirea imperfecțiunilor</strong> – crăpături, găuri de dibluri, urme de șuruburi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#5A7D6F] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#2C2C2C]">Pregătirea pentru vopsire</strong> – asigură aderența și uniformitatea vopselei</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Când ai nevoie */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Când ai nevoie de gletuire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#5A7D6F]/5 rounded-lg p-4">
                <h3 className="font-semibold text-[#2C2C2C] mb-3">Avem nevoie de gletuire dacă:</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>✓ Pereții sunt „la roșu" (cărămidă sau BCA)</li>
                  <li>✓ Vopseaua veche s-a cojit sau crapă</li>
                  <li>✓ Sunt crăpături vizibile în pereți</li>
                  <li>✓ Vrei un finisaj de calitate superioară</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] mb-3">Putem sări peste gletuire dacă:</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>✓ Pereții sunt deja gletuiți și în stare bună</li>
                  <li>✓ Vrei doar o „mână de vopsea"</li>
                  <li>✓ Suprafața e suficient de netedă</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proces */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Hammer className="w-6 h-6 text-[#5A7D6F]" />
              Procesul de gletuire pas cu pas
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Pregătirea suprafeței', desc: 'Curățăm de praf, grăsime, umezim suprafața' },
                { step: '2', title: 'Primul strat', desc: 'Glet de umplere pentru denivelări mari, uscare 24h' },
                { step: '3', title: 'Stratul final', desc: 'Glet de finisaj pentru suprafață netedă, uscare 24-48h' },
                { step: '4', title: 'Șlefuirea', desc: 'Manual și electric, mai multe treceri, aspirare praf' },
                { step: '5', title: 'Controlul calității', desc: 'Verificare la lumină, reparații punctuale' },
                { step: '6', title: 'Pregătirea pentru vopsire', desc: 'Grund, curățenie completă' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                  <span className="w-8 h-8 bg-[#5A7D6F] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prețuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Prețuri gletuire în Târgoviște
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Gletuire pereți</h3>
                <p className="text-2xl font-bold text-[#5A7D6F] mt-2">25-35 lei/mp</p>
                <p className="text-sm text-[#666666]">Pereți în stare acceptabilă</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Gletuire tavane</h3>
                <p className="text-2xl font-bold text-[#5A7D6F] mt-2">30-40 lei/mp</p>
                <p className="text-sm text-[#666666]">Mai dificil de lucrat</p>
              </div>
            </div>
            <p className="text-sm text-[#666666] mt-4">
              Cu material inclus: adaugă ~10-15 lei/mp pentru glet, bandă, folie.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Vrei pereți perfecți?</h2>
            <p className="text-white/90 mb-6">
              Sună și venim să evaluăm. Îți spunem clar ce trebuie făcut și cât costă.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// PAGINA: RenovariApartamenteTargoviste.tsx
// ============================================
export const RenovariApartamenteCode = `
import { Helmet } from 'react-helmet-async';
import { Phone, Home, Clock, CheckSquare, ListChecks } from 'lucide-react';

export default function RenovariApartamenteTargoviste() {
  const handleCall = () => window.location.href = 'tel:0774613207';

  return (
    <>
      <Helmet>
        <title>Renovări Apartamente Târgoviște | Transformări Complete | Zugrav</title>
        <meta name="description" content="Renovări complete și parțiale de apartamente în Târgoviște. Zugrăveli, glet, finisaje. Sună acum: 0774 613 207." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F7F4] to-white">
        <section className="bg-[#5A7D6F] text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Renovări apartamente în Târgoviște
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              De la vechi la nou – transformări complete
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Un apartament renovat corect îți schimbă calitatea vieții. Fie că ai 
            cumpărat ceva vechi, vrei să vinzi mai bine, sau pur și simplu vrei 
            schimbare, o renovare bine făcută merită investiția.
          </p>

          {/* Ce include */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <CheckSquare className="w-6 h-6 text-[#5A7D6F]" />
              Ce includ renovările noastre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Zugrăveli complete</h3>
                <p className="text-sm text-[#666666]">Îndepărtare strat vechi, gletuire, vopsire cu lavabilă în toate camerele</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Pregătire profesională</h3>
                <p className="text-sm text-[#666666]">Protecție mobilă și parchet, acoperire prize și uși</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Finisaje de calitate</h3>
                <p className="text-sm text-[#666666]">Colțuri drepte, tavane perfecte, prize curate</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C]">Curățenie finală</h3>
                <p className="text-sm text-[#666666]">Strângere materiale, aspirare, pregătit pentru mutare</p>
              </div>
            </div>
            <p className="text-sm text-[#666666] mt-4">
              <strong>Nu includem:</strong> Electrică, instalații sanitare, schimbat parchet sau gresie, demolări majore.
            </p>
          </section>

          {/* Complet vs Parțial */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Home className="w-6 h-6 text-[#5A7D6F]" />
              Renovare completă vs. parțială
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
                <h3 className="font-semibold text-[#2C2C2C] text-lg mb-3">Renovare completă</h3>
                <p className="text-sm text-[#666666] mb-3">Toate camerele – ideal când ai cumpărat apartament vechi sau vrei să vinzi.</p>
                <ul className="space-y-1 text-sm text-[#666666]">
                  <li>• Toate camerele: dormitoare, living, hol, bucătărie, baie</li>
                  <li>• Tavane și pereți în toată casa</li>
                  <li>• Gletuire completă</li>
                  <li>• Două straturi de lavabilă</li>
                </ul>
                <p className="text-[#5A7D6F] font-semibold mt-3">Durată: 7-14 zile</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
                <h3 className="font-semibold text-[#2C2C2C] text-lg mb-3">Renovare parțială</h3>
                <p className="text-sm text-[#666666] mb-3">Camere selectate – ideal când o singură cameră arată prost sau ai buget limitat.</p>
                <ul className="space-y-1 text-sm text-[#666666]">
                  <li>• 1-2 camere la alegere</li>
                  <li>• Doar pereții sau doar tavanul</li>
                  <li>• Doar o „mână de vopsea"</li>
                  <li>• Flexibil, adaptat nevoilor tale</li>
                </ul>
                <p className="text-[#5A7D6F] font-semibold mt-3">Durată: 2-5 zile</p>
              </div>
            </div>
          </section>

          {/* Durată */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#5A7D6F]" />
              Cât durează o renovare de apartament
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E5E5]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">Renovare completă:</h3>
                  <ul className="space-y-1 text-sm text-[#666666]">
                    <li>Garsonieră: <strong>5-7 zile</strong></li>
                    <li>Apartament 2 camere: <strong>7-10 zile</strong></li>
                    <li>Apartament 3 camere: <strong>10-14 zile</strong></li>
                    <li>Apartament 4 camere: <strong>12-16 zile</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">Doar zugrăveli:</h3>
                  <ul className="space-y-1 text-sm text-[#666666]">
                    <li>Garsonieră: <strong>3-4 zile</strong></li>
                    <li>Apartament 2 camere: <strong>5-7 zile</strong></li>
                    <li>Apartament 3 camere: <strong>7-10 zile</strong></li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-[#666666] mt-4">
                Program: luni-sâmbătă, 8:00-18:00.
              </p>
            </div>
          </section>

          {/* Prețuri */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
              Cât costă să renovezi un apartament în Târgoviște
            </h2>
            <div className="bg-[#5A7D6F]/5 rounded-lg p-6">
              <p className="text-[#666666] mb-4">Prețuri orientative pentru renovare completă cu material lavabilă premium:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E5E5]">
                      <th className="text-left py-2 text-[#2C2C2C]">Tip</th>
                      <th className="text-left py-2 text-[#2C2C2C]">Mp</th>
                      <th className="text-left py-2 text-[#2C2C2C]">Preț aproximativ</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666666]">
                    <tr className="border-b border-[#E5E5E5]/50">
                      <td className="py-2">Garsonieră</td>
                      <td className="py-2">30-40</td>
                      <td className="py-2 font-semibold text-[#5A7D6F]">3.500 – 4.500 lei</td>
                    </tr>
                    <tr className="border-b border-[#E5E5E5]/50">
                      <td className="py-2">2 camere</td>
                      <td className="py-2">50-60</td>
                      <td className="py-2 font-semibold text-[#5A7D6F]">5.000 – 6.500 lei</td>
                    </tr>
                    <tr className="border-b border-[#E5E5E5]/50">
                      <td className="py-2">3 camere</td>
                      <td className="py-2">70-80</td>
                      <td className="py-2 font-semibold text-[#5A7D6F]">7.000 – 9.000 lei</td>
                    </tr>
                    <tr>
                      <td className="py-2">4 camere</td>
                      <td className="py-2">90-110</td>
                      <td className="py-2 font-semibold text-[#5A7D6F]">9.000 – 12.000 lei</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#666666] mt-4">
                Plată: 30% la început, 40% la jumătate, 30% la final.
              </p>
            </div>
          </section>

          {/* Etape */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-[#5A7D6F]" />
              Etapele unei renovări de succes
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Evaluare și planificare', desc: 'Venim să vedem apartamentul, discutăm, stabilim deviz și termen' },
                { step: '2', title: 'Pregătire', desc: 'Acoperim și mutăm mobila, protejăm tot ce nu se vopsește' },
                { step: '3', title: 'Demolare și curățare', desc: 'Îndepărtăm vopsea veche, curățăm suprafețele' },
                { step: '4', title: 'Gletuire', desc: 'Aplicare glet, uscare și șlefuire' },
                { step: '5', title: 'Vopsire', desc: 'Grund + două straturi de lavabilă' },
                { step: '6', title: 'Finalizare', desc: 'Montare prize, curățenie generală, recepție' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-[#E5E5E5]">
                  <span className="w-8 h-8 bg-[#5A7D6F] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A7D6F] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Pregătit să renovezi apartamentul?</h2>
            <p className="text-white/90 mb-6">
              Sună și programăm o vizită în Târgoviște. Evaluare gratuită, deviz clar, fără surprize.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white text-[#5A7D6F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
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
`;

// ============================================
// INSTRUCȚIUNI DE IMPLEMENTARE
// ============================================
export const ImplementationInstructions = `
# Instrucțiuni de Implementare

## 1. Instalare react-helmet-async (dacă nu e deja)
\`\`\`bash
npm install react-helmet-async
\`\`\`

## 2. Adaugă HelmetProvider în main.tsx
\`\`\`tsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
\`\`\`

## 3. Copiază fișierele în src/pages/
- ZugraveliTargoviste.tsx
- ZugravInteriorTargoviste.tsx
- ZugraveliDambovita.tsx
- VopseaLavabilaTargoviste.tsx
- GletSiFinisajeTargoviste.tsx
- RenovariApartamenteTargoviste.tsx
- ZoneAcoperite.tsx

## 4. Adaugă rutele în App.tsx
\`\`\`tsx
import { Routes, Route } from 'react-router-dom';
import ZugraveliTargoviste from './pages/ZugraveliTargoviste';
import ZugravInteriorTargoviste from './pages/ZugravInteriorTargoviste';
// ... alte importuri

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zugraveli-targoviste" element={<ZugraveliTargoviste />} />
      <Route path="/zugrav-interior-targoviste" element={<ZugravInteriorTargoviste />} />
      <Route path="/zugraveli-dambovita" element={<ZugraveliDambovita />} />
      <Route path="/vopsea-lavabila-targoviste" element={<VopseaLavabilaTargoviste />} />
      <Route path="/glet-si-finisaje-targoviste" element={<GletSiFinisajeTargoviste />} />
      <Route path="/renovari-apartamente-targoviste" element={<RenovariApartamenteTargoviste />} />
      <Route path="/zone-acoperite" element={<ZoneAcoperite />} />
    </Routes>
  );
}
\`\`\`

## 5. Actualizează sitemap.xml
Adaugă noile URL-uri în sitemap.xml pentru SEO.

## 6. Testează toate paginile
- Verifică title tags în browser
- Verifică meta descriptions
- Testează responsive design
- Verifică link-urile de navigare
`;
