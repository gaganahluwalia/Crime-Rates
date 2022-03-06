import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DateField = ({ date, setDate }) => {
  return (
    <FormControl sx={{ m: 1, width: "95ch" }} variant="outlined">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={["year", "month"]}
          label="Year and Month"
          minDate={new Date("2012-03-01")}
          maxDate={new Date()}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DateField;
