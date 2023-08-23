import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
import propTypes from 'prop-types'

const PostExcerpt = ({post}) => {
  return (
    <article>
    <h3 className="post_title">{post.title}</h3>
    <p className="post_content">{post.body.substring(0, 100)}</p>
    <p className="post_credit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
    </p>
    <ReactionBtn post={post} />
</article>
  )
}

PostExcerpt.propTypes = {
  post : propTypes.object.isRequired
}

export default PostExcerpt
