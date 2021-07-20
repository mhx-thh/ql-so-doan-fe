const Post = require('../models/post');

exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully! ',
      postId: createdPost.id
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a post failed!"
    })
  });
}

exports.updatePost = (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  })
  Post.updateOne({ _id: req.params.id }, post)
  .then((result) => {
    if(result.n > 0) {
      res.status(200).json({ message: 'Update successful!' });
    } else {
      res.status(401).json({message: "Not authorized!"});
    }

  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't update post!"
    })
  })
}

exports.getPosts = (req, res, next) => {
  Post.find()
    .then((documents) => {
      res.status(200).json({
        message: "Post fetched successfully",
        posts: documents
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      })
    })
}

exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      })
    })
}

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Post deleted! ' });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed!"
      })
    })
}
