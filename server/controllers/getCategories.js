const axios = require("axios");
let categories = "";
const POLICE_API_BASE = "https://data.police.uk/api";
const getCategories = async (req, res) => {
  try {
    let response = await axios.get(`${POLICE_API_BASE}/crime-categories`);
    categories = response.data;
    res.status(200).json({ categories: categories });
  } catch (e) {
    console.log(e.message);
  }
};

const returnSavedCategories = async () => {
  if (!categories || categories.length == 0) {
    let response = await axios.get(`${POLICE_API_BASE}/crime-categories`);
    categories = response.data;
  }
  return categories;
};

module.exports = { getCategories, returnSavedCategories };
