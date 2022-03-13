import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { logout } from "../api/auth";


function LogoutButton() {
    function onLogout() {
        logout()
    }
    return (

<Button onClick={onLogout}>
            logout
        </Button>
    )


        
}

export default LogoutButton;