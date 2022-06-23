import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./css/main.css";
import Attendance from './view/Attendance';
import Bank from './view/Bank';

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/bank">Bank</Link>
      <Link to="/attendance">Attendance</Link>

      <Routes>
        <Route path="/bank" element={<Bank />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
};