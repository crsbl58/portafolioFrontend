import "./App.css";
import "./responsiveApp.css";
import "./styles/constants.css";
import Header from "./components/header/index";
import React, { FC, useEffect, useState } from "react";
import Profile from "./components/profile/index";
import NavBar from "./components/navBar/index";
import Footer from "./components/footer";
import Demos from "./components/demos/index";

const App: FC = () => {
  /* const [stateSpinner, setStateSpinner] = useState<boolean>(true); */
  /* const Spinner = ()=>(
<div className='divContainerSpinner'>
  <div className='divSpinner00 animationCountTiming'>
    <div className='divSpinner01 animationCountTiming'>
<div className='divSpinner02'>
</div>
    </div>
    </div>
</div>
); */

  const [stateDayNight, setStateDayNight] = useState<boolean>(false);

  const CompletedApp = () => {
    const [stateApp, setStateApp] = useState<any>({
      modelImgStatus: false,
      base64Img: "",
      /*    filterBlur: {
        true: { filter: "blur(0.5rem)" },
        false: { filter: "blur(0rem)" },
      }, */
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
    );
  };
  /* window.onload = ()=>{setStateSpinner(false)}; */
  return <CompletedApp />;
};

export default App;
