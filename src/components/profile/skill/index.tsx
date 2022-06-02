import img_html_00 from '../../../img/skill/html/html.svg'
import img_css_00 from '../../../img/skill/css/css.svg'
import img_js_00 from '../../../img/skill/js/js.svg'
import img_react_00 from '../../../img/skill/react/react.svg'
import img_html_01 from '../../../img/skill//html/html01.svg';
import img_css_01 from '../../../img/skill/css/css01.svg'
import img_js_01 from '../../../img/skill/js/js01.svg'
import img_react_01 from '../../../img/skill/react/react01.svg'
import imgNode from '../../../img/skill/node/node.svg'
import imgNode01 from '../../../img/skill/node/node01.svg'
import '../../../styles/profile/skill/index.css';
import '../../../styles/profile/skill/responsiveIndex.css';
import React, { FC, useState } from 'react';



const Skill: FC = () =>{ 
    const [stateArraySkill] = useState<string[][][]>([
        [["HTML5"], ["Estructuracion"], [img_html_00], [img_html_01]],
   [["CSS3"], ["maquetacion responsiva"], [img_css_00], [img_css_01]],
        [["JAVASCRIPT"], ["forms, cruds "], [img_js_00], [img_js_01]],
        [["REACT.JS"], ["hooks"], [img_react_00], [img_react_01]], 
        [["NODE.JS"], ["Api"], [imgNode], [imgNode01]]
      ]);
  return(
<div className='divContainerSkills00'>
{stateArraySkill.map((cmt:any)=>(
    <div key={cmt[0]} className="divContainerSkill00" /* style={std_skill.anmc00} */ >
        
              <h1 className='h1TitleSkills00' >{cmt[0]}</h1>
              <div className='divSkillContainerImg00'>
                <img className='imgSvgSkillBack00' src={cmt[3]}></img>
                <img className='imgSvgSkillFront00' src={cmt[2]}></img>
              </div>
          </div>
))}
</div>
)};

export default Skill; 