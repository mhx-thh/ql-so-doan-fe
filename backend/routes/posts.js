const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const PostController = require('../controller/post');

router.post('', checkAuth, PostController.createPost);

router.put("/:id", checkAuth, PostController.updatePost);

router.get('', PostController.getPosts);

router.get('/:id', PostController.getPost)

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
