import React from 'react'
import {MdThumbUp} from 'react-icons/md'
const Steps = ({step}) => {
  return (
    <div>
        <div className={step === 1? 'line step1': step === 2? 'line step2' : "line step3"}>
            <div className='first-cir'>1</div>
            <div className='second-cir'>2</div>
            <div className='third-cir'><MdThumbUp /></div>
        </div>
    </div>
  )
}

export default Steps