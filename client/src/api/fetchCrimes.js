import axios from "axios";

const API_URL = "http://localhost:5000";
//const API_URL = "https://uk-crimes-app-backend.herokuapp.com";
const POLICE_API_BASE = "https://data.police.uk/api";
export const fetchCrimes = async (postcode, date, category, policeForce) => {
  try {
    let res = await axios.get(
      `${API_URL}/?postcode=${postcode}&date=${date}&category=${category}&policeForce=${policeForce}`
    );
    return res;
  } catch (e) {
    return e;
  }
};

export const getCategories = async () => {
  try {
    let res = await axios.get(`${POLICE_API_BASE}/crime-categories`);
    return res;
  } catch (e) {
    return e;
  }
};

export const getForces = async () => {
  try {
    let res = await axios.get(`${POLICE_API_BASE}/forces`);
    return res;
  } catch (e) {
    return e;
  }
};

export const getCrimeReports = async (postcode, date, category, force) => {
  try {
    let res = await axios.get(
      `${POLICE_API_BASE}/crimes-no-location?category=${category}&force=${force}&date=${date}`
    );
    return res;
  } catch (e) {
    return e;
  }
};
