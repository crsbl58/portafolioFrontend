import React, { useEffect, useState } from "react";
import "../../../styles/demos/layout/index.css";
import "../../../styles/demos/layout/responsiveIndex.css";

const Graphics = () => {
  return (
    <div className="divContainerGraphics00 flexColumn animationDemos">
      <div className="divContainerOptionLayout flexRow">
        <h1>Maquetas</h1>
      </div>

      <div className="divContainerLayout01 flexRow">
        <div className="divContainerListLayout flexColumn">
          <h2 onClick={() => {
            window.open(
              "https://test-seven-psi-61.vercel.app/",
              "_blank"
            );
          }}>pagina01</h2>
          <h2 onClick={() => {
            window.open(
              "https://test-propulso.vercel.app/#",
              "_blank"
            );
          }}>pagina02</h2>
          <h2 onClick={() => {
            window.open(
              "https://prueba04.vercel.app/",
              "_blank"
            );
          }}>pagina03</h2>
          <h2 onClick={() => {
            window.open(
              "https://datos-pais.vercel.app/",
              "_blank"
            );
          }}>pagina04</h2>
          <h2 onClick={() => {
            window.open(
              "https://cugat-publicidad-kleg.vercel.app/",
              "_blank"
            );
          }}>pagina05</h2>
        </div>
      </div>
    </div>
  );
};
export default Graphics;
