import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Postcode = ({ isFormInvalid, postcode, setPostcode }) => {
  return (
    <FormControl sx={{ m: 1, width: "95ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-postcode">
        {isFormInvalid ? "Postcode required" : "Postcode"}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-postcode"
        type="text"
        error={isFormInvalid}
        value={postcode}
        required
        onChange={(e) => setPostcode(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {/* <IconButton aria-label="Search Postcode" edge="end"> */}
            <SearchIcon />
            {/* </IconButton> */}
          </InputAdornment>
        }
        placeholder={isFormInvalid ? "Postcode required" : "Postcode"}
        label={isFormInvalid ? "Postcode required" : "Postcode"}
      />
    </FormControl>
  );
};

export default Postcode;
