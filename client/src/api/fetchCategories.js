import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchCategories = async () => {
  try {
    let res = await axios.get(`${API_URL}/categories`);
    return res;
  } catch (e) {
    return e;
  }
};
