import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} style={{ width: "100%", borderRadius: "10px" }} />}
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <Link to={`/article/${article.id}`} state={{ article }} className="read-more">
        Learn More →
      </Link>
    </div>
  );
}

export default ArticleCard;
