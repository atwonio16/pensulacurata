import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <Logo showIcon={false} size="sm" />
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
  );
}
