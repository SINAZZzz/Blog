import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Profile from "./pages/profile/Profile";
import AppContextProvider from "./context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </AppContextProvider>
  );
}
