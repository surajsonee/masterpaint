import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//css file
import "./Sidebar.css";
import { HomeContext } from "../../context/homeContext/HomeContext";
import axios from "axios";

const searchTags = [
  "Monochrome",
  "Colorful",
  "Bright",
  "Dark",
  "Saturated",
  "Faded",
];

const featuredEffect = [
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Pop-Art/preview.jpg?v=0.2.0",
    name: "Pop Art",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Superstring/preview.jpg?v=0.2.0",
    name: "Superstring",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Structuralism/preview.jpg?v=0.2.0",
    name: "Structuralism",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Warm Smear/preview.jpg?v=0.2.0",
    name: "Warm Smear",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Cartoon/preview.jpg?v=0.2.0",
    name: "Cartoon",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Ink Art/preview.jpg?v=0.2.0",
    name: "Ink Art",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Sketch 2/preview.jpg?v=0.2.0",
    name: "Sketch 2",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Van Gogh 2/preview.jpg?v=0.2.0",
    name: "Van Gogh 2",
  },
  {
    image:
      "https://static.fotor.com/app/goart-pro/img/effect/Meteor shower/preview.jpg?v=0.2.0",
    name: "Meteor shower",
  },
];

const effect = [
  "Sketch",
  "Cartoon",
  "Pixel",
  "Watercolor",
  "Artist",
  "Art Genre",
  "Universal",
];

const Sidebar = () => {
  const { selectedFile, setSelectedFile, setLoading } = useContext(HomeContext);

  const [activeFeaturedEffect, setActiveFeaturedEffect] = useState("");

  const handleFeaturedEffect = async (item) => {
    setLoading(true);
    setActiveFeaturedEffect(item.name);

    //formdata
    const formData = new FormData();
    formData.append("style", item.image);
    formData.append("content", selectedFile);
    // console.log([...formData]);

    const url = "https://masterpaint.pro:8000/styles/v1/style/deepai";

    try {
      const result = await axios.post(url, formData);
      // console.log(result);
      setSelectedFile(result?.data?.output_url);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-[360px] bg-[#2b2c2f] shadow-[4px 4px 10px 1px rgba(0,0,0,.0799999982)] h-[calc(100vh-56px)] relative flex flex-col flex-shrink-0">
      {!selectedFile && (
        <div
          id="mask"
          className="absolute inset-0 bg-[rgba(0,0,0,.4)] cursor-pointer z-10"
        ></div>
      )}
      <div className="px-[24px] pt-[24px] pb-[16px] border-b border-solid border-[hsla(0,0%,100%,.06)]">
        <div className="mb-[16px]">
          <TextField
            fullWidth
            label=""
            id="fullWidth"
            className="h-[40px] bg-white rounded-[4px] text-[14px] font-medium"
            placeholder="Search for an art effect with keywords"
            sx={{
              ".MuiOutlinedInput-root": {
                height: "40px",
                fontSize: "14px",
                fontWeight: "600 !important",
              },
            }}
          />
        </div>
        <div className="flex flex-wrap">
          {searchTags.map((tag, index) => {
            return (
              <div
                key={index}
                className="text-white h-[36px] px-[8px] shadow-[0 8px 20px 0 transparent] rounded-[8px] bg-[hsla(0,0%,84.7%,.1)] hover:bg-[hsla(0,0%,84.7%,.2)] mr-[8px] mb-[8px] text-[13px] font-medium flex items-center border-2 border-transparent cursor-pointer"
              >
                {tag}
              </div>
            );
          })}
          <div className="h-[36px] w-[36px] flex justify-center items-center bg-[hsla(0,0%,100%,.3)] rounded-[8px] cursor-pointer">
            <ArrowForwardIosIcon className="text-white h-[15px]" />
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="h-[calc(100%-26px)]">
          <div className="relative h-full">
            <div className="pl-[24px] pr-[16px] absolute inset-0 overflow-y-auto scroll">
              <h3 className="mt-[16px] mb-[8px] cursor-pointer text-[14px] font-medium text-white">
                Featured Effects
              </h3>
              <div className="grid grid-cols-3 gap-x-[12px]">
                {featuredEffect.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer style-wrapper"
                      onClick={() => handleFeaturedEffect(item)}
                    >
                      <div
                        className={`${
                          activeFeaturedEffect === item.name
                            ? "border-2 rounded-[4px] border-solid border-[#2c7dfa]"
                            : ""
                        } style relative`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-[4px] object-cover"
                        />
                        {activeFeaturedEffect === item.name && (
                          <CheckCircleIcon className="bg-white text-[#2c7dfa] rounded-[50%] absolute inset-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                        )}
                      </div>
                      <span className="text-[12px] font-medium text-center block mt-[2px] mb-[6px] text-[hsla(0,0%,100%,.7)]">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-[150px] mb-[8px] rounded-[8px] cursor-pointer overflow-hidden">
                <div className="relative h-full w-full">
                  <img
                    src="https://static.fotor.com/app/goart-pro/img/aigc/aigc_background1.png"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                  <span className="text-[13px] bottom-[4px] absolute font-semibold text-white rounded-[4px] bg-[rgba(42,43,47,.3)] left-[50%] translate-x-[-50%] py-[3px] px-[10px] whitespace-nowrap">
                    AI Cartoonizer, Cartoon Your Photos
                  </span>
                </div>
              </div>
              <div>
                {effect.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between px-[16px] h-[42px] mb-[8px] bg-[hsla(0,0%,100%,.05)] rounded-[8px] hover:bg-[hsla(0,0%,100%,.1)] cursor-pointer"
                    >
                      <div className="text-[hsla(0,0%,100%,.8)]">{item}</div>
                      <ArrowForwardIosIcon className="text-white h-[15px]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
