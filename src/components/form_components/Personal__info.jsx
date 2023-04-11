import React from 'react';
import { Formik  } from 'formik';
import * as yup from "yup";

const Personal__info = ({next, previous, data}) => {

    const formValidationSchema = yup.object({
        firstName : yup.string().required("first name is Required"),
        lastName : yup.string().required("last name is Required"),
        email:yup.string().email().required("email is required"),
        phone: yup.number().required("phone number is required")
    })
    return (
        <Formik
        initialValues={data}
        validationSchema= {formValidationSchema}
        onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            setTimeout(() => {
                next(values, true);
                actions.setSubmitting(false)
            }, 1500)

        }}
        >
    {({values, handleSubmit, handleChange, handleBlur ,isSubmitting, touched, errors}) => (
        <form onSubmit={handleSubmit}>
            <h2 className='form-title'>Personal Details</h2>
            <div className="input-field name">
                <label  htmlFor="firstName">First Name</label>
                <input  type="text" id='firstName' name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched["firstName"] && errors["firstName"]&& "input-error"}
                />
                <p className='form-error'>{touched["firstName"] && errors["firstName"] && errors["firstName"]}</p>
            </div>
            <div className="input-field name">
                <label htmlFor="lastName">Last Name</label>
                <input  type="text" id='lastName' name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched["lastName"] && errors["lastName"]&& "input-error"}
                />
                <p className='form-error'>{touched["lastName"] && errors["lastName"] && errors["lastName"]}</p>
            </div>
            <div className="input-field email">
                <label  htmlFor="email">Email</label>
                <input  type="email" id='email' name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched["email"] && errors["email"]&& "input-error"}
                />
                <p className='form-error'>{touched["email"] && errors["email"] && errors["email"]}</p>
            </div>
            <div className="input-field phone">
                <label  htmlFor="phone">Phone</label>
                <input  type="tel" id='phone' name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched["phone"] && errors["phone"]&& "input-error"}
                />
                <p className='form-error'>{touched["phone"] && errors["phone"] && errors["phone"]}</p>
            </div>
            <div className="btns-box">
                <button className='btn' type='button' onClick={() => previous(values)}>Previous</button>
                <button className='btn' type='Submit'>{isSubmitting? "Loading..." : "Submit"}</button>
            </div>
        </form>
    )}
    </Formik>
  )
}

export default Personal__info