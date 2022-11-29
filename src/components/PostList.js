import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.slice().map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
