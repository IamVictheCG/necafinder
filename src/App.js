// import { useState} from "react";
import NecaCards from "./NecaCards"
import './App.css';
import Users from "./Users.json"
import members from "./members.json"
function App() {
  return (
    <div className="App">      
      <NecaCards userss={Users}  members={members}/>
    </div>
  );
}

export default App;
