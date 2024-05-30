import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Composants/Navbar';
import Accueil from './Pages/Accueil';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Contact from './Pages/Contact';
import InfoCompte from "./Pages/infoCompte"
import Footer from "./Composants/Footer";
import AboutUs from './Pages/AboutUs';
import Exploiter from './Pages/Exploiter';
import ProtectedRoute from "./Controleur/ProtectedRoute";
import PasswordReset from "./Pages/PasswordReset";


export default function App() {
  return (
      <div className='Root_Div'>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Accueil />} />
          <Route path='Login' element={<Login />} />
          <Route path='PassRes' element={<PasswordReset />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="AboutUs" element={<AboutUs />      } />
          <Route path='Exploiter' element={<ProtectedRoute><Exploiter/></ProtectedRoute>} />
          <Route path='infoCompte' element={<ProtectedRoute><InfoCompte /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    
  );
}
