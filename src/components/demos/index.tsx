import React, { useState } from "react";
import Gallery from "./gallery/index";
import Graphics from "./graphics/index";
import Chat from "./chat/index";
import "../../styles/demos/index.css";
import "../../styles/demos/responsiveIndex.css";
import ApiNasa from "./apiNasa/index";
import svg from "../../img/svg/index";

const Demos = ({ hookstateApp, hookSetStateApp }: any) => {
  const [stateDemos, setStateDemos] = useState<any>({
    indexSelected: 0
  });

  const [stateListDemos] = useState([
    {
      name: "Imágenes",
      iconComponent: svg().iconGallery,
      components: 0,
    },
    {
      name: "Conexion Api",
      iconComponent: svg().iconApi,
      components: 1,
    },
    {
      name: "Graficos",
      iconComponent: svg().iconGraphic,
      components: 2,
    },
    {
      name: "Chat",
      iconComponent: svg().iconChatRoom,
      components: 3,
    },
  ]);

  return (
    <div className="divContainerDemos00">
      <div className="divContainerTitleDemos">
        <h1>Demos</h1>
      </div>
      <div className="divContainerSelectionDemos00">
        {stateListDemos.map((listDemo: any, index) => (
          <div
            className="divContainerSelectiondemos01"
            onClick={() => {
              setStateDemos({
                indexSelected: listDemo.components,
              });
            }}
          >
            <h2
              style={
                stateDemos.indexSelected == index
                  ? {
                      color: "rgb(128, 114, 88)",
                      border: "solid 0.1rem rgb(78, 113, 141)",
                    }
                  : {}
              }
            >
              {listDemo.name}
            </h2>
            <div className="divContainerIconImg">{listDemo.iconComponent}</div>
          </div>
        ))}
      </div>
      <div className="divContainerDemos01">
        <section>
          {stateDemos.indexSelected === 0 ? (
            <Gallery
              hookSetStateApp={hookSetStateApp}
              hookstateApp={hookstateApp}
            />
          ) : (
            <React.Fragment />
          )}
          {stateDemos.indexSelected === 1 ? <ApiNasa /> : <React.Fragment />}
          {stateDemos.indexSelected === 2 ? <Graphics /> : <React.Fragment />}
          {stateDemos.indexSelected === 3 ? <Chat /> : <React.Fragment />}
        </section>
      </div>
    </div>
  );
};

export default Demos;
