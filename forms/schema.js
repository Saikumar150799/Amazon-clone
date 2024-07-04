import * as Yup from "yup";

export const ADDRESS_FORM_SCHEMA = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  code: Yup.string().required("Country code is required"),
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.number().min(10).required("Phone number is required"),
  street: Yup.string().required("Street is required"),
  landmark: Yup.string().required("Landmark is required"),
  pinCode: Yup.number().required("Pin code is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
});
