import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Lucrari } from './pages/Lucrari';
import { ZugraveliTargoviste } from './pages/ZugraveliTargoviste';
import { ZugraveliDambovita } from './pages/ZugraveliDambovita';
import { ZugravInteriorTargoviste } from './pages/ZugravInteriorTargoviste';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiesPolicy } from './pages/CookiesPolicy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 84;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, elementTop - headerOffset), behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lucrari" element={<Lucrari />} />
        <Route path="/zugraveli-targoviste" element={<ZugraveliTargoviste />} />
        <Route path="/zugraveli-dambovita" element={<ZugraveliDambovita />} />
        <Route path="/zugrav-interior-targoviste" element={<ZugravInteriorTargoviste />} />
        <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
        <Route path="/politica-de-confidentialitate" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
