import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

const useForm = (callback, validate, verifyFile) => {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    address: "",
    schedules: "",
  });
  let imageErrors = [];
  const { addToast } = useToasts();
  const formData = new FormData();
  var images = FileList;
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

  const onImageChange = ({ target: { files, rejectedFiles } }) => {
    if (files && files.length > 0) {
      images = files;
      imageErrors = verifyFile(images);
      showImageErrors();
    }
  };

  function showImageErrors() {
    if (imageErrors.length > 0) {
      imageErrors.forEach((element) => {
        addToast(element, { appearance: "error" });
      });
    }
  }

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && imageErrors.length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors, imageErrors, isSubmitting, callback]);

  return {
    handleSubmit,
    handleChange,
    onImageChange,
    values,
    errors,
    images,
  };
};

export default useForm;
