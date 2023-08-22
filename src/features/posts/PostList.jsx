import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
import '../../index.css'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3 className="post_title">{post.title}</h3>
            <p className="post_content">{post.content.substring(0, 100)}</p>
            <p className="post_credit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionBtn post={post} />
        </article>
    ))
  return (
    <section> 
        <h2 className="post_heading">Posts</h2>
        <div className="post_list">
         {renderedPosts}
        </div>
    </section>
  )
}

export default PostList
