import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import DoctorCare from './pages/DoctorCare';

export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorCare />} />
        <Route path="/feedback" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
