import { Container, Grid, Button, Toolbar, AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, FilledInput, FormControl, FormHelperText, Input, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import HeaderBar from "../../components/headerBar";
import UserForm from "./components/userForm";

function SettingPage() {
let name = "name"
  const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 200;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleChange() {
      console.log("change")
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['User'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <p>icon1</p> : <p>icon2</p>} */}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <p>icon1</p> : <p>icon2</p>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={null}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <Typography
           component="div"
           variant="h4"
           color="inherit"
           noWrap
           sx={{ 
            //  mr: { sm: `${drawerWidth}px` },
           flexGrow: 1 ,
           textAlign: 'center'
          }}
         >
           title
         </Typography>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

        <UserForm />
      </Box>
      </Box>
    </Box>
  );
    

}

export default SettingPage;