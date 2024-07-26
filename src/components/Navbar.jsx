//Navbar.jsx
import "./Navbar.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import NavDrawer from './NavDrawer.jsx';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  // const appBarRef = React.useRef(null);
  // const [appBarHeight, setAppBarHeight] = React.useState(92);


  // const updateAppBarHeight = () => {
  //   if (appBarRef.current) {
  //     setAppBarHeight(appBarRef.current.clientHeight);
  //   }
  // };

  // React.useEffect(() => {
  //   updateAppBarHeight();
  //   window.addEventListener('resize', updateAppBarHeight);
  //   return () => window.removeEventListener('resize', updateAppBarHeight);
  // }, []);

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgb(158, 34, 34)"
          }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
         >
          <Grid
            container
            >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

            }}
          >
            <NavDrawer
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              // appBarHeight={appBarHeight}
              sx={{ mr: 1 }}
            />
            <div>
              <Button
              className="navbar"
               sx={{
                justifyContent: 'center',
               }}
              >
                <img
                  src="https://www.mathisrentals.com/uploads/3/4/6/4/34648566/1382368192.png"
                  alt="Mathis Rentals Logo"
                  onClick= {() => navigate("/Mathis-Rentals")}
                />
              </Button>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: "5px",

            }}
          >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
            }}
          >
            Call to rent equipment:
          </Typography>
          <Typography
            variant="h4"
          >
            979-966-0440
          </Typography>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



