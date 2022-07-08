import svg from "../../img/svg";
import svgFunctional from "../../img/svg/indexFunctional";
import "../../styles/navBar/index.css";
import "../../styles/navBar/responsiveIndex.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li
          className="flexRow"
          onClick={() => {
            window.open(
              "https://github.com/crsbl/portafolioFrontend",
              "_blank"
            );
          }}
        >
          {svg().iconGit}
          Git
        </li>
        <ul>
          <li>Contacto</li>
          <ul>
            <li>z.edd36@gmail.com</li>
          </ul>
        </ul>
    
      </ul>
    </nav>
  );
};

export default NavBar;
