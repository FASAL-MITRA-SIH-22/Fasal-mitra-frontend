import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import DiseaseDetection from "./components/DiseaseDetection/DiseaseDetection";
import { axiosInstance } from "./axios.config";
import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {login} from "./store/features/userSlice"
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // console.log(user)

  useEffect(() => {
    axiosInstance
      .get("/auth/account")
      .then((response) => {
        console.log(response.data.user);
				dispatch(login(response.data.user))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/disease-detection" element={<DiseaseDetection />} />
      </Routes>
    </>
  );
}

export default App;
