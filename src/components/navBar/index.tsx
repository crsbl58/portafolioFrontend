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
            window.open("https://gitlab.com/z.edd36/portafolio", "_blank");
          }}
        >{svg().iconGitLab}
          GitLab
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
