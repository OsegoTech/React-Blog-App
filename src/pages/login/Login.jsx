import "./login.css"

export default function Login(){
    return(
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your Email"/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    )
}
