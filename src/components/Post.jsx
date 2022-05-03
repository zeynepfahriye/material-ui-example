import React from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{margin:3}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Hello"
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="30%"
      image='https://images.pexels.com/photos/3665468/pexels-photo-3665468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to
        cook together with your guests. Add 1 cup of frozen peas along with
        the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox  icon ={<FavoriteBorder />} checkedIcon={<FavoriteIcon  sx={{color:'red'}}/>}/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post