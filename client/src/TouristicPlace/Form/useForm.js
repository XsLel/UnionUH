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

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
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
