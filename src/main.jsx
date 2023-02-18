import './main.css';
import React from 'react';
import i18next from 'i18next';
import Home from './routes/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { I18nextProvider } from 'react-i18next';
import { MyThemeProvider } from './hooks/Palette';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'es', // language to use
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <MyThemeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </MyThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
