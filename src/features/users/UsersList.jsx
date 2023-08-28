import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'
import "../../Styles/Post.css"

const UsersList = () => {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map(user => (
      <li key={user.id}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </li>    
    ))

  return (
    <div>
      <section className='renderedUser'>
        <h2 className='user'>Users</h2>

        <ul className='userList'>{renderedUsers}</ul>
      </section>
    </div>
  )
}

export default UsersList
