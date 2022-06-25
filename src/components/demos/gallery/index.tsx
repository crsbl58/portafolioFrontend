import React, { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import svg from "../../../img/svg";
import mocks from "../../../mocks/index";
import "../../../styles/demos/gallery/index.css";
import "../../../styles/demos/gallery/responsiveIndex.css";
import logoPdf from '../../../img/logopdf.png'

const GalleryPdf = () => {
  const [hookSetStateApp, hookstateApp]: any = useOutletContext();
  const [stateListGallery, setStateListGallery] = useState([
    {
      name: "empuñadura",
      base64: mocks().img.gallery.img00,
      type: 0,
    },
    {
      name: "pdf",
      base64: mocks().pdf.pdf1,
      type: 1,
    },
  ]);
  const refInputFileImg = useRef<any>(null);
  const [stateInput, setstateInput] = useState<any>("");
  return (
    <div className="divContainerGallery00 animationDemos">
      <div className="divContainerGallery01">
        <div className="divContainerUploadImg">
          <input
            style={{ display: "none" }}
            type="file"
            ref={refInputFileImg}
            name="img"
            accept="image/jpeg, application/pdf"
            onChange={async (event) => {
              const convertBase64 = (file: any) => {
                return new Promise((resolve, reject) => {
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file);
                  fileReader.onload = () => {
                    resolve(fileReader.result);
                  };
                  fileReader.onerror = (error) => {
                    reject(error);
                  };
                });
              };
              const file = event.target.files;
              const base64: any = await convertBase64(file![0]);
              const typeData = base64.slice(5, 15) =="image/jpeg" ? 0 : 1
              stateListGallery.length < 6
                ? setStateListGallery([
                    ...stateListGallery,
                    {
                      name: stateInput,
                      base64: base64,
                      type: typeData,
                    },
                  ])
                : alert("excede el limite de fotografias");
            }}
          ></input>
          <button
            className="buttonActivatedClickUploadImg"
            onClick={() => {
              stateInput.length > 2
                ? refInputFileImg.current.click()
                : alert("Ingrese titulo, mayor a 3 letras o numeros");
            }}
          >
            Subir Img, Pdf
          </button>
          <input
            placeholder="Ingrese titulo"
            className="inputTitleUploadImg"
            onChange={(e) => {
              setstateInput(e.currentTarget.value);
            }}
            value={stateInput}
          ></input>
        </div>
        <div className="divContainerListImgGallery">
          {stateListGallery.map(({ name, base64, type }, index) => {
          let viewData = type === 0 ?     base64
          ? base64
          : "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"

          : logoPdf
          return (
              <div className="divContainerImgGallery00 animationTextStart">
                <h3>{name}</h3>
                <div className="divContainerRevealedRoll">
                  <div className="divContainerImgGallery01">
                    <img
                      src={
                        viewData
                    
                      }
                      className="ImgGalleryViewBase64"
                    ></img>
                    <button
                      className="buttonViewImgListGallery"
                      onClick={() => {
                        hookSetStateApp({
                          ...hookstateApp,
                          modelImgPdfStatus: true,
                          base64Img: base64,
                          typeData:type,
                        });
                      }}
                    >
                      Visualizar
                    </button>
                    <button
                      name="asd"
                      className="buttonDeleteImgListGallery"
                      onClick={() => {
                        console.log(index);
                        console.log(stateListGallery);
                        const array = [];
                        for (let i = 0; i < stateListGallery.length; i++) {
                          if (i != index) {
                            array.push(stateListGallery[i]);
                          }
                        }
                        setStateListGallery(array);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*   <div className="divPackageRoll">{svg().rollPhotographs}</div> */}
    </div>
  );
};

export default GalleryPdf;

function readAsDataURL(f: {
  [x: number]: File;
  length?: number | undefined;
  item?: ((index: number) => File | null) | undefined;
  [Symbol.iterator]?: (() => IterableIterator<File>) | undefined;
}): any {
  throw new Error("Function not implemented.");
}
function e(e: any): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error("Function not implemented.");
}
