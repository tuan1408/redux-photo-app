import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  options: [],
  label: "",
  placeholder: "",
  disabled: false,
};

function SelectField(props) {
  const { field, form, options, label, disabled, placeholder } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectOptionChange}
        disabled={disabled}
        placeholder={placeholder}
        options={options}
        className={showError ? "is-invalid" : ""}
      ></Select>
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default SelectField;
