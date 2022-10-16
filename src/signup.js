import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

export default function Signup() {

    const formik = useFormik({

        initialValues: {
            firstName : '',
            lastName : '',
            email: '',
        },

        validationSchema: Yup.object({
             firstName : Yup.string()
             .max(15, "must be 15 characters or less")
             .required("Required")

             ,lastName : Yup.string()
             .max(20, "must be 20 characters or less")
             .required("Required")

             ,email: Yup.string()
             .email("Invalid Email Adress")
             .required("Required")
        }),

        onSubmit : (values) => {
            console.log(values)
        }
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <input onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} id='firstName' placeholder='First Name' name='firstName' type='text'/>
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        <input onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} id='lastName' placeholder='Last Name' name='lastName' type='text'/>
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id='email' placeholder='Email' name='email' type='email'/>
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        <button type='submit' >Submit</button>
    </form>
  )
}
