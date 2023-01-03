import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Spinner from '../Spinner/Spinner';

import './app.scss';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const PersonalProfilePage = lazy(() => import('../pages/personalProfilePage/PersonalProfilePage'));
const DailyReportPage = lazy(() => import('../pages/dailyReportPage/DailyReportPage'));
const Auth = lazy(() => import('../Auth/Auth'));

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app">
          <main>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/main-page" element={<MainPage />} />
                <Route path="/personal-profile-page" element={<PersonalProfilePage />} />
                <Route path="/daily-report-page" element={<DailyReportPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
