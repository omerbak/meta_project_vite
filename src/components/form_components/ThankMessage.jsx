import React from 'react'
import { Link } from 'react-router-dom'

const ThankMessage = ({formData}) => {
  return (
    <div className='thank-message'>
        <p>Thank you Mr/Mme <span className='thank-highlight'>{formData.lastName}</span> for your reservation on <span className='thank-highlight'>{formData.date}</span> at <span className='thank-highlight' >{formData.time}</span></p>
        <p>See You Soon!</p>
        <Link className='back-home btn' to="/">Back to homepage</Link>
    </div>
  )
}

export default ThankMessage