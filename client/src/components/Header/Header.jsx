import { AppBar, Toolbar, Typography } from "@mui/material";
import policeLogo from "../../images/policeLogo.png";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <img src={policeLogo} style={{ height: "40px", width: "40px" }} />
        <Typography variant="h6" component="h1">
          UK Crime Report
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
