import { Container, Grid, Button, Toolbar, AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, FilledInput, FormControl, FormHelperText, Input, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import HeaderBar from "../../components/headerBar";

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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <p>icon1</p> : <p>icon2</p>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <p>icon1</p> : <p>icon2</p>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <p>menuicon</p>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <HeaderBar/>
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
        <Toolbar />
        <HeaderBar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

        <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" value={name} onChange={handleChange} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input
          id="component-error"
          value={name}
          onChange={handleChange}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" value={name} onChange={handleChange} />
      </FormControl>
      </Box>
      </Box>
    </Box>
  );
    

}

export default SettingPage;