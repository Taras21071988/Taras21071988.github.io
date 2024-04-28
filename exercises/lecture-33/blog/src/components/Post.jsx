/* eslint-disable react/prop-types */

const Post = ({ post }) => {
  const { title, content, cover, likes } = post;

  return (
    <div className="post__wrapper flex flex-col gap-5 my-8">
      <h2 className="text-2xl">{title}</h2>
      <p>{content}</p>
      <img className="w-64" src={cover} alt={title} />
      <span>
        like: <span>{likes}</span>
      </span>
    </div>
  );
};

export default Post;
