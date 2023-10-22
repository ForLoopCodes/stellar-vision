import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./LandingPage/Landing";

import Home from "./RescuePortal/pages/Home"
import Register from "./RescuePortal/pages/Register";
import Location from "./RescuePortal/pages/Location";
import First from "./RescuePortal/pages/Home";

import AffHome from "./AfflictedPortal/pages/Home"

import ChatbotMap from "./AfflictedPortal/pages/ChatbotMap";
import Requirements from "./RescuePortal/pages/Requirements";
import CheckReqmt from "./RescuePortal/pages/CheckReqmt";
import ReqmtDetail from "./RescuePortal/pages/ReqmtDetail";
import Footer from "./Footer";
import AppLayout from "./LandingPage/components/AppLayout";
import PageNotFound from "./LandingPage/components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/as-responder" element={<Home />}></Route>
          <Route path="/as-evacuee" element={<ChatbotMap />}></Route>
          <Route path="/chatbot-and-map" element={<ChatbotMap />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/requirements" element={<Requirements />}></Route>
          <Route path="/check-requests" element={<CheckReqmt />}></Route>
          <Route path="/req-detail" element={<ReqmtDetail />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
      {/* <Requirements/> */}
      {/* <CheckReqmt/> */}
      {/* <ReqmtDetail/>
       <CheckReqmt/> */}
       <Footer/>
    </BrowserRouter>
  );
}


export default App;
