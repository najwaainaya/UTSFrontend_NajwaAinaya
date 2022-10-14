import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Halaman2 from "./Halaman2"
import Halaman3 from "./Halaman3"

const rootElement =  document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<App />} Route/>
      <Route path="psdku" element={<Halaman2 />} Route/>
      <Route path="vokasi" element={<Halaman3 />} Route/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();