import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  // Define your validation schema here
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // Handle form submission here (e.g., send data to the server)
        console.log('Form submitted:', values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;