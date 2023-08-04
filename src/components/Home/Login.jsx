export const Login = () => {
    const Signin = (e) => {
        e.preventDefault()
        const str = `${import.meta.env.VITE_SERVER_URL}/auth/google`
        window.open(str, '_self')
    }
    return (
        
        <form onSubmit={Signin}>
            <div>
                <h2>FoodieFriends</h2>
                <sub>Try good food with good friends</sub>
            </div>
            <button >
                Sign in with Google
            </button>
            
        </form>
    )
};

export default Login;