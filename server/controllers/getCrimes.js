const axios = require("axios");
const { returnSavedCategories } = require("./getCategories");

let categories = [];
const fetchLocation = async (postcode) => {
  const API_URL = "https://api.postcodes.io/postcodes";
  error = "";
  try {
    let response = await axios.get(`${API_URL}/${postcode}`);
    return response.data;
  } catch (e) {
    error = e.response.data;
    return e.response.data;
  }
};

const fetchLocationCrimes = async (lat, lng, date) => {
  const API_URL = "https://data.police.uk/api/crimes-at-location?";

  try {
    let url = `${API_URL}date=${date}&lat=${lat}&lng=${lng}`;
    let response = await axios.get(
      `${API_URL}date=${date}&lat=${lat}&lng=${lng}`
    );
    return response.data;
  } catch (e) {
    console.log("Fetch error location crimes", e.message);
  }
};

const getCrimes = async (req, res) => {
  let postcode = req.query.postcode;
  let date = req.query.date;
  let category = req.query.category;
  let lat = "";
  let lng = "";
  let crimes = "";

  await fetchLocation(postcode)
    .then(async (response) => {
      if (response.status === 200) {
        lat = response.result.latitude;
        lng = response.result.longitude;
        await fetchLocationCrimes(lat, lng, date)
          .then(async (response) => {
            crimes = response;
            let filteredCrimes = crimes;
            if (
              crimes &&
              category != "" &&
              category !== "all-crime" &&
              category !== "other-crime"
            ) {
              filteredCrimes = crimes.filter((crime) => {
                return crime.category === category;
              });
            } else if (category === "other-crime") {
              await returnSavedCategories().then((res) => {
                categories = res;
              });
              filteredCrimes = crimes.filter((crime) => {
                let matchFound = false;
                for (let category of categories) {
                  if (!matchFound) {
                    matchFound = crime.category === category.url;
                  } else {
                    break;
                  }
                }
                return !matchFound;
              });
            }

            res.status(200).json({ crimes: filteredCrimes });
          })
          .catch((error) => {
            console.log("Coming here in catch");
            res.status(503).json({ error: error.message });
          });
      } else {
        let error = { status: response.status, message: response.error };
        throw error;
      }
    })
    .catch((error) => {
      res.status(error.status).json({ error: error.message });
    });
};

module.exports = { getCrimes };
