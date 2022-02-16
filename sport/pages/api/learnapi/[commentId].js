import { comments } from "../../../learndataapi/comments";

export default function handler(req, res) {
  //these to show only match id
  const { commentId } = req.query; //these extract
  if (req.method === "GET") {
    const posting = comments.find((comment) => comment.id === parseInt(commentId));
    res.status(200).json(posting);
  } else if (req.method === "DELETE") {
    try {
      const deleteposting = comments.find((comment) => comment.id === parseInt(commentId));
      //these for find index and using slice to delete logic array
      const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
      comments.splice(index, 1); //delete only 1
      res.status(200).json(deleteposting);
    } catch (e) {
      console.error("error bagian delete");
    }
  }
}
