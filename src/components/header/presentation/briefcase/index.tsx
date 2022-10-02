import '../..//../../styles/briefcase.css';
import { CSSProperties, FC } from 'react';
import { useState } from 'react';

const Briefcase: FC = () => {

  interface stateBriefcase {
    animacion00: CSSProperties,
    animacion01: CSSProperties,
  }

  const [stateBriefcase, setstateBriefcase] = useState<stateBriefcase>({
    animacion00: { height: "4.5rem" },
    animacion01: { top: "3.5rem" },
  })

  /*  cntx.ptf.f_obn_stdo(std_prtf, setstd_prtf) */

  return <div className='divBriefcase00'>
    <div className='divBriefcase01'></div>
  
    <div className='divBriefcase02_00'></div>
    <div className='divBriefcase02_02'></div>
    <div className='divBriefcase02_03'></div>

    <div className='divBriefcase03' style={stateBriefcase.animacion00}>

      <div className='divBriefcase03_00' style={stateBriefcase.animacion01}>
        <div className='divBriefcase03_00_00'></div>
      </div>

      <div className='divBriefcase04_00' style={stateBriefcase.animacion01}>
        <div className='divBriefcase04_00_00'></div>
      </div>
    </div>

  </div>
}


export default Briefcase;