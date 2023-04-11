import React from 'react'
import AvailableTimes from './AvailableTimes';
import { useFormik } from 'formik'
import * as yup from "yup";

const Reservation_info = ({next , data, availableTimes, dispatch}) => {
    const formik = useFormik({
        initialValues: data,
        validationSchema: yup.object({
            date: yup.date().required("Date of reservation is required"),
            time: yup.string().required("Time of reservation is required"),
            nb_guests: yup.number().min(1, "Minmum number of guests is 1").required("number of guests is required"),
        }),
        onSubmit: (values) => {
            next(values);
        }
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <h2 className='form-title'>Reservation Details</h2>
        <div className="input-field date">
            <label htmlFor="date">Date</label>
            <input type="date" id='date' name='date'
                value={formik.values.date}
                onChange={(e) =>{
                    formik.handleChange(e);
                    dispatch({payload:new Date(e.target.value)}) 
                    console.log("formik",typeof (new Date(e.target.value)))
                    console.log("formik2", new Date().getDate())
                }
                }
                onBlur={formik.handleBlur}
                className={formik.touched["date"] && formik.errors["date"]&& "input-error"}
            />
            <p className='form-error'>{formik.touched["date"] && formik.errors["date"] && formik.errors["date"]}</p>
        </div>
        <div className="input-field time">
            <label htmlFor="time">Time</label>
            <AvailableTimes formik={formik} availableTimes={availableTimes}/>
            <p className='form-error'>{formik.touched["time"] && formik.errors["time"] && formik.errors["time"]}</p>
        </div>
        <div className="input-field guests">
            <label htmlFor="nb_guests">Number Of Guests</label>
            <input type="number" id='nb_guests' name='nb_guests' min="1" max="10" 
                value={formik.values.nb_guests}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched["nb_guests"] && formik.errors["nb_guests"]&& "input-error"}
            />
            <p className='form-error'>{formik.touched["nb_guests"] && formik.errors["nb_guests"] && formik.errors["nb_guests"]}</p>
        </div>
        <div className="input-field occaison">
            <label htmlFor="occasion">Occaison</label>
            <select name="occasion" id="occasion" 
            value={formik.values.occasion}
            onChange={formik.handleChange}
            className={formik.touched["occasion"] && formik.errors["occasion"]&& "input-error"}
            >
                <option value="">-- Select Occaison --</option>
                <option value="anniversary">Anniversary</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-field">
            <label htmlFor="comment">Comment</label>
            <textarea type="comment" id='comment' name='comment' placeholder='Add additional note or comment'
                value={formik.values.comment}
                onChange={formik.handleChange}
            />
        </div>
        <div className="btns-box">
            <button className='btn' type='button' disabled={true}>Previous</button>
            <button className='btn' type='Submit'>Next</button>
        </div>
    </form>
  )
}

export default Reservation_info