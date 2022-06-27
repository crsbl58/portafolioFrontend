import '../../styles/header/index.css';
import '../../styles/header/responsiveIndex.css';
import Stars from '../header/stars/index';
import Clouds from '../header/clouds/index';
import svg from '../../img/svg/index';
import { FC } from 'react';

interface propsHeader{
  hookStateDayNight: boolean
}

const Header: FC<propsHeader> = ({ hookStateDayNight }) => {
console.log(typeof(hookStateDayNight));
  return <header>
    <div className='divContainerSky'>
    <Clouds />
  <Stars />
    <div className='divContainerMoon'>
    {svg().moon}
    </div>
    </div>
  <div className='divContainerSea flexColumn'>
    {svg().Sea}
    <div className='divContainerBeat'>
  {svg().beat}
</div>
 <div className='divContainerSeaEnd'>
  {svg().SeaEnd}

 {svg().Float} 

</div> 
    </div>
  </header>
}


export default Header;