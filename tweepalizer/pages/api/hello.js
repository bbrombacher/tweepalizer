// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const token = process.env.BEARER_TOKEN;
const endpointURL = "https://api.twitter.com/2/users/by?usernames="

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = req.query;
    const { user_name } = query

    const userInfo = await fetchUser(user_name)
    res.status(200).json(userInfo)
    return
  }
}

async function fetchUser(userName) {
  const response = await fetch(endpointURL+userName, {
      headers: {
        authorization: `Bearer ${token}`
      }
  });

  const data = await response.json()
  return data

}