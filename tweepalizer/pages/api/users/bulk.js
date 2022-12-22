
export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (!req.body) {
            res.status(404).json({ error: 'must include body' })
            return
        }

        // get desired user name to be retrieved from database
        const un = req.body.username

        // mock data
        const users = [
            {
                name: 'fred'
            },
            {
                name: 'brandon'
            },
            {
                name: 'al'
            },
            {
                name: 'katie'
            },
            {
                name: 'joyce'
            }
        ]

        let finalUsers = []
        if (un === "") {
            finalUsers = users
        } else {
            const foundUser = users.find((user) => user.name == un)
            if (!foundUser) {
                finalUsers = []
            } else {
                finalUsers = [foundUser]
            }
        }


        res.status(200).json({ users: finalUsers })
        return
    }
}