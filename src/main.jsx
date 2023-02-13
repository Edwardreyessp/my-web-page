import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import './main.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyThemeProvider } from './hooks/Palette';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyThemeProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MyThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
