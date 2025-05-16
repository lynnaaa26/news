// ✅ src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

