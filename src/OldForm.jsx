import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const validate = (values) => {
  const errors = {
  };

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

/**
 *
 * @description React Form using useFormik hook. Simple and
 * practical use case for our day to day, using our own validation
 * rules.
 */
export const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      formik.setValues(initialValues);
      formik.setTouched({});
      formik.setErrors({});
    },
    validationSchema,
  });

  useEffect(() => {
    // when validating,fields with error are stored in formik.errors
    console.log(formik.errors);
    // when visiting fields, they are stored in formik.touched, use it together
    // with formik.handleBlur to built a good UX.
    console.log(formik.touched);
  }, []);


  return (
    <form className="form" action="" onSubmit={formik.handleSubmit}>
      <h2 className="form__heading">React & Formik</h2>
      <label htmlFor="name" className="form__label">
        {/* Only shows error message to fields that have
              not passed validation & have been visited after blur-event */}
        {formik.touched.name && formik.errors.name
          ? <div className="form__error">{formik.errors.name}</div> : null}
        <input
          className={`form__input ${formik.errors?.name ? 'error--color' : ''}`}
          type="text"
          id="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </label>

      <label htmlFor="email" className="form__label">
        {/* Only shows error message to fields that have
              not passed validation & have been visited after blur-event */}
        {formik.touched.email && formik.errors.email
          ? <div className="form__error">{formik.errors.email}</div> : null}
        <input
          className={`form__input ${formik.errors?.email ? 'error--color' : ''}`}
          type="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </label>

      <label htmlFor="channel" className="form__label">
        {/* Only shows error message to fields that have
              not passed validation & have been visited after blur-event */}
        {formik.touched.channel && formik.errors.channel
          ? <div className="form__error">{formik.errors.channel}</div> : null}
        <input
          className={`form__input ${formik.errors?.channel ? 'error--color' : ''}`}
          type="text"
          id="channel"
          placeholder="Channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
      </label>

      <button className="btn" type="submit">submit</button>
    </form>
  );
};
