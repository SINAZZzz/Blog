import React from "react";
import Box from "@mui/material/Box";
import "./loading.css";

export default function Loading() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      <Box component="div" sx={{ fontWeight: "700", fontSize: "larger" }}>
        <Box component="p">Not Found...</Box>
      </Box>
      <Box component="div" className="loading-child">
        <Box component="div" id="square1"></Box>
        <Box component="div" id="square2"></Box>
        <Box component="div" id="square3"></Box>
        <Box component="div" id="square4"></Box>
        <Box component="div" id="square5"></Box>
      </Box>
    </Box>
  );
}
