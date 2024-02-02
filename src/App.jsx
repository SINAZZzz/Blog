import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
}
