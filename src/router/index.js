import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layouts/default'
import Home from '../pages/Home'
import Counter from '../pages/Counter'
import Counter2 from '../pages/Counter2'
import Counter3 from '../pages/Counter3'

// JSX 语法定义路由的方式
const ElementRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="counter2" element={<Counter2 />} />
          <Route path="counter3" element={<Counter3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default ElementRouter
