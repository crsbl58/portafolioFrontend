import '../../../styles/header/clouds/index.css';
import '../../../styles/constants.css';
import React, { FC, useEffect, useState } from 'react';
import svg from '../../../img/svg';
import { url } from 'inspector';

const Clouds: FC = () => {

  const [stateStars, setStateStars] = useState<string[][][]>([

    ]);

    useEffect(()=>{
        let array =[]
        for (let i = 0; i < 50; i++) {
          let coordinatedLeftClouds = Math.floor((Math.random() * 99) + 1);
          let coordinatedToptClouds =  Math.floor((Math.random() * 25) + 1);
          let coordinatedSizeClouds =  Math.floor((Math.random() * 10) + 1);
          let randomClouds =  Math.floor((Math.random() * 7) + 1);
          let randomAnimationDuration =  Math.floor((Math.random() * 16) + 1);
          let randomZIndex =  Math.floor((Math.random() * 2) + 1);
let zIndex = null
randomZIndex === 1 ? zIndex= 16 : zIndex = 14;

          array.push([
              [i],
            [coordinatedLeftClouds],
             [coordinatedToptClouds],
              [coordinatedSizeClouds],
               [svg().clouds[randomClouds -1]],
               [randomAnimationDuration],
               [zIndex],
            ])

        }
        setStateStars(array);
    },[]);
  return <React.Fragment>
{stateStars.map((clouds : any)=>(
    <div 
    key={clouds[0]}
    style={{
      zIndex:clouds[6], 
    animationDelay:`${clouds[5]}s`,
        width:`${clouds[3]}rem`,
        height:`${clouds[3]}rem`,
        left: `${clouds[1]}vw`,
        top: `${clouds[2]}rem`,
    }}
    className='divClouds animationCountTiming' >{clouds[4]}</div>
))}
  </React.Fragment>
}


export default Clouds;