
export async function GetUsers(userName) {

    const data = {
        username: userName
    }
    const JSONData = JSON.stringify(data)
    const endpoint = 'api/users'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSONData
    }

    // need to handle non 200 response
    const response = await fetch(endpoint, options)
    const result = await response.json()

    return result
}