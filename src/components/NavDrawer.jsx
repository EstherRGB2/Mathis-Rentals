//NavDrawer.jsx

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'
import {useNavigate} from "react-router-dom";

export default function NavDrawer(
  // { appBarHeight }
) {

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      >
      <List>
        <ListItem disablePadding>
          <ListItemButton
              onClick= {() => navigate("/Mathis-Rentals")}
          >
            <ListItemText
            primary='Home'
            sx={{
              '& .css-10hburv-MuiTypography-root': {fontSize: '1.5rem'}
            }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
              onClick= {() => navigate("/locations")}
          >
            <ListItemText
              primary='Locations'
              sx={{
                '& .css-10hburv-MuiTypography-root': {fontSize: '1.5rem'}
              }}
               />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
              onClick= {() => navigate("/contact")}
          >
            <ListItemText
              primary='Contact'
              sx={{
                '& .css-10hburv-MuiTypography-root': {fontSize: '1.5rem'}
              }}
              />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
              onClick= {() => navigate("/about")}
          >
            <ListItemText
              primary='About'
              sx={{
                '& .css-10hburv-MuiTypography-root': {fontSize: '1.5rem'}
              }}
              />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon
        onClick={toggleDrawer(true)}
        sx={{
          fontSize: '4rem',
        }}
        />
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            // top: `${appBarHeight}px`, // Adjust this value to position the Drawer lower
            top: `92px`, // Adjust this value to position the Drawer lower
          }
        }}
        >
        {DrawerList}
      </Drawer>
    </div>
  );
}
