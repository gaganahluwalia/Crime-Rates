import React from "react";
import "./Error.style.scss";
import { Typography, Box } from "@mui/material";

const Error = ({ message }) => {
  return (
    <Box className="error__section">
      <Typography color="error" variant="h6" component="h1">
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
