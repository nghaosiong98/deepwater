import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './modules/Home';
import About from './modules/About';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
);

export default App;
