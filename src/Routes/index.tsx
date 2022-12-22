import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../Pages/dashboard"
import { Home } from "../Pages/home"

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}
