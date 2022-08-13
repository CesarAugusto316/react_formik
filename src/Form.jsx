import React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';


const initialValues = { name: '', channel: '', email: '' };

/**
 *
 * @description Refactored Formik Form using built-in Formik components
 */
export const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        channel: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm(initialValues);
        setSubmitting(false);
      }}
    >
      <Form className="form">
        <h2 className="form__heading">Formik</h2>
        <label htmlFor="name" className="form__label">
          <ErrorMessage name="name" className="form__error" component="div" />
          <Field name="name">
            {({ field, meta }) => {
              return (
                <input
                  type="text"
                  className={`form__input ${meta.error
                    && meta.touched && 'error--color'}`}
                  placeholder="Name"
                  {...field}
                />
              );
            }}
          </Field>
        </label>

        <label htmlFor="email" className="form__label">
          <ErrorMessage name="email" className="form__error" component="div" />
          <Field name="email">
            {({ field, meta }) => {
              return (
                <input
                  type="email"
                  className={`form__input ${meta.error
                    && meta.touched && 'error--color'}`}
                  placeholder="Email"
                  {...field}
                />
              );
            }}
          </Field>
        </label>

        <label htmlFor="channel" className="form__label">
          <ErrorMessage name="channel" className="form__error" component="div" />
          <Field name="channel">
            {({ field, meta }) => {
              return (
                <input
                  type="text"
                  className={`form__input ${meta.error
                    && meta.touched && 'error--color'}`}
                  placeholder="Channel"
                  {...field}
                />
              );
            }}
          </Field>
        </label>

        <button className="btn" type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
