import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import propTypes from 'prop-types'

const PostAuthor = ({ userId }) => {
    
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <span> by {author ? author.name : 'Unknown author'}</span>
}

PostAuthor.propTypes = {
    userId: propTypes.number
}

export default PostAuthor
