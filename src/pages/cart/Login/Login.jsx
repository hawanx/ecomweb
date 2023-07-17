import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="login-container">
      <button className="login-button" onClick={() => loginWithRedirect()}>
        Log In  
      </button>
    </div>
  );
}

export default Login;
