import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutButton from './logoutButton'
import { useRecoilState } from "recoil";
import { recoilTestItem } from "./atom";
import { useEffect, useState } from "react";
import { getLoginUserId } from "../api/auth";

function HeaderBar() {
  let [loginUserId, setLoginUserId] = useState();
  useEffect(()=>{
    setLoginUserId(getLoginUserId())
  })
  
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>

<LogoutButton />
<p>{loginUserId}</p>
        <IconButton color="inherit" sx={{ float: "right", margin: "5px" }}>
          <Badge color="secondary">
            <SettingsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;