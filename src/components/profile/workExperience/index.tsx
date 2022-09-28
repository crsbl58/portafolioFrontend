
import '../../../styles/profile/workExperience/index.css';
import '../../../styles/profile/workExperience/responsiveIndex.css';
import svg from '../../../img/svg/index';
import React, { FC, useState } from 'react';

const WorkExperience: FC = () =>{
    
    const [listSkillWorkExperience, setListSkillWorkExperience] = useState([
        [['photoshop']],
        [['Soporte'],['Asistencia'], ['Html'], ['Css3'], ['Javascript']],
        [['Css3'], ['Html5'],['ReactJs'] ,['Antd'] ,['Redux'], ['typeScript'], ['Git'], ['Jira']]
    ]);

interface propsExperienceIndividual{
    title01WorkExperience : string,
    title02WorkExperience : string,
    hookListSkillWorkExperience: string[][],
}

const ExperienceIndividual:FC<propsExperienceIndividual>= ({
    title01WorkExperience,
    title02WorkExperience,
    hookListSkillWorkExperience,
})=>(
    <div className='divContainerWorkExperience02'>
<div className='divContainerWorkExperience03'>
    <h3 className='h3TitleworkExperience00'>{title01WorkExperience}:</h3>
    <h3 className='h3TitleworkExperience01'>{title02WorkExperience}</h3>
</div>
<div className='divContainerSkillWorkExperience'>
    {hookListSkillWorkExperience.map((exp)=>(
        <h3 className='h3SkillWorkExperience'>{exp[0]}</h3>
    ))}

</div>
</div>
);

    return(
        <div className='divContainerWorkExperience00'>
        <div className='divContainerWorkExperience01'>

<h1 className='h1TitleWorkExperience00'><div className='imgIconoSkills00'> {/* svg().ico.icoTraining */}</div>Experiencia laboral</h1>
<ExperienceIndividual
hookListSkillWorkExperience={listSkillWorkExperience[0]}
title01WorkExperience={'6 meses Altom'}
title02WorkExperience={' Estudio fotografico'}
/>
<ExperienceIndividual
hookListSkillWorkExperience={listSkillWorkExperience[1]}
title01WorkExperience={'1 año 6 meses Cugat San vicente'}
title02WorkExperience={' Soporte informatico'}
/>
<ExperienceIndividual
hookListSkillWorkExperience={listSkillWorkExperience[2]}
title01WorkExperience={'3 meses jumpitt'}
title02WorkExperience={'Front-end Reactjs'}
/>
</div>
</div>
)};

export default WorkExperience; 