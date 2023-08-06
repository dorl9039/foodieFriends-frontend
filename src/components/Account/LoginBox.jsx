export const LoginBox = () => {

    const Signin = (e) => {
        e.preventDefault()
        const str = `${import.meta.env.VITE_SERVER_URL}/auth/google`
        window.open(str, '_self')
    }
    return (

        <form onSubmit={Signin}>
            <div>
                <h2>FoodieFriends</h2>
                <sub>Track the restaurants you want to try out, and find friends to go with you!</sub>
            </div>
            <button >
                Sign in or register
            </button>
            
        </form>
    )
};

export default LoginBox;