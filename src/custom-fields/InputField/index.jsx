import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, disabled, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        invalid={showError}
      ></Input>
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default InputField;
