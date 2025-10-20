import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();

  res.status(200).json(posts);
};

// @desc    add new post
// @route   POST /api/posts
// @access  public(should be authorized user)
export const addPost = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    throw new Error("Title and Body are required");
  }

  try {
    const post = await Post.create({
      title,
      body,
    });
    res.status(201).json({ message: "new post has been added", post });
  } catch (error) {
    res.status(500).json({ message: "failed to add new post" });
  }
};

// @desc    delete post by id
// @route   delete /api/posts/:id
// @access  public(should be authorized user)
export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);

    if (!post) {
      throw new Error("post is not found");
    }

    await post.deleteOne();
    res.status(200).json({ message: "post has been deleted" });
  } catch (error) {
    res.status(401).json({ message: "failed to delete post" });
  }
};

export const updatePost = async (req, res) => {
  const { title, body } = req.body;
  const id = req.params.id;

  if (!title || !body) {
    throw new Error("Title and Body are required");
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      throw new Error("post is not found");
    }

    await post.updateOne({ title, body });
    res.status(200).json({ message: "post has been updated" });
  } catch (error) {
    res.status(500).json({ message: "failed to update post" });
  }
};
