import React from 'react'


const AvailableTimes = ({formik, availableTimes}) => {
        function displayOptions(){
            const length = availableTimes.length;
            if(length > 0){
                return(
                    <>
                    <option value="">-- Select Time --</option>
                    {availableTimes.map((elem, index) => (
                        <option key={index} value={elem} >{elem}</option>
                ))}
                    </>

            )} else {
                return <option value="">-- Sorry! No available time on this date. --</option>
            }

        }
    return (
        <select id="time" name='time'
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched["time"] && formik.errors["time"]&& "input-error"}
            >
                {displayOptions()}
        </select>
    )
}

export default AvailableTimes