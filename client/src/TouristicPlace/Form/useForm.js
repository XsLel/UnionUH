import { useState, useEffect } from "react";
import { name, description, address, schedules } from "./TouristicPlaceForm";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    address: "",
    schedules: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
  };
};

export default useForm;
