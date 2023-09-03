import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './utils/reportWebVitals';

import './assets/css/index.css';
import Layout from './pages/layout';
import Home from './pages/home/home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/website" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
/*
<Route path="blogs" element={<Blogs />} />
<Route path="contact" element={<Contact />} />
<Route path="*" element={<NoPage />} />
*/

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
        <App />
        </React.StrictMode>
        );
        
        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
        