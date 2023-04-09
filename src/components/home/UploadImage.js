import React, { useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import CircularProgress from "@mui/joy/CircularProgress";

//image
import noImage from "../../assests/images/noImage.png";
import { HomeContext } from "../../context/homeContext/HomeContext";

const UploadImage = () => {
  const { selectedFile, setSelectedFile, loading } = useContext(HomeContext);

  const convertBlobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleUpload = async (e) => {
    const base64data = await convertBlobToBase64(e.target.files[0]);
    // console.log(base64data);
    // setSelectedFile(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(base64data);
  };

  return (
    <div className="bg-[#f0f1f2] w-full flex h-[calc(100vh-56px)]">
      {loading ? (
        <div className="flex justify-center w-full ">
          <CircularProgress className="self-center" />
        </div>
      ) : !selectedFile ? (
        <div className="self-center w-full">
          <div className="h-[280px] w-[480px] mx-auto flex flex-col items-center justify-center bg-white rounded-[6px]">
            <div>
              <img src={noImage} alt="" className="w-[63px] h-[48px]" />
            </div>
            <div className="text-[16px] font-semibold text-[#1e1f22] mt-[13px]">
              Drag or upload your image here
            </div>
            <Button
              variant="contained"
              component="label"
              className="capitalize mt-[32px] h-[48px] py-[19px] px-[40px] text-[16px] font-semibold"
            >
              Open Image
              <input
                hidden
                accept=".png, .jpg, .jpeg, .svg"
                type="file"
                onClick={(e) => (e.target.value = "")}
                onChange={handleUpload}
              />
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="bg-white flex justify-between items-center h-[48px] px-[16px]">
            <Button
              variant="outlined"
              component="label"
              className="capitalize h-[32px] py-[4px] px-[16px] text-[13px] rounded-[40px] text-[#2c7dfa] bordre border-solid border-[#2c7dfa] font-semibold"
              startIcon={<AddIcon />}
            >
              Change Image
              <input
                hidden
                accept=".png, .jpg, .jpeg, .svg"
                type="file"
                onClick={(e) => (e.target.value = "")}
                onChange={handleUpload}
              />
            </Button>
            <Button
              variant="contained"
              className="capitalize h-[32px] py-[4px] px-[16px] text-[13px] rounded-[40px] font-semibold"
              startIcon={<KeyboardTabIcon className="rotate-90" />}
            >
              Download
            </Button>
          </div>
          <div className="py-[16px] px-[32px] h-[calc(100%-48px)] w-max mx-auto flex items-center">
            <img
              src={selectedFile ? selectedFile : ""}
              alt=""
              className="max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
