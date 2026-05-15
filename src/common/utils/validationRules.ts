import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.business) {
    errors.business = "Please tell us what your business does";
  }
  if (!values.teamTime) {
    errors.teamTime = "Please share what's taking up your team's time";
  }
  if (!values.channels) {
    errors.channels = "Please tell us how customers reach you";
  }
  return errors;
}
