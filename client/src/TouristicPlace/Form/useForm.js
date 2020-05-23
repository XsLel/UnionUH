import React from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    address: "",
    schedules: "",
  });

  const [errors, setErrors] = React.useState({});

  const [isSubmitting, setIsSubmitting] = React.useState(false);

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

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
  };
};

export default useForm;
