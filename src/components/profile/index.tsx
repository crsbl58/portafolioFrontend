import "../../styles/profile/index.css";
import "../../styles/profile/responsiveIndex.css";
import variablesconstcalls from "../../constants/index";
import svg from "../../img/svg/index";
import React, { FC, useState } from "react";
import Skill from "./skill/index";
import WorkExperience from "./workExperience/index";
import Briefcase from "../../components/header/presentation/briefcase/index";
import Bubbles from "../bubbles/index";

interface propsProfile {
  hookStateDayNight: boolean;
}

const Profile: FC<propsProfile> = ({ hookStateDayNight }) => {
  interface propsViewInfo {
    titleSkills: String;
    paragraphSkills: string;
    icoInfo: SVGAElement;
  }

  const ViewInfo: FC<propsViewInfo> = ({
    titleSkills,
    paragraphSkills,
    icoInfo,
  }) => (
    <>
      <div
        className="divSkillsDescription"
        /*   style={hookStateDayNight
          ? { background: "linear-gradient(270deg, rgb(54, 150, 206, 0.453)  13%, rgba(43, 126, 165, 0.653) 85%)" }
          : { background: "linear-gradient(270deg, rgb(17, 69, 99, 0.453)  13%, rgb(56, 82, 129, 0.653) 85%)" }} */
      >
        <h1
          className="h1SkillsTitle00"
          /*  style={hookStateDayNight
            ? { background: "linear-gradient(270deg, rgb(54, 150, 206, 0.453)  13%, rgb(43, 126, 165, 0.653) 85%)" }
            : { background: "linear-gradient(270deg, rgb(17, 69, 99, 0.653)  13%, rgb(62, 79, 110, 0.653) 85%)" }} */
        >
          <div className="imgIconoSkills00">{icoInfo}</div>
          {titleSkills}
        </h1>
        <p className="paragraphSkills00">{paragraphSkills}</p>
      </div>
    </>
  );
  return (
    <React.Fragment>
      <div
        style={
          hookStateDayNight
            ? variablesconstcalls().stateDayNight.sea.backgroundColorDay00
            : variablesconstcalls().stateDayNight.sea.backgroundColorNight00
        }
        className="divProfileContainer"
      >
        {svg(3, 3, 30, 33, "#78B4D2").animals.medusa}
        {svg(5, 5, 25, 35, "rgb(121, 166, 189)").animals.medusa}
        {svg(8, 8, 30, 35, "rgb(119, 178, 218)").animals.medusa}
        {svg(6, 11, 34, 24, "rgb(119, 178, 218)").animals.medusa}
        {svg(5, 10, 20, 35, "rgb(119, 178, 218)").animals.medusa}
        {svg().animals.fish00}
        {svg().animals.orca}
        {svg().animals.tortoise}
        <Bubbles />
        <div className="divContainerTitleProfile">
          <div className="divContainerFishingLine">{svg().fishingLine}</div>
          <div className="divContainerPresent">
            <h1 className="h1Title01">Developer</h1>
            <h1 className="h1Title02">Cristóbal Ortega</h1>
          </div>
          <Briefcase />
        </div>

        <div className="divContainerInfoAndWorkExperience">
          <ViewInfo
            icoInfo={svg().ico.icoDescription}
            titleSkills="Presentación"
            paragraphSkills="||En constante aprendizaje, al igual en busca de dar la mejor ilustración,
     frente a los diferentes desarrollos, tanto desafiantes como más ensayados,
     no me obstaculizo ante la frustración, concuerdo en un resultado satisfactorio donde
     el despliegue y demostración de la información tengan el protagonismo."
          />
          <ViewInfo
            icoInfo={svg().ico.icoWorld}
            titleSkills="Nacionalidad"
            paragraphSkills="Chileno"
          />

          <ViewInfo
            icoInfo={svg().ico.icoHome}
            titleSkills="Residencia"
            paragraphSkills="Sexta Región, San Vicente de Tagua Tagua"
          />

          <ViewInfo
            icoInfo={svg().ico.icoTraining}
            titleSkills="Formación"
            paragraphSkills="AIEP Téc. Nivel Superior Programación Computacional."
          />

          <WorkExperience />
        </div>
        <div className="divContainerPresentationTechnology">
          <h3 className="h3TechnologyTitle">Tecnologías</h3>
          <div className="divIllustrationSvg">{svg().FormalModelPC}</div>
        </div>
        <Skill />

        <div className="divContainerParagraphSkill00">
          <h3 className="h3TitleParagraphSkill00">Símbolo del sistema</h3>

          <p className="h3TitleParagraphSkill01">
            C:\Cristobal{">"} mysql, mongodb, git, flexBox, grid, typeScript, hooks, context,
            redux, styled, socketIo, reactRouterDom
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
