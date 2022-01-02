import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './modules/Home';
import About from './modules/About';
import Upload from './modules/Upload';

import './firebase';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/upload" element={<Upload />} />
  </Routes>
);

export default App;
