import { Box } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
      //sx kısmında breakpoint kullanıldı ekran küçülme durumları için
    <Box bgcolor='skyblue' flex={1} p={2} sx={{display:{xs:'none',sm:'block',}}}>Sidebar
    </Box>
  )
};

export default SideBar;
