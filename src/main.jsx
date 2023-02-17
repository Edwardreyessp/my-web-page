import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import './main.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyThemeProvider } from './hooks/Palette';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

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
