import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "4a0602dd97bc4f9794f27ece073a6aff"; // Replace with your NewsAPI key
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(NEWS_API_URL);
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <p className="loading-message">Loading news...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="page-container">
      <div className="profile-button-container">
        <Link to="/profile" className="profile-button">👤 Profile</Link>
        <Link to="/login" className="profile-button" style={{ marginLeft: "10px" }}>🔐 Login</Link>
      </div>

      <h1 className="page-title">Latest Tech News</h1>

      <div className="articles-grid">
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
    </div>
  );
}

export default Home;
