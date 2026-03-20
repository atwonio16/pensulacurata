import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ZugraveliTargoviste } from './pages/ZugraveliTargoviste';
import { ZugraveliDambovita } from './pages/ZugraveliDambovita';
import { ZugravInteriorTargoviste } from './pages/ZugravInteriorTargoviste';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zugraveli-targoviste" element={<ZugraveliTargoviste />} />
        <Route path="/zugraveli-dambovita" element={<ZugraveliDambovita />} />
        <Route path="/zugrav-interior-targoviste" element={<ZugravInteriorTargoviste />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
