import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutButton from './logoutButton'

function HeaderBar() {
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