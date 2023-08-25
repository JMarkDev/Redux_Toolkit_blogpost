import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    console.log(post)
    
    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

  return (
    <article>
    <h3 className="post_title">{post.title}</h3>
    <p className="post_content">{post.body.substring(0, 100)}</p>
    <p className="post_credit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} /> 
    </p>
    <ReactionBtn post={post} />
</article>
  )
}

export default SinglePostPage
