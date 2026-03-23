import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = ["Evaluare gratuită în 24h", "Garanție 2 ani", "Termen clar de execuție"];

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  return (
    <section className="relative min-h-[88vh] pt-28 md:pt-32 pb-16 md:pb-20 flex items-center bg-gradient-to-br from-white via-grey-50/70 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,620px)_minmax(0,500px)] gap-10 lg:gap-8 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center lg:text-left max-w-[620px]"
          >
            <h1 className="font-display font-black text-black mb-6 leading-[1.03] text-[clamp(2.35rem,2.95vw,3.25rem)] tracking-[-0.035em] max-w-[620px]">
              <span className="block">Zugrăveli și finisaje</span>
              <span className="block">
                de calitate în <span className="text-brand">Târgoviște</span>
              </span>
            </h1>

            <p className="text-grey-700 text-lg md:text-[1.04rem] mb-8 leading-[1.68] max-w-[590px] mx-auto lg:mx-0">
              <span className="block">Zugrav în Târgoviște. Lucrări curate, fără stres și fără întârzieri.</span>
              <span className="block">Ofer zugrăveli interioare și exterioare în Târgoviște și</span>
              <span className="block">Dâmbovița.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-6 justify-center lg:justify-start">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleCall} className="btn-primary text-base px-7 py-3.5">
                <Phone className="w-5 h-5" />
                Sună pentru ofertă
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/40774613207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-7 py-3.5"
              >
                Scrie pe WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start pt-1">
              {benefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2 text-[0.93rem] text-grey-700 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:max-w-[500px] lg:ml-auto w-full"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-4 w-32 h-32 bg-brand/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-5 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />

              <div className="relative rounded-3xl overflow-hidden border border-grey-200 bg-white shadow-medium">
                <div className="aspect-[5/4] lg:aspect-[5/5]">
                  <img
                    src="/images/zugraveli-interioare-targoviste-camera-alba.jpg"
                    alt="Zugrav profesionist în Târgoviște la final de lucrare interioară"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
