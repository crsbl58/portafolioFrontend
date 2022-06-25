import React, { useState } from "react";
import "../../styles/demos/index.css";
import "../../styles/demos/responsiveIndex.css";
import svg from "../../img/svg/index";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Demos = ({ hookstateApp, hookSetStateApp }: any) => {
  const [stateDemos, setStateDemos] = useState<any>({
    indexSelected: 0,
  });

  const [stateListDemos] = useState([
    {
      name: "Ver img, pdf",
      iconComponent: svg().iconGalleryPdf,
      link: "Gallery",
    },
    {
      name: "Conexion Api",
      iconComponent: svg().iconApi,
      link: "Api",
    },
    {
      name: "Graficos",
      iconComponent: svg().iconGraphic,
      link: "Graphics",
    },
    {
      name: "Chat público",
      iconComponent: svg().iconChatRoom,
      link: "Chat",
    },
  ]);

  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
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
              navigate(listDemo.link);
            }}
          >
            <h2
              style={
                location.pathname.slice(1) == listDemo.link
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
          {<Outlet context={[hookSetStateApp, hookstateApp]} />}
        </section>
      </div>
    </div>
  );
};

export default Demos;
