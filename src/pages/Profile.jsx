import React from "react";

function Profile() {
  const profiles = [
    {
      name: "Sarah Hamzaoui",
      email: "sarahhamz1233@gmail.com",
      bio: "Fashion lover, trend spotter, and content creator."
    },
    {
      name: "Lyna Zerouati",
      email: "lynazerouati4@gmail.com",
      bio: "Beginner developer and love photography."
    },
    {
      name: "Lunalight",
      email: "lunalight65@gmail.com",
      bio: "Gadget geek and software engineer."
    },
    {
      name: "Alice velvet",
      email: "alicevelvetXR@gmail.com",
      bio: "Journalist and tech writer."
    }
  ];

  return (
    <div className="profile-container">
      <h1 className="profile-title">🌸 Recently Visited Accounts 💖</h1>
      {profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <div className="floating-background">
            <div className="floating-icon">💖</div>
            <div className="floating-icon">🌸</div>
            <div className="floating-icon">🧁</div>
            <div className="floating-icon">✨</div>
            <div className="floating-icon">🌼</div>
            <div className="floating-icon">🌷</div>
            <div className="floating-icon">🍰</div>
          </div>
          <h2>{profile.name}</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
