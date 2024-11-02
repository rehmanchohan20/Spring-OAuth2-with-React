import React from 'react'
import { FcGoogle} from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
function Home() {
    const googleLogin =() => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google'

    };

    const githubLogin =() => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    };

    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        background: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }

  return (
    <div style={centerStyle}>
        <h1>Welcome To OAuth Demo</h1>
        <button onClick={googleLogin}  style={{margin: "10px", fontSize: "16px", padding: "10px"}}>
            <FcGoogle/> Login with Google
        </button>
        <button onClick={githubLogin}  style={{margin: "10px", fontSize: "16px", padding: "10px"}} >
            <FaGithub/> Login with Github</button>
    </div>
  )
}

export default Home