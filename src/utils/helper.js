export const convertBlobToBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

//return error mssg
export const errorMssg = (error) => {
  const err = error?.response?.data;
  //   console.log("err", err);
  let errMssg;
  for (const key in err) {
    switch (key) {
      case "email":
        errMssg = err?.email[0];
        break;
      case "password1":
        errMssg = err?.password1[0];
        break;
      case "non_field_errors":
        errMssg = err?.non_field_errors[0];
        break;
      default:
        errMssg = "Something went wrong!..";
    }
  }
  return errMssg || "Something went wrong!..";
};
