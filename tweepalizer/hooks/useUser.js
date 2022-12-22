
import React, { useEffect, useState } from 'react';

export default function useUser(userName) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const data = {
            username: userName
        }
        const JSONData = JSON.stringify(data)
        const endpoint = 'api/users/bulk'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONData
        }

        fetch(endpoint, options)
            .then((res) => res.json())
            .then((data) => setUsers(data.users))
    }, [userName])

    return users
}