import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostExcerpt = ({post}) => {
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
  post : propTypes.object.isRequired
}

export default PostExcerpt
