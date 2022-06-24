import request from "../../../network/request/index";
import url from "../../../network/url/index";
import { useEffect, useState } from "react";
import "../../../styles/demos/apiNasa/index.css";
import "../../../styles/demos/apiNasa/responsiveIndex.css";
import Spinner from "../../spinner/index";

import React from "react";

const ApiNasa = () => {
  const [stateApi, setStateApi] = useState<any>([]);
  const [stateSpinner, setStateSpinner] = useState(false);

  useEffect(() => {
    setStateSpinner(true);
    request().fetchUrl(url().apiNasa, setStateApi, setStateSpinner);
  }, []);

  return (
    <div className="divContainerApiNasa00 animationDemos">
      <div className="divContainerOptionApiNasa">
        <button
          onClick={() => {
          
            request().fetchUrl(url().apiNasa, setStateApi, setStateSpinner);
            setStateSpinner(true);
          }}
        >
          Siguiente información
        </button>
      </div>
      {stateSpinner ? <Spinner /> : <React.Fragment />}
      {stateSpinner ? <React.Fragment /> : stateApi.map((dataApi: any) => {
        return (
          <React.Fragment>
            <div className="divContainerStateApiNasa00 animationTextStart">
              <div className="flexRow divContainerApinasa01">
                <img src={dataApi.url}></img>

                <div className="flexColumn">
                  <div className="flexRow divContainerApinasa02">
                    <h2>{dataApi.title}</h2>
                    <h3>{dataApi.date}</h3>
                  </div>
                  <div className="flexColumn divContainerApinasa03">
                    <p>{dataApi.copyright}</p>
                    <p>{dataApi.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })
      }
    </div>
  );
};

export default ApiNasa;
