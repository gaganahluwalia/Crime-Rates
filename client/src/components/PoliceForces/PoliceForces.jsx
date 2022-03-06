import React, { useEffect, useState } from "react";
import { getForces } from "../../api/fetchCrimes";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PoliceForces = ({ policeForce, setPoliceForce }) => {
  const [forces, setForces] = useState([]);
  useEffect(() => {
    getForces().then((res) => {
      setForces(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setPoliceForce(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, width: "95ch" }} variant="outlined">
      <InputLabel id="demo-simple-select-autowidth-label">
        Police Force
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={policeForce}
        onChange={handleChange}
        autoWidth
        label="Police Force"
      >
        <MenuItem value="">
          <em>Select Police Force </em>
        </MenuItem>
        {forces.map((force, i) => (
          <MenuItem key={i} value={force.id}>
            {force.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PoliceForces;
