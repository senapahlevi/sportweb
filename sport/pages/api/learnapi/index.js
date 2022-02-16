import { comments } from "../../../learndataapi/comments";

//you can access like these http://localhost:3000/api/learnapi/commento
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const posting = req.body.posting; //ini posting refer ke stringify yg ada posting
    const newComment = {
      id: Date.now(),
      text: posting,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
