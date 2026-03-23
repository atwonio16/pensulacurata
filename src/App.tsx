import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ZugraveliTargoviste } from './pages/ZugraveliTargoviste';
import { ZugraveliDambovita } from './pages/ZugraveliDambovita';
import { ZugravInteriorTargoviste } from './pages/ZugravInteriorTargoviste';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zugraveli-targoviste" element={<ZugraveliTargoviste />} />
        <Route path="/zugraveli-dambovita" element={<ZugraveliDambovita />} />
        <Route path="/zugrav-interior-targoviste" element={<ZugravInteriorTargoviste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
