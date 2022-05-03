import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  styled,
  Toolbar,
  Typography,
  MenuItem
} from "@mui/material";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
      
    <AppBar position="sticky"  >
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MaterialUI
        </Typography>
        <EmojiEmotionsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="search..." />
        </SearchBar>
        <Icons>
          <Badge badgeContent={3} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         onClick={e=>setOpen(true)}
         />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography>Zeynep Çakır</Typography>
        </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
