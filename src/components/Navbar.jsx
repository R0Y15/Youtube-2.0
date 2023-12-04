import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={70} style={{
        marginLeft: '1rem'
      }}/>
      <span style={{
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem'
      }}> Youtube <span style={{color: '#fc0377'}}>2.0</span> </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
