import React, { useCallback } from "react";

export function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const validRex = /[a-zа-я\d\s-]/gi;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    if (name === 'name') {
      if (value && !validRex.test(value)) {
        setIsValid(false);
        setErrors({...errors, [name]: "Имя может содержать только буквы, цифры, дефис и пробел!" });
      }
      console.log(value, validRex.test(value), isValid);
    }
    

  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  console.log(values);
  console.log(errors);

  return { values, handleChange, errors, isValid, resetForm };
}