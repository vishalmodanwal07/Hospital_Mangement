import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import './App.css'
import Layout from "./components/Layout";
import About from "./pages/About";
import { Registration } from "./pages/Registration";

function App() {
  

  return (
  <>
     <Router>
      <Routes>
        <Route path ="/" element={<About/>}/>
        <Route path ="/register" element={<Registration/>}/>
      </Routes>

     </Router>
  </>
  )
}

export default App
