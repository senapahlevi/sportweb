import { comments } from "../../../learndataapi/comments";

export default function handler(req, res) {
  //these to show only match id
  const { commentId } = req.query; //these extract
  const posting = comments.find((comment) => comment.id === parseInt(commentId));
  res.status(200).json(posting);
}
