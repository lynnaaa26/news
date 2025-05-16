// ✅ src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "4a0602dd97bc4f9794f27ece073a6aff";
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(NEWS_API_URL);
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="page-container">
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link
          to="/profile"
          style={{
            color: "#ff4da6",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1rem",
            border: "2px solid #ff4da6",
            padding: "6px 12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Profile
        </Link>
      </div>
      <h1 className="page-title">Latest Tech News</h1>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          article={{
            id: index,
            title: article.title,
            summary: article.description,
            url: article.url,
            imageUrl: article.urlToImage,
            publishedAt: article.publishedAt,
            source: article.source.name,
          }}
        />
      ))}
    </div>
  );
}

export default Home;