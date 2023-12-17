export const validateForm = (name, email, password) => {
  const isNameValid = /^(?!-)(?!.*-$)[a-zA-Z-]+$/.test(name);
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);
  if (!isNameValid) return "Name is not valid!";
  if (!isEmailValid) return "Email is not valid!";
  if (!isPasswordValid) return "Password is not valid!";
  return null;
};
