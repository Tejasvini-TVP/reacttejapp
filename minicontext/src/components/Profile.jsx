import React,{useContext} from 'react'
import UserContext  from '../context/UserContext'
import userEvent from '@testing-library/user-event'

function Profile() {
 const {user} = UserContext(UserContext)
 
 if (!user) return <div>please login</div>
 
return <div>Welcome {user.username}</div>}

export default Profile
