import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function ArticleDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const article = state?.article;

  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const viewKey = `views-${id}`;
    const likeKey = `likes-${id}`;
    const dislikeKey = `dislikes-${id}`;
    const commentKey = `comments-${id}`;

    const storedViews = parseInt(localStorage.getItem(viewKey) || "0", 10);
    const storedLikes = parseInt(localStorage.getItem(likeKey) || "0", 10);
    const storedDislikes = parseInt(localStorage.getItem(dislikeKey) || "0", 10);
    const storedComments = JSON.parse(localStorage.getItem(commentKey) || "[]");

    setViews(storedViews + 1);
    setLikes(storedLikes);
    setDislikes(storedDislikes);
    setComments(storedComments);

    localStorage.setItem(viewKey, storedViews + 1);
  }, [id]);

  const handleLike = () => {
    const updated = likes + 1;
    setLikes(updated);
    localStorage.setItem(`likes-${id}`, updated);
  };

  const handleDislike = () => {
    const updated = dislikes + 1;
    setDislikes(updated);
    localStorage.setItem(`dislikes-${id}`, updated);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const updatedComments = [...comments, newComment.trim()];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (!article) return <p>Article not found.</p>;

  return (
    <div className="page-container">
      <h2>{article.title}</h2>
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} style={{ width: "100%", borderRadius: "10px" }} />}
      <p>{article.summary}</p>
      <p><strong>Source:</strong> {article.source}</p>
      <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">🔗 Read full article</a>

      <p style={{ marginTop: "20px" }}>👁️ Views: {views}</p>
      <button onClick={handleLike}>👍 Like ({likes})</button>
      <button onClick={handleDislike} style={{ marginLeft: "10px" }}>👎 Dislike ({dislikes})</button>

      <h3 style={{ marginTop: "30px" }}>Comments ({comments.length})</h3>
      {comments.length === 0 ? <p>No comments yet.</p> : (
        <ul>
          {comments.map((c, i) => <li key={i}>🗨️ {c}</li>)}
        </ul>
      )}

      <form onSubmit={handleCommentSubmit} style={{ marginTop: "20px" }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          placeholder="Write your comment..."
          style={{ width: "100%", padding: "10px" }}
        ></textarea>
        <button type="submit" style={{ marginTop: "10px" }}>Post Comment</button>
      </form>
    </div>
  );
}

export default ArticleDetail;