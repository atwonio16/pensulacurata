import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { FAQ } from './FAQ';
import { PageSchemaMarkup, FAQSchemaMarkup } from './SchemaMarkup';
import { Link } from 'react-router-dom';

interface SEOPageTemplateProps {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  problemText: string;
  solutionText: string;
  areaText: string;
  faqs: Array<{ question: string; answer: string }>;
  showBackLink?: boolean;
}

export function SEOPageTemplate({
  metaTitle,
  metaDescription,
  h1,
  problemText,
  solutionText,
  areaText,
  faqs,
  showBackLink = true,
}: SEOPageTemplateProps) {
  const handleCall = () => {
    window.location.href = 'tel:0774613207';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <PageSchemaMarkup
        title={metaTitle}
        description={metaDescription}
        url={`https://pensulacurata.ro${window.location.pathname}`}
      />
      <FAQSchemaMarkup faqs={faqs} />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Back Link */}
          {showBackLink && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#5A7D6F] transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Înapoi la pagina principală
              </Link>
            </motion.div>
          )}

          {/* Hero Content */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-6"
            >
              {h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-[#6B6B6B] mb-10"
            >
              Sună acum și stabilim detaliile
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.button
                onClick={handleCall}
                className="inline-flex items-center gap-3 bg-[#5A7D6F] text-white px-10 py-5 rounded-lg font-medium text-lg shadow-[0_4px_12px_rgba(90,125,111,0.25)] hover:bg-[#4A6B5E] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Sună acum
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem + Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-heading text-2xl font-semibold text-[#1A1A1A] mb-4">
                Problema
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed">{problemText}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <h2 className="font-heading text-2xl font-semibold text-[#1A1A1A] mb-4">
                Soluția noastră
              </h2>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5A7D6F] mt-1 flex-shrink-0" />
                <p className="text-[#1A1A1A] leading-relaxed">{solutionText}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#5A7D6F]" />
              <h2 className="font-heading text-2xl font-semibold text-[#1A1A1A]">
                Zona deservită
              </h2>
            </div>
            <p className="text-[#6B6B6B] text-lg">{areaText}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqs} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#5A7D6F]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Ai nevoie de zugrăveli?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Sună acum și îți răspundem rapid
            </p>
            <motion.button
              onClick={handleCall}
              className="inline-flex items-center gap-3 bg-white text-[#5A7D6F] px-10 py-5 rounded-lg font-medium text-lg hover:bg-[#FAFAFA] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              0774 613 207
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/">
              <span className="font-heading text-xl font-semibold text-[#1A1A1A]">Pensula Curată</span>
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[#6B6B6B]">
              <a
                href="tel:0774613207"
                className="flex items-center gap-2 hover:text-[#5A7D6F] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0774 613 207</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Târgoviște, Dâmbovița</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[#E5E5E5] text-center text-sm text-[#6B6B6B]">
            © {new Date().getFullYear()} Pensula Curată. Toate drepturile rezervate.
          </div>
        </div>
      </footer>
    </div>
  );
}
