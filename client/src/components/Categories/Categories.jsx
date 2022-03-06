import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../api/fetchCategories";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Categories = ({ crimeCategory, setCrimeCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((res) => {
      console.log("Categories", res.data.categories);
      setCategories(res.data.categories);
    });
  }, []);

  const handleChange = (event) => {
    setCrimeCategory(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, width: "95ch" }} variant="outlined">
      <InputLabel id="demo-simple-select-autowidth-label">
        Crime Category
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={crimeCategory}
        onChange={handleChange}
        autoWidth
        align="left"
        label="Crime Category"
      >
        <MenuItem value="">
          <em>Select Crime Category </em>
        </MenuItem>
        {categories.map((category, i) => (
          <MenuItem key={i} value={category.url}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Categories;
