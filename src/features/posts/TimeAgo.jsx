import { parseISO, formatDistanceToNow } from 'date-fns'
import propTypes from 'prop-types'

const TimeAgo = ({ timestamp}) => {
    TimeAgo.propTypes = {
        timestamp: propTypes.string.isRequired
    }

    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo
