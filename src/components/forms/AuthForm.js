import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Notification from "../notifications/Notification";

// images
import facebookIcon from "../../assests/images/facebook.svg";
import googleIcon from "../../assests/images/google.svg";
import appleIcon from "../../assests/images/apple.svg";
import axios from "axios";

const AuthForm = ({ signUp, setOpenSignUpDialog }) => {
  const [registerWithEmail, setRegisterWithEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  //for notification
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationType, setNotificationType] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  //end

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUp) {
      const url = "https://masterpaint.pro:8000/user/v1/registration/";
      const data = {
        username: formValues.email,
        email: formValues.email,
        password1: formValues.password,
        password2: formValues.password,
      };
      try {
        const result = await axios.post(url, data);
        console.log(result);
        setFormValues({
          email: "",
          password: "",
        });
        setOpenNotification(true);
        setNotificationType("Success");
        setNotificationMessage("Register Successfully");
      } catch (error) {
        console.log("error", error);
        const errMssg = error?.response?.data;
        setOpenNotification(true);
        setNotificationType("error");
        setNotificationMessage(errMssg?.email[0] || "Something went wrong!..");
      }
    } else {
      const url = " https://masterpaint.pro:8000/user/v1/login/";
      const data = {
        username: formValues.email,
        password: formValues.password,
      };
      try {
        const result = await axios.post(url, data);
        console.log(result);
        setFormValues({
          email: "",
          password: "",
        });
        setOpenNotification(true);
        setNotificationType("Success");
        setNotificationMessage("Login Successfully");
      } catch (error) {
        console.log("error", error);
        setOpenNotification(true);
        setNotificationType("error");
        setNotificationMessage("Something went wrong!..");
      }
    }
  };

  return (
    <>
      <Notification
        openNotification={openNotification}
        setOpenNotification={setOpenNotification}
        notificationType={notificationType}
        notificationMessage={notificationMessage}
      />
      <div className="h-[540px] flex">
        <div className="w-[400px] px-[40px] shadow-[0 0 4px rgba(0, 0, 0, 0.1)] flex items-center">
          <div className="w-full">
            {signUp ? (
              <>
                <p className="text-[22px] text-[#222326] font-semibold">
                  Sign up with Fotor for free
                </p>
                <p
                  className={`${
                    registerWithEmail ? "mb-[16px" : "mb-[40px]"
                  } text-[12px] text-[#2c7dfa] font-normal mt-[8px] cursor-pointer hover:underline`}
                  onClick={() => setOpenSignUpDialog(false)}
                >
                  Already have an account? Sign in
                </p>
              </>
            ) : (
              <>
                <p className="text-[22px] text-[#222326] font-semibold">
                  Welcome back to Fotor! Please sign in
                </p>
                <div className="mt-[8px] mb-[16px] flex">
                  <p className="text-[12px] font-normal">New to Fotor?</p>
                  <p
                    className="text-[12px] text-[#2c7dfa] font-normal cursor-pointer hover:underline"
                    onClick={() => setOpenSignUpDialog(true)}
                  >
                    &nbsp; Create an account
                  </p>
                </div>
              </>
            )}
            <Button
              variant="contained"
              className="bg-[#f4f5f6] text-[#414751] text-[13px] font-normal my-[10px] h-[40px] capitalize hover:bg-[#e7e8e9] relative"
              startIcon={
                <img
                  src={facebookIcon}
                  alt="facebook"
                  className="absolute top-[6px] left-[16px]"
                />
              }
              fullWidth
              disableRipple
            >
              {signUp ? "Sign up with Facebook" : "Sign in with Facebook"}
            </Button>
            <Button
              variant="contained"
              className="bg-[#f4f5f6] text-[#414751] text-[13px] font-normal h-[40px] capitalize hover:bg-[#e7e8e9]"
              startIcon={
                <img
                  src={googleIcon}
                  alt="facebook"
                  className="absolute top-[6px] left-[16px]"
                />
              }
              fullWidth
              disableRipple
            >
              {signUp ? "Sign up with Google" : "Sign in with Google"}
            </Button>
            <Button
              variant="contained"
              className="bg-[#f4f5f6] text-[#414751] text-[13px] font-normal my-[10px] h-[40px] capitalize hover:bg-[#e7e8e9] relative"
              startIcon={
                <img
                  src={appleIcon}
                  alt="facebook"
                  className="absolute top-[6px] left-[16px]"
                />
              }
              fullWidth
              disableRipple
            >
              {signUp ? "Sign up with Apple" : "Sign in with Apple"}
            </Button>
            <div className="text-[#9da2ad] mb-[10px] mx-auto text-center">
              -or-
            </div>
            {signUp && !registerWithEmail ? (
              <Button
                variant="contained"
                className="bg-[#f4f5f6] text-[#414751] text-[13px] font-normal h-[40px] capitalize hover:bg-[#e7e8e9] relative"
                fullWidth
                disableRipple
                onClick={() => setRegisterWithEmail(true)}
              >
                Sign up with email
              </Button>
            ) : (
              <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="grid">
                  <TextField
                    required
                    // error
                    type="email"
                    // id="outlined"
                    label=""
                    variant="outlined"
                    placeholder="Please enter your email address."
                    fullWidth
                    className="h-[40px] mb-[20px]"
                    sx={{
                      ".MuiOutlinedInput-root": {
                        height: "100%",
                      },
                    }}
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    // helperText="Incorrect entry."
                  />
                </div>
                <div className="grid">
                  <OutlinedInput
                    required
                    // error
                    id="outlined"
                    label=""
                    variant="outlined"
                    placeholder="Password"
                    fullWidth
                    className="h-[40px] mb-[20px]"
                    sx={{
                      ".MuiOutlinedInput-root": {
                        height: "100%",
                      },
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    // helperText="Incorrect entry."
                    autoComplete="new-password"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({ ...formValues, password: e.target.value })
                    }
                  />
                </div>
                <div className="flex">
                  <FormControl
                    required
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <FormControlLabel
                      control={<Checkbox required={signUp ? true : false} />}
                      label={signUp ? "" : "Remember me"}
                      sx={{
                        ".MuiCheckbox-root": {
                          padding: 0,
                          paddingLeft: "8px",
                        },
                        ".MuiFormControlLabel-label": {
                          fontSize: "11px",
                        },
                      }}
                      className="mr-[2px]"
                    />
                    {signUp ? (
                      <div className="leading-[20px]">
                        <span className="text-[11px] font-medium text-[#a0a0a0]">
                          By signing up, I agree to{" "}
                        </span>
                        <span className="text-[11px] font-medium text-[#2c7dfa]">
                          Terms of Use{" "}
                        </span>
                        <span className="text-[11px] font-medium text-[#a0a0a0]">
                          &{" "}
                        </span>
                        <span className="text-[11px] font-medium text-[#2c7dfa]">
                          Privacy Policy
                        </span>
                      </div>
                    ) : (
                      <p className="cursor-pointer text-[11px] font-medium text-[#2c7dfa]">
                        Forget your password?
                      </p>
                    )}
                  </FormControl>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className="my-[8px] bg-[#2c7dfa] text-white text-[13px] font-normal h-[40px] capitalize"
                  fullWidth
                  disableRipple
                >
                  {signUp ? "Sign up" : "Sign In"}
                </Button>
              </Box>
            )}
          </div>
        </div>
        <div className="w-[480px]">
          <img
            src="https://pub-static.fotor.com/static/web/lib/account/images/goartBg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default AuthForm;
