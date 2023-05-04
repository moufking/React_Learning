import {FC, React} from 'react';
import { Formik , useFormik } from 'formik';


export const Form = () => {

    const validate = values => {
            const errors = {}

            if(!values.firstName)  {
                errors.firstName = 'Please enter your first name'
            }else if(values.firstName.length> 15) {
                errors.firstName = 'Please enter a first name less than 15 characters'
            }

            if(!values.lastName)  {
                errors.lastName = 'Please enter your first name'
            }else if(values.lastName.length > 15) {
                errors.lastName = 'Please enter a lastname name less than 15 characters'
            }

            if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
            

            return errors
    }
    const formik = useFormik({
        initialValues : {
            email : '', 
            firstName: '',
            lastName: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
        validate

        
    })
    return ( 
        <>
            <div>
                {/*  first  step*/}
                <Formik  
                initialValues = {{email: '' , password: ''}}
                validate =  {values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
            
                      alert(JSON.stringify(values, null, 2));
                      console.log(values, 'voir les valeurs')
                      setSubmitting(false);
                 
                  }}>
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="row">
                                    <label>Email</label>
                                <input
                          type="text"
                          name="email"
                          className='form-control'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        { touched.email && errors.email}
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                          Submit
                        </button>
                                </div>

                            </div>
                        
                      </form>

                    )}


                </Formik>
                {/* end firs step */}

                {/* 2nd step*/ }
                <div className="container">
                    <div className="row">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="col-6">
                        <label>Email</label>
                        <input className='form-control' type='text'  id="email" onChange={formik.handleChange} value={formik.values.email} />
                         {formik.touched.email && formik.errors.email ?   <div>{formik.errors.email}</div> : '' }
                        </div>
                        <div className="col-6">
                            <label> FirstName</label>
                            <input className='form-control' type='text' id='firstName' onChange = {formik.handleChange} value={formik.values.firstName}/>
                            {formik.touched.firstName && formik.errors.firstName  ? <div>{formik.errors.firstName} </div>  : '' }
                        </div>
                        <div className="col-6">
                            <label> LastName</label>
                            <input className='form-control' type='text' id='lastName' onChange = {formik.handleChange} value={formik.values.lastName} />
                            {formik.touched.lastName && formik.errors.lastName  ? <div>{formik.errors.lastName} </div>  : '' }
                        </div>

                        <div className="col-6">
                            <button type="submit"  className='btn btn-primary'>Submit </button>
                        </div>
                    </form>
                    </div>
               
                </div>

                {/* end 2nd step */}
               


                

            </div>
        </>
    )
}

