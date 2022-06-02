import '../../../styles/presentation/presentation.css';
import { FC } from 'react';
import Briefcase from './briefcase/index';

const Presentation: FC = () => {

  return <div className='DivContainerPresentation'>
  <div className='DivContainerTitle'>
  <h1 className='h1Title00'>Portafolio</h1>
  <h1 className='h1Title01'>Developer</h1>
  <h1 className='h1Title02'>Cristóbal Ortega</h1>
</div>
<Briefcase />
  </div>
}


export default Presentation;