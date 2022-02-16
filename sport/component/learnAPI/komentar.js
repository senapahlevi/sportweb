import React, { useState } from "react";

const Komentar = () => {
  const [comments, setComments] = useState([]);
  //these show or load data
  const fetchCommento = async () => {
    const response = await fetch("/api/learnapi/commento");
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <button onClick={fetchCommento}>load comments here</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>
              {comment.id}
              {comment.text}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Komentar;
