import React, { useState } from 'react';
import { Redirect } from 'react-router';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      callback(inputs);
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.value,
      };
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
