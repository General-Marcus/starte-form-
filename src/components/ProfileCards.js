import React from "react";

function ProfileCards(props) {
  return (
    <div className="card">
      <div className="textgroup">
        <h3>{Writer.name}</h3>
        <p>{Writer.email}</p>
        <p>{Writer.email}</p>
        <button className="actionBtn">
          <Read></Read>
        </button>
      </div>
    </div>
  );
}

export default ProfileCards;
