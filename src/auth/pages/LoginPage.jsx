import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  // inicializamos valores del hook
  const navigate = useNavigate();

  const onLogin = () => {
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
