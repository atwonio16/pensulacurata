import { Phone, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  const benefits = [
    "Evaluare gratuită în 24h",
    "Garanție 2 ani",
    "Seriozitate și punctualitate",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-grey-50/50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Disponibil în Târgoviște și împrejurimi
            </motion.div>

            {/* Title */}
            <h1 className="text-black mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight">
              Zugrav în Târgoviște –{" "}
              <span className="text-brand">Zugrăveli și finisaje</span> de calitate
            </h1>

            {/* Subtitle */}
            <p className="text-grey-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Zugrav în Târgoviște. Lucrări curate, fără stres și fără întârzieri. 
              Ofer zugrăveli interioare și exterioare în Târgoviște și Dâmbovița.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCall}
                className="btn-primary text-base px-8 py-4 shadow-lg shadow-brand/20"
              >
                <Phone className="w-5 h-5" />
                Sună acum: 0774 613 207
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/40774613207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-grey-600">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/5 rounded-full blur-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-grey-200/50">
                <div className="aspect-[4/3] lg:aspect-square">
                  <img
                    src="/images/zugraveli-interioare-targoviste-camera-alba.jpg"
                    alt="Zugrav la lucru în Târgoviște - Zugrăveli interioare profesionale"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
