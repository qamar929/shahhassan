import "./App.css";
import React ,{useState} from 'react'

import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Admin from "./AdminDashboard/Admin";
import Aproducts from "./AdminDashboard/Aproducts";
import Client from "./components/Client";

function App() {

 const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">



    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Client/>}/>
        <Route path="/Admin" element={<Admin/>} /> 
        <Route path="/admin/Product" element={<Aproducts/>}/>


      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
