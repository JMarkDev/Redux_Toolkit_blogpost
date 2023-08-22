import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { postAdded } from "./postSlice"
import { selectAllUsers } from "../users/usersSlice"
import '../../index.css'

const AddPostForm = () => {
    
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('')
            setContent('')
        }   
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <div className="create_post">
        <h2 className="title">Add a New Post</h2>
        <form action="">
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" 
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>  
                {usersOption}
            </select>
            <label htmlFor="postContent">Content:</label>
            <textarea 
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <button 
                className="save_btn"
                type="button" 
                onClick={onSavePostClicked}
                disabled={!canSave}
                >Save Post</button>
        </form>
    </div>
  )
}

export default AddPostForm
