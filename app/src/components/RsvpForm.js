import React from "react";
import { Field, FieldArray, Form, Formik } from "formik";

import styled from "styled-components";

function sendRsvpEmail(email) {
  const headers = {
    "Content-Type": "application/json"
  };

  const body = JSON.stringify(email);

  return fetch("https://email-microservice.herokuapp.com/email", {
    method: "POST",
    headers,
    body
  });
}

async function onSubmit(values, { setSubmitting, setErrors }) {
  try {
    console.log("posting", values);
    // await sendRsvpEmail(values);
  } catch (e) {
    // TODO
  }
  setSubmitting(false);
}

const Label = styled.label`
  display: block;
`;

const Email = styled.input.attrs({
  type: "email"
})`
  display: inline-block;
`;

const FieldEmail = ({ field, form, label, ...props }) => (
  <Label>
    {label}
    <Email {...field} {...props} />
  </Label>
);

const Radio = styled.input.attrs({
  type: "radio"
})`
  display: inline-block;
`;

const FieldRadio = ({
  field: { value, ...rest },
  form,
  label,
  valueId,
  ...props
}) => (
  <Label>
    <Radio checked={value === valueId} value={valueId} {...rest} {...props} />
    {label}
  </Label>
);

const RsvpForm = initialValues => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({ errors, touched, isSubmitting }) => (
      <Form>
        <Field
          name="who"
          required={true}
          component={FieldEmail}
          label="Email Address"
        />
        <Field
          name="coming"
          required={true}
          component={FieldRadio}
          label="Yes, I'll be there"
          valueId="true"
        />
        <Field
          name="coming"
          required={true}
          component={FieldRadio}
          label="Sorry, can't make it"
          valueId="false"
        />
        <button disabled={isSubmitting}>Submit</button>
      </Form>
    )}
  />
);

export default RsvpForm;
