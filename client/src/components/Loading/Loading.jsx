import React from "react";
import "./Loading.style.scss";
import { Typography, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box className="loading__section">
      <Typography color="primary" variant="h6" component="h1">
        ...Loading Data
      </Typography>
    </Box>
  );
};

export default Loading;
