import { Box, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";

export default function SearchBar({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) {
  return (
    <Box className="searchBar-wrap">
      <Box component="form" onSubmit={formSubmit}>
        <Box
          component="input"
          type="text"
          placeholder="Search categories"
          value={value}
          onChange={handleSearchKey}
        />
        {value && (
          <span onClick={clearSearch}>
            <ClearIcon />
          </span>
        )}
        <Box className="submit">
          <Box component="button">Submit</Box>
        </Box>
      </Box>
    </Box>
  );
}
