import { GetUsers } from '../clients/users'
import React, { useEffect, useState } from 'react';

export default function ProfiledUsersListView({ initialUserData }) {
    console.log('ProfiledUsersListView executed')
    const [usersInState, setUsersInState] = useState(initialUserData)

    return (
        <>
            <div>
                <form onSubmit={async (event) => {
                    event.preventDefault()
                    const userName = event.target.username.value
                    const result = await GetUsers(userName)
                    setUsersInState(result.users)
                }} method='post'>
                    <label htmlFor='username'> search for user </label>
                    <input type='text' id='username' name='username' required />
                    <button type='submit'> submit </button>
                </form>
            </div>
            <div>
                <UserList users={usersInState} />
            </div>
        </>
    )
}



function UserList({ users }) {
    console.log('UserList executed')
    return <>
        {
            users.map((user) => (
                <div key={user.name} > {user.name} </div>
            ))
        }
    </>
}
