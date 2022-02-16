import { comments } from "../../../learndataapi/comments";
//you can access like these http://localhost:3000/api/learnapi/commento
export default function handler(req, res) {
  res.status(200).json(comments);
}
