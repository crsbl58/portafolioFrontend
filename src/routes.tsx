import { Routes, Route } from "react-router-dom";
import App from "./App";
import GalleryPdf from "./components/demos/gallery/index";
import ApiNasa from "./components/demos/apiNasa/index";
import Graphics from "./components/demos/graphics/index";
import Chat from "./components/demos/chat/index";
import Layout from "./components/demos/layout/index";

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="Gallery" element={<GalleryPdf />}></Route>
      <Route path="Api" element={<ApiNasa />}></Route>
      <Route path="Graphics" element={<Graphics />}></Route>
      <Route path="Chat" element={<Chat />}></Route>
      <Route path="Layout" element={<Layout />}></Route>
    </Route> 
    <Route path="*" element={<div>no found</div>} />
  </Routes>
);

export default RoutesApp;
