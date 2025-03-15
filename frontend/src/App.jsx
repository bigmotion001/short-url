import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import  { Toaster } from "react-hot-toast";


function App() {
  

  return (
    <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<HomePage/>} />
   </Routes>
   <Toaster />
    </>
  )
}

export default App
