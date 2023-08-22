import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import propTypes from 'prop-types'
import '../../index.css'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

const ReactionBtn = ({ post }) => {
    ReactionBtn.propTypes = {
        post: propTypes.object.isRequired
    }

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reaction_btn"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    
    return <div>{reactionButtons}</div>
}

export default ReactionBtn
