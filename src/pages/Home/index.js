import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleToCounter = () => {
    navigate('/counter?from=home')
  }

  const handleToCounter2 = () => {
    navigate('/counter2?from=home')
  }

  const handleToCounter3 = () => {
    navigate('/counter3?from=home')
  }

  return (
    <div>
      <h3>Home</h3>
      <button onClick={handleToCounter}> To Counter </button>
      <button onClick={handleToCounter2}> To Counter2 </button>
      <button onClick={handleToCounter3}> To Counter3 </button>
    </div>
  )
}
