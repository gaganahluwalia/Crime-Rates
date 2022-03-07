import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./DateField.scss";

const DateField = ({ isFormInvalid, date, setDate }) => {
  return (
    <FormControl sx={{ m: 1, width: "95ch" }} variant="outlined">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          id="datePicker"
          views={["year", "month"]}
          label={
            isFormInvalid && !date
              ? "Year and Month required"
              : "Year and Month"
          }
          minDate={new Date("2012-03-01")}
          maxDate={new Date()}
          value={date}
          required
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              className={isFormInvalid && !date ? "required" : null}
              required
              {...params}
              // helperText={!date ? "Year and Month required" : undefined}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DateField;
