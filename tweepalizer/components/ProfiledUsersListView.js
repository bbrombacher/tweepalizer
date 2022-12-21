import useUser from '../hooks/useUser';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProfiledUsersListView() {
    const [userName, setUserName] = useState("")
    const users = useUser(userName)

    return (
        <>
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    setUserName(event.target.username.value)
                }} method='post'>
                    <label htmlFor='username'> search for user </label>
                    <input type='text' id='username' name='username' />
                    <button type='submit'> submit </button>
                </form>
            </div>
            <div>
                <UserList userList={users} />
            </div>
        </>
    )
}


function UserList({ userList }) {
    return <>
        {
            userList.map((user) => (
                <div>
                    <Link key={user.name} href={{
                        pathname: '/users/[slug]',
                        query: {
                            slug: user.name
                        }
                    }}> {user.name} </Link>
                </div>
            ))
        }
    </>
}
