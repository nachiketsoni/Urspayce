import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import eventSvg from "../assets/event.svg"
const EventSection = () => {
  return (
    <Box className='flex items-center justify-center' >
    <Box  >
      <Box
        width={"fit-content"}
        bgcolor={"#1FC8AB"}
        className="rounded-full px-2 text-white flex align-center justify-center py-[.15rem]"
      >
        {" "}
        <Typography variant="caption" fontWeight={"bold"} className="uppercase">
          {" "}
          All in one Event management software
        </Typography>
      </Box>
      <Typography variant="h2" fontWeight={"900"}>
        A Better Way To <br />
        Manage
        <Typography variant="h2" fontWeight={"900"} color="primary">
          Event
        </Typography>
      </Typography>
      <Typography
        className="py-5"
        variant="subtitle1"
        lineHeight={"1.5rem"}
        color="grey.700"
      >
        Worlds Most Advanced Event Management Software <br /> powered by AI
      </Typography>
     
        <TextField
          variant="outlined"
        
          placeholder="Enter your work email"
          InputProps={{
            style: {
                borderRadius: "100px",
                padding: "0",

                overflow:"hidden"
              },
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#007bff", // Blue color similar to the image
                    color: "#fff",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "100px",
                  }}
                >
                  Get Started
                </Button>
              </InputAdornment>
            ),
          }}
         
        />
      
    </Box>
    <Box >
        <img src={eventSvg} alt="" />
    </Box>
    </Box>
  );
};

export default EventSection;
