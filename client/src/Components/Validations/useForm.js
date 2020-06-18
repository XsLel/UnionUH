import { useState, useEffect, Component } from "react";
import { http } from "../../services";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    nameRestaurant: "",
    restaurantAddress: "",
    additionalInformation: "",
    email: "",
    webAddress: "",
    phone: "",
    advertising: "",
    category: "",
    description: "",
    province: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    debugger;
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
