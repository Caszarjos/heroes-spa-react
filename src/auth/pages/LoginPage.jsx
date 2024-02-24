import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context";

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  // inicializamos valores del hook
  const navigate = useNavigate();

  const onLogin = () => {
    login('Jose Zarate');

    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-gray mt-5" onClick={ onLogin } >Login</button>
    </div>
  )
}
