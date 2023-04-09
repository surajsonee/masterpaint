import React from "react";
import UploadImage from "../../components/home/UploadImage";
import Sidebar from "../../components/home/Sidebar";
// import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="max-h-[calc(100vh-56px)] overflow-hidden flex relative">
      {/* <Button
        className="w-full h-screen absolute z-10"
        component="label"
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <input
          hidden
          accept="image/*"
          type="file"
          className="h-full w-full absolute z-10"
        />
      </Button> */}
      <Sidebar />
      <UploadImage />
    </div>
  );
};

export default Home;
