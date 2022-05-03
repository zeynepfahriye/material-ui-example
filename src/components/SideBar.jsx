import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText ,Switch} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import React from "react";

const SideBar = ({mode,setMode}) => {
  return (
      //sx kısmında breakpoint kullanıldı ekran küçülme durumları için
    <Box  flex={1} p={2} sx={{display:{xs:'none',sm:'block',}}}>
      <Box position='fixed'>
      <List>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText  primary='HomePage'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#page'>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText  primary='Pages'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#group'>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText  primary='Groups'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#market'>
                    <ListItemIcon>
                        < StorefrontIcon/>
                    </ListItemIcon>
                    <ListItemText  primary='Marketplace'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#friend'>
                    <ListItemIcon>
                        < PersonIcon/>
                    </ListItemIcon>
                    <ListItemText  primary='Friends'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#setting'>
                    <ListItemIcon>
                        < SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText  primary='Settings'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#profile'>
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText  primary='Profile'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#profile'>
                    <ListItemIcon>
                        <Brightness6Icon/>
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode==='light'?'dark':'light')}/>
                </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
};

export default SideBar;
