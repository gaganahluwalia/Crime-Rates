import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DateField = ({ isFormInvalid, date, setDate }) => {
  console.log("Is form invald", isFormInvalid);
  return (
    <FormControl
      sx={{ m: 1, width: "95ch" }}
      variant="outlined"
      error={isFormInvalid}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={["year", "month"]}
          color={isFormInvalid ? "error" : undefined}
          label={isFormInvalid ? "Year and Month required" : "Year and Month"}
          error={isFormInvalid}
          minDate={new Date("2012-03-01")}
          maxDate={new Date()}
          value={date}
          required={isFormInvalid}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
          placeholder={isFormInvalid ? "Postcode required" : "Postcode"}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DateField;
