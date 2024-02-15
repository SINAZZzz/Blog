import { useState } from "react";
// mui
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
// config
import { blogList } from "../../config/data.js";
// component
import Header from "../../components/header/Header.tsx";
import SearchBar from "../../components/search/SearchBar.jsx";
import Loading from "../../components/loading/Loading.jsx";
import BlogList from "../../components/blogList/BlogList.jsx";
//
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  boxShadow: 24,
  p: 4,
  color: "white",
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Or send the data to your backend
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="div">
        <div>
          <Button onClick={handleOpen} variant="outlined">
            Sign Up
          </Button>
        </div>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        {/* modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            borderRadius="20px"
            bgcolor="darkgrey"
          >
            {/* <Container maxWidth="sm"> */}
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="First Name"
                name="firstName"
                variant="filled"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Last Name"
                name="lastName"
                variant="filled"
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="hidden"
                name="email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                name="password"
                variant="filled"
                value={formData.password}
                onChange={handleChange}
              />
              <Typography sx={{ cursor: "pointer" }}>Login</Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>
            </form>
            {/* </Container> */}
          </Box>
        </Modal>
        <Header />
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {!blogs.length ? <Loading /> : <BlogList blogs={blogs} />}
      </Box>
    </ThemeProvider>
  );
};

export default Home;
