import './App.css'
import AppRouter from './router'
import store2 from './store2'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store2}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
