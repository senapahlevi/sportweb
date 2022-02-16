import React, { useState } from "react";

const Komentar = () => {
  const [comments, setComments] = useState([]);
  const [posting, setPosting] = useState(""); //these for POST submit
  //these show or load data
  const fetchCommento = async () => {
    const response = await fetch("/api/learnapi/commento");
    const data = await response.json();
    setComments(data);
  };
  //post new comments/input data to array in api/learnApi/commento
  const submitCommento = async () => {
    const response = await fetch("api/learnapi/commento", {
      method: "POST",
      body: JSON.stringify({ posting }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input type="text" value={posting} onChange={(e) => setPosting(e.target.value)} />
      <button onClick={submitCommento}>Submit posting</button>
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
