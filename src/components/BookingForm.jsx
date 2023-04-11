import React from 'react'
import Steps from './form_components/Steps';
import Personal__info from './form_components/Personal__info';
import Reservation_info from './form_components/Reservation_info';
import ThankMessage from './form_components/ThankMessage';
import { useState } from 'react';


const BookingForm = ({availableTimes, dispatch}) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        nb_guests: "",
        occasion: "",
        comment: "",
    })

    function handleNext(newData, final = false){
        if(final){
            console.log("submitted", formData);
        }
        setFormData(prev => ({...prev, ...newData}))
        setStep(prev => prev+1);
    }
    function handlePrevious(newData){
        setFormData(prev => ({...prev, ...newData}))
        setStep(prev => prev-1);
    }

    const formStep =
    [
        <Reservation_info next={handleNext} data={formData} availableTimes={availableTimes} dispatch={dispatch}/>,
        <Personal__info next={handleNext} previous={handlePrevious} data={formData}/>,
        <ThankMessage formData={formData}/>
    ]

    return (
        <div className='form-section'>
            <div className="container">
                <div data-testid="form-box" className="form-box">
                    <h2 className='booking-form-h2'>Reserve Now</h2>
                    <Steps step={step}/>
                    {formStep[step-1]}
                </div>
            </div>
        </div>
    )
}

export default BookingForm;

