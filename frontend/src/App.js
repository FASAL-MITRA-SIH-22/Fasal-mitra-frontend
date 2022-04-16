import React, { useEffect, useRef } from "react";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Auth1 from "./components/Auth/Auth1";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import DiseaseDetection from "./components/DiseaseDetection/DiseaseDetection";
import { axiosInstance } from "./axios.config";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./store/features/userSlice"
import "./App.css";
import Teleconsulting from "./components/Teleconsulting/Teleconsulting";
import GoogleTranslate from "./components/GoogleTranslate";
import LoadingBar from 'react-top-loading-bar';

import "./components/i18n/i18n";
import { useTranslation, Trans } from 'react-i18next';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const ref = useRef(null)

  useEffect(() => {
    ref.current.continuousStart()
    axiosInstance
      .get("/auth/account")
      .then((response) => {
        console.log(response.data.user)
        dispatch(login(response.data.user))
        ref.current.complete()
      })
      .catch((error) => {
        console.log(error)
        ref.current.complete()
      });
  }, []);
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'English' },
    hi: { nativeName: 'Hindi' },
    mr: {nativeName: 'Marathi'},
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* <GoogleTranslate/> */}
      <LoadingBar color='#22E089' ref={ref} height='3px' />
      <Navbar />
      {Object.keys(lngs).map((lng) => (
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
        ))}
      <div className="flex flex-grow">
        <div className="col p-0 m-0 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth1" element={<Auth1 />} />
            {user ? <Route path="/disease-detection" element={<DiseaseDetection />} /> : <></>}
            <Route path="/teleconsulting" element={<Teleconsulting />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
