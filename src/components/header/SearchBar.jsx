// import React from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

// export default function SearchBar({
//   formSubmit,
//   value,
//   handleSearchKey,
//   clearSearch,
// }) {
//   return (
//     <Box
//       component="div"
//       sx={{
//         width: "fit-content",
//         backgroundColor: "#f0f0f0",
//         margin: "2.5rem auto 4rem auto",
//         padding: "0.5",
//         borderRadius: "5px",
//       }}
//     >
//       <Box
//         component="form"
//         sx={{ display: "flex", alignItems: "center" }}
//         onSubmit={formSubmit}
//       >
//         <Box
//           component="input"
//           onChange={handleSearchKey}
//           sx={{
//             backgroundColor: "#f0f0f0",
//             width: "40vh",
//             height: "5vh",
//             outline: "none",
//             border: "none",
//             fontSize: "larger",
//           }}
//         />
//         {value && (
//           <Box
//             component="span"
//             sx={{
//               px: " 0.5rem",
//               color: "black",
//               fontWeight: "bolder",
//               cursor: "pointer",
//             }}
//             onClick={clearSearch}
//           >
//             <ClearIcon />
//           </Box>
//         )}
//         <Button variant="contained">Submit</Button>
//       </Box>
//     </Box>
//   );
// }

// SearchBar.js

import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <Box>
      <TextField
        label="Search"
        variant="outlined"
        sx={{ width: "fit-content" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton edge="end" onClick={onClear}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
