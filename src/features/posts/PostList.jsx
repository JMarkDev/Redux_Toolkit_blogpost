import { useSelector} from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import '../../index.css'
import PostExcerpt from "./PostExcerpt";
import SpinnerTemp from "./SpinnerTemp";

const PostList = () => {

    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postStatus === 'loading') {
        content =  <SpinnerTemp />
    } else if(postStatus === 'succeeded') { 
        content = orderedPostIds.map(postId => (
            <PostExcerpt key={postId} postId={postId} />
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
