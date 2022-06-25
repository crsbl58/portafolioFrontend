import { useEffect, useRef } from "react";

const ModalImgPdf = ({ hookSetStateApp, hookStateApp }: any) => {
  const ImgModal = () => (
    <div className="divContenedorModalImg01">
      <img
        className="imgModaldemo"
        src={
          hookStateApp.base64Img
            ? hookStateApp.base64Img
            : "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
        }
        onClick={() => {
          hookSetStateApp({
            ...hookStateApp,
            base64Img: "",
            modelImgPdfStatus: false,
            typeData: 0,
          });
        }}
      ></img>
    </div>
  );

  const PdfModal = () => {
    const iframePdf = useRef<any>(null);


useEffect(()=>{
  iframePdf.current.src=hookStateApp.base64Img;
  
/*   iframePdf.current.={}; */
},[])

    return (
      <div className="divContainerModalPdf flexColumn">
        <button
          onClick={() => {
            hookSetStateApp({
              ...hookStateApp,
              base64Img: "",
              modelImgPdfStatus: false,
              typeData: 0,
            });
          }}
        >
          Salir
        </button>
        <iframe
          ref={iframePdf}
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    );
  };
  return (
    <div className="divContenedorModalImgPdf00 animationTextStart">
      {hookStateApp.typeData === 0 ? <ImgModal /> : <PdfModal />}
    </div>
  );
};

export default ModalImgPdf;
