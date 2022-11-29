import Moment from "react-moment";

const Post = ({ post }) => {
  return (
    <div className="col-4 p-card--highlighted u-no-padding">
      <header className="p-card__header padded">
        <h5 class="p-heading--5 uppercase">Cloud and Server</h5>
      </header>
      <div className="p-card__content canon-card__content">
        <div className="u-crop--16-9">
          <img
            className="p-card__image"
            src={post.featured_media}
            alt={post.title.rendered}
          />
        </div>
        <h3 className="p-card__title p-heading--4">
          <a href={post.link}>{post.title.rendered}</a>
        </h3>
        <p className="p-heading--5">
          <em>
            By{" "}
            <a href={post._embedded.author[0].link}>
              {post._embedded.author[0].name}
            </a>{" "}
            on <Moment format="DD MMMM YYYY" date={post.date} />
          </em>
        </p>
      </div>
      <p className="p-card__footer">Article</p>
    </div>
  );
};

export default Post;
