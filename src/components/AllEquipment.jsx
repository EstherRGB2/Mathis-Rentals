
import './equipment-module.css';
import '../index.css';
import './all-equipment.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Collapse } from '@mui/material';
import AllImages from './AllImages';

function AllEquipment() {
  // const handleClick = (imageUrl) => {
  //   console.log('You clicked the button');
  //   imageUrl.url_lg = imageUrl.url;
  // };

  const [open, setOpen] = useState(false);

    return(
          <div className = "all-images">
          {AllImages.map((imageUrl, index) => (
          <Card key={index} sx={{ maxWidth: 800 }}>
          {/* <CardActionArea> */}
            <CardMedia
              component="img"
              height="300"
              width="100"
              image={imageUrl.url}
              alt={imageUrl.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {imageUrl.name}
              </Typography>
              <Collapse in={open}>
                <Typography variant="h6" color="text.secondary">
                {imageUrl.description}
                </Typography>
              </Collapse>
              <Typography variant="body1" color="text.secondary">
                Item ID: {index + 1}
              </Typography>
            </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            <Button onClick={() => setOpen(!open)} sx={{color: 'black'}}>
              {open ? 'Hide Description' : 'Show Description'}
            </Button>
          </CardActions>
          </Card>
    ))}
    </div>
);}
export default AllEquipment;

