import { Outlet, useNavigate } from 'react-router-dom'

export default function DefaultLayout() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="layout--default">
      <h1>Welcome to React App!</h1>

      <button onClick={goHome}> go home </button>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
