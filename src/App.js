import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      

    <div className="body">
      <Router>
        <Switch>
        
           <Route path= "/Rooms/:MyId">
           <Sidebar />
           <Chat />
            </Route>
            <Route path= "/"><Sidebar />
              
              </Route>
              
      
      </Switch>
      </Router>
    </div>
      </div>
  );
     
}

export default App;
