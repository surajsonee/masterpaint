import React from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";

//images
import Logo from "../assests/images/logov1.png";
import AuthForm from "../components/forms/AuthForm";

const Header = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = React.useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className="bg-[#1d1e21] px-[25px] h-[56px] flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="cursor-pointer" />
          </Link>
        </div>
        <div>
          <div
            className="text-[13px] text-white font-medium cursor-pointer inline-block"
            onClick={() => {
              setDialogOpen(true);
              setOpenSignUpDialog(false);
            }}
          >
            Sign in
          </div>
          <span className="text-white mx-[8px]">/</span>
          <div
            className="text-[13px] text-white font-medium cursor-pointer inline-block"
            onClick={() => {
              setDialogOpen(true);
              setOpenSignUpDialog(true);
            }}
          >
            Sign up
          </div>
        </div>
      </div>
      <Dialog
        open={dialogOpen}
        // onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "880px",
              overflowY: "inherit",
            },
          },
        }}
      >
        <div
          className="cursor-pointer absolute right-[-40px] z-10 rounded-[50%]"
          onClick={handleDialogClose}
        >
          <CancelIcon
            className="text-[2rem]"
            style={{ fill: "rgba(26, 27, 28, 0.3)" }}
          />
        </div>
        <AuthForm
          signUp={openSignUpDialog ? true : false}
          setOpenSignUpDialog={setOpenSignUpDialog}
          setDialogOpen={setDialogOpen}
        />
      </Dialog>
    </>
  );
};

export default Header;
