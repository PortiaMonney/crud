const { Router } = require("express");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

const postRouter = Router();
postRouter.route("/").get(getAllPosts)
                    .post(createPost);
postRouter.route("/:postId")
        .get(getSinglePost)
        .patch(updatePost)
        .delete(deletePost);



module.exports = postRouter;
