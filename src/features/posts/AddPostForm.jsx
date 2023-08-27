import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addNewPost } from "./postSlice"
import { selectAllUsers } from "../users/usersSlice"
import '../../index.css'
import { useNavigate } from "react-router-dom"

const AddPostForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)


    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if(canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({title, body: content, userId})).unwrap()
            
                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

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
