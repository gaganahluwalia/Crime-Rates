import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { fetchCrimes, getCrimeReports } from "./api/fetchCrimes";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import SearchButton from "./components/SearchButton/SearchButton";
import Categories from "./components/Categories/Categories";
import Postcode from "./components/Postcode/Postcode";
import DateField from "./components/DateField/DateField";
import CrimeResults from "./components/CrimeResults/CrimeResults";

function App() {
  const columns = [
    { id: "no", label: "No.", minWidth: 30 },
    { id: "category", label: "Name", minWidth: 170 },
    { id: "location_type", label: "Location", minWidth: 100 },
    {
      id: "id",
      label: "Crime ID",
      minWidth: 170,
    },
    {
      id: "outcome_status",
      label: "Outcome",
      minWidth: 170,
    },
    {
      id: "month",
      label: "Month",
      minWidth: 170,
    },
  ];

  const [postcode, setPostcode] = useState("");
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [crimes, setCrimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fresh, setFresh] = useState(true);
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const [crimeCategory, setCrimeCategory] = useState("");
  const [policeForce, setPoliceForce] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const validateForm = () => {
    if (
      date !== "" &&
      date !== null &&
      date !== undefined &&
      postcode !== "" &&
      postcode !== null &&
      postcode !== undefined
    ) {
      setIsFormInvalid(false);
      return true;
    } else {
      setIsFormInvalid(true);
      return false;
    }
  };

  const searchPostcode = async () => {
    setFresh(true);
    if (validateForm()) {
      setLoading(true);
      setFresh(false);
      setCrimes([]);
      let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
      let dateVal = `${date.getFullYear()}-${dateMonth}`;
      await fetchCrimes(postcode, dateVal, crimeCategory, policeForce)
        .then((res) => {
          setError(false);
          setLoading(false);
          if (res.status === 200) {
            setCrimes(res.data.crimes);
          } else {
            setError(true);
            setErrorMessage(res.response.data.error);
          }
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        });
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <Container maxWidth="xlg" sx={{ mt: 2, mb: 2, marginTop: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                height: 110,
              }}
            >
              {isFormInvalid && (
                <Box sx={{ color: "#d32f2f", marginLeft: 1 }}>
                  Postcode and Date fields are mandatory
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Postcode postcode={postcode} setPostcode={setPostcode} />

                <DateField date={date} setDate={setDate} />
                <Categories
                  crimeCategory={crimeCategory}
                  setCrimeCategory={setCrimeCategory}
                />

                <SearchButton
                  disabled={false}
                  loading={loading}
                  handleClick={searchPostcode}
                  buttonText="Search"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
        {loading && <Loading />}
        {!loading && !error && crimes && crimes.length > 0 && (
          <CrimeResults
            columns={columns}
            crimes={crimes}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
        {!fresh && !loading && !error && (!crimes || crimes.length === 0) && (
          <Error message="No Crime Data Found" />
        )}
        {!loading && error && <Error message={errorMessage} />}
      </Container>
    </Box>
  );
}

export default App;
