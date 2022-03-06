import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";

import "./SearchButton.style.scss";

const SearchButton = ({ disabled, loading, handleClick, buttonText }) => {
  return (
    <FormControl variant="outlined" sx={{ m: 1, width: "45ch", height: "6ch" }}>
      <LoadingButton
        sx={{ height: "8ch" }}
        id="searchButton"
        disabled={disabled}
        variant="contained"
        startIcon={<SearchIcon />}
        loading={loading}
        loadingIndicator="...Loading"
        onClick={handleClick}
      >
        {buttonText}
      </LoadingButton>
    </FormControl>
  );
};

export default SearchButton;
