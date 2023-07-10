import React from 'react';
import {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import Spinner from '../Spinner/Spinner';

import './app.scss';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AnimalProfilePage = lazy(() => import('../pages/AnimalProfile/AnimalProfile'));
const DailyReportPage = lazy(() => import('../pages/DailyReportPage/DailyReportPage'));
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
                <Route path="/animal-profile-page/:animalId" element={<AnimalProfilePage />} />
                <Route
                  path="/daily-report-page/:annimalId"
                  element={<DailyReportPage type="animal" />}
                />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
