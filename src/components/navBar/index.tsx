import svg from "../../img/svg";
import "../../styles/navBar/index.css";
import "../../styles/navBar/responsiveIndex.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li
        className='flexRow'
          onClick={() => {
            window.open("https://github.com/crsbl/portafolioFrontend", "_blank");
          }}
        >
        {svg().iconGit}
          Git
        </li>
        <ul>
          <li>Contacto</li>
          <ul>
            <li>z.edd36@gmail.com</li>
            <li>+569 4869 7889</li>
          </ul>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
