import Home from "./pages/home/Home.jsx";
// import Blog from "./pages";
//
import { Box } from "@mui/material";
//
import { Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Box component="div">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </Box>
  );
}
