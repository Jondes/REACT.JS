import * as React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <h2 className="mb-3">React Redirect to Page with Navigate API Example</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
export default App