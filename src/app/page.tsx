import Box from "@mui/material/Box";
import React from "react";
import Card from "../../components/Card";



export default function page() {
  return (
    <Box 
      className="container"
    sx={{backgroundColor: "#141414", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card />
    </Box>
  )
}
