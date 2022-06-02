import request from "../../../network/request/index";
import url from "../../../network/url/index";
import { useEffect, useState } from "react";
import "../../../styles/demos/apiNasa/index.css";
import "../../../styles/demos/apiNasa/responsiveIndex.css";
import React from "react";

const ApiNasa = () => {
  const [stateApi, setStateApi] = useState<any>([]);

  useEffect(() => {
    request().fetchUrl(url().apiNasa, setStateApi);
  }, []);

  return (
    <div className="divContainerApiNasa00">
     <div className="divContainerOptionApiNasa">
      <button
        onClick={() => {
          request().fetchUrl(url().apiNasa, setStateApi);
        }}
      >
        Siguiente información
      </button>
      </div>
      {stateApi.map((dataApi: any) => {
        /*   
      let Img_rdpi00 = styled.div`
          width: 22rem;
          height: 14rem;
          background-image: url(${rtds.url});
          background-size: 22rem 14rem;
          background-repeat: no-repeat;
          border-radius: 0.1rem;
          animation-name: anmcpd00;
          animation-duration: 1s;
          animation-iteration-count: 1;
          @keyframes anmcpd00 {
            0% {
              opacity: 0;
            }
          }
        `; */

        return (
          <React.Fragment>
            <div className="divContainerStateApiNasa00">
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
      })}
    </div>
  );
};

export default ApiNasa;
