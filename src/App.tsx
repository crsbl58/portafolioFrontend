import "./App.css";
import "./responsiveApp.css";
import "./styles/constants.css";
import Header from "./components/header/index";
import { useNavigate } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import Profile from "./components/profile/index";
import NavBar from "./components/navBar/index";
import Footer from "./components/footer";
import Demos from "./components/demos";
import ModalImgPdf from "./components/modal/index";

const App: FC = () => {
  let navegate = useNavigate();

  const [stateDayNight, setStateDayNight] = useState<boolean>(false);

  const [stateApp, setStateApp] = useState<any>({
    modelImgPdfStatus: false,
    base64Img: "",
    typeData: 0,
  });

  useEffect(() => {
    navegate("Gallery");
  }, []);
  return (
    <div className="divContainerApp">
      <NavBar />
      <div className="App">
        {stateApp.modelImgPdfStatus ? (
          <ModalImgPdf hookStateApp={stateApp} hookSetStateApp={setStateApp} />
        ) : (
          <React.Fragment />
        )}
        <Header hookStateDayNight={stateDayNight} />
        <Profile hookStateDayNight={stateDayNight} />
        <Demos hookSetStateApp={setStateApp} hookstateApp={stateApp} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
