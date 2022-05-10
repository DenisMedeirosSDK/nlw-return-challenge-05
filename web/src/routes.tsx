import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import LandingPage from './pages';

export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
