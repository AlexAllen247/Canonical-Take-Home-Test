import "./App.scss";
import { useEffect, useState } from "react";
import postService from "./services/post";
import PostList from "./components/PostList";

const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getAll().then((post) => setPost(post));
  }, []);

  return (
    <div className="App">
      <div className="row u-equal-height u-clearfix">
        {post ? (
          <PostList posts={post} />
        ) : (
          <h1 className="u-align--center">Loading blog posts...</h1>
        )}
      </div>
    </div>
  );
};

export default App;
