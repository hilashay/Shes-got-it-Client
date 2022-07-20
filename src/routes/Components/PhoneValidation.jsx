import React from "react";

let phoneErrorMessage = "";

const PhoneValidation = (props) => {
  const { phone, shouldValidate } = props;
  const phoneNumberString = Object.values(props.phone);
  const phoneNumber = parseInt(phoneNumberString);
  const phoneRegex = /^05([23480]){1}([0-9]){7}/;
  if (!shouldValidate) {
    return (phoneErrorMessage = <span class="required">*Required</span>);
  }

  if (!phone) {
    return (phoneErrorMessage = <span class="requirederror">*Required</span>);
  }

  if (isNaN(phoneNumber)) {
    return (phoneErrorMessage = <span class="requirederror">*NOT A NUMBER</span>);
  }

  if (10 > phone.length) {
    phoneErrorMessage = <span class="requirederror">*at least 10 charcters</span>;
    return phoneErrorMessage;
  }

  if (!phone.match(phoneRegex)) {
    phoneErrorMessage = <span class="requirederror">*Enter valid area code</span>;
    return phoneErrorMessage;
  }
};

export default PhoneValidation;
