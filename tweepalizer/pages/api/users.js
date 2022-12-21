
export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (!req.body) {
            res.status(404).json({ error: 'must include body' })
            return
        }

        // get desired user name to be retrieved from database
        const un = req.body.username

        // mock response
        const resp = {
            users: [
                {
                    name: un
                }
            ]
        }

        res.status(200).json(resp)
        return
    }
}