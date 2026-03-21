import { Phone, Check } from "lucide-react";

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  const benefits = [
    "Evaluare gratuită în 24h",
    "Garanție 2 ani",
    "Disponibil și în weekend",
  ];

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-1">
            <h1 className="text-black mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left">
              Zugrăveli în Dâmbovița
            </h1>
            
            <p className="text-grey-600 text-base md:text-lg mb-6 leading-relaxed text-center md:text-left">
              Lucrez în Târgoviște și zonele înconjurătoare. 
              Zugrăvit, gletuit, finisaje. Calitate și seriozitate.
            </p>

            {/* Image - Full width on mobile */}
            <div className="md:hidden mb-6">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/eu.jpg"
                  alt="La lucru"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button 
                onClick={handleCall}
                className="btn-primary justify-center"
              >
                <Phone className="w-4 h-4" />
                Sună acum
              </button>
              <a 
                href="https://wa.me/40774613207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                WhatsApp
              </a>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-6 justify-center md:justify-start">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-grey-600 justify-center md:justify-start">
                  <Check className="w-4 h-4 text-brand flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Image - Only on desktop */}
          <div className="hidden md:flex order-2 justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src="/images/eu.jpg"
                alt="La lucru"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
