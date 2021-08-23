export const composeValidators = (...validators) =>  (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
  
export const requiredField = value => value ? undefined : "Field is required";

export const maxLenghtCreator = maxLength => value => value.length <= maxLength ? undefined : `Max length is ${maxLength} symbols`;