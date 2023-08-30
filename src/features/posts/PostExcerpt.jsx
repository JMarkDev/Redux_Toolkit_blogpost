import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

const PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))

  return (
    <article>
    <h3 className="post_title">{post.title}</h3>
    <p className="post_content">{post.body.substring(0, 75)}...</p>
    <p className="post_credit">
        <Link to={`/post/${post.id}`}> View Post </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />  
    </p>
    <div className="reaction">
      <ReactionBtn post={post} />
    </div>
</article>
  )
}

PostExcerpt.propTypes = {
  postId : propTypes.number.isRequired
}

export default PostExcerpt
