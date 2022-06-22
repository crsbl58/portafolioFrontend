import "./App.css";
import "./responsiveApp.css";
import "./styles/constants.css";
import Header from "./components/header/index";
import React, { FC, useState } from "react";
import Profile from "./components/profile/index";
import NavBar from "./components/navBar/index";
import Footer from "./components/footer";
import Demos from "./components/demos/indexcopy";

const App: FC = () => {
  const [stateDayNight, setStateDayNight] = useState<boolean>(false);

  const [stateApp, setStateApp] = useState<any>({
    modelImgStatus: false,
    base64Img: "",
  });

  const ModalImg = () => (
    <div className="divContenedorModalImg00">
      <div className="divContenedorModalImg01">
        <img
          className="imgModaldemo"
          src={
            stateApp.base64Img
              ? stateApp.base64Img
              : "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
          }
          onClick={() => {
            setStateApp({
              ...stateApp,
              base64Img: "",
              modelImgStatus: false,
            });
          }}
        ></img>
      </div>
    </div>
  );
  return (
    <div className="divContainerApp">
      <NavBar />
      <div className="App">
        {stateApp.modelImgStatus ? <ModalImg /> : <React.Fragment />}
        <Header hookStateDayNight={stateDayNight} />
        <Profile hookStateDayNight={stateDayNight} />
        <Demos hookSetStateApp={setStateApp} hookstateApp={stateApp} />
        <Footer />
      </div>
    </div>
  );;
};

export default App;
