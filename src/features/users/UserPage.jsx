import { useSelector } from "react-redux"
import { selectUserById } from "./usersSlice"
import { selectPostByUser } from ".././posts/postSlice"
import { Link, useParams } from "react-router-dom"
import "../../Styles/Post.css"

const UserPage = () => {
    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))

    const postsForUser = useSelector(state => selectPostByUser(state, Number(userId)))

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

  return (
    <div>
        <section className="postTitle">
            <h2>{user?.name}</h2>

            <ol className="postTitles">{postTitles}</ol>
        </section>
    </div>
  )
}

export default UserPage
