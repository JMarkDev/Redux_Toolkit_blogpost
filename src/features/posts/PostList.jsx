import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import '../../index.css'
import PostExcerpt from "./PostExcerpt";
import { CButton, CSpinner } from '@coreui/react';

const PostList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if(postStatus === 'loading') {
        content =  <CButton disabled>
                        <CSpinner component="span" size="sm" aria-hidden="true" />
                            Loading...
                    </CButton>
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
        <h2 className="post_heading">Posts</h2>
        <div className="post_list">
         {content}
        </div>
    </section>
  )
}

export default PostList
