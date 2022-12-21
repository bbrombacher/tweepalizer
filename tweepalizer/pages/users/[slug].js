
export function getServerSideProps({ params }) {

    const user = {
        name: params.slug,
        tweets: 1000
    }

    return {
        props: {
            user: user
        }
    }
}

function UserPage({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.tweets}</p>
        </div>
    )
}

export default UserPage