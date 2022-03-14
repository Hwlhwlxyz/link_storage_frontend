import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";


function LogoutButton() {
    let navigate = useNavigate();
    function onLogout() {
        logout();
        navigate('/', {replace: true});
    }
    return (

<Button onClick={onLogout}>
            logout
        </Button>
    )


        
}

export default LogoutButton;