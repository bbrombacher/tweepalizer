
export default function SearchUserForm() {
    // pressing this button should forward
    return (
        <>
            <form action='' method='post'>
                <label htmlFor='username'> search for user </label>
                <input type='text' id='username' name='username' required />
                <button type='submit'> submit </button>
            </form>
        </>
    )
}