import { useSelector} from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postSlice";
import '../../index.css'
import PostExcerpt from "./PostExcerpt";
import SpinnerTemp from "./SpinnerTemp";

const PostList = () => {

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postStatus === 'loading') {
        content =  <SpinnerTemp />
    } else if(postStatus === 'succeeded') { 
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => (
            <PostExcerpt key={post.id} post={post} />
        ))
    } else if(postStatus === 'failed') {
        content = <p>{error}</p>
    }


  return (
    <section> 
        <div className="post_list">
         {content}
        </div>
    </section>
  )
}

export default PostList
