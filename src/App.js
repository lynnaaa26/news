import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app-container">
      {/* Always show the theme toggle */}
      <div style={{ textAlign: "right", padding: "10px" }}>
        <ThemeToggle />
      </div>

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
