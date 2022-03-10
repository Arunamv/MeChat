import React from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import { useStateValue } from '../src/components/StateProvider'
import Login from './components/Login'



const App = () => {
    const [{user} , dispatch]= useStateValue()
    
    return (
        <div className="app">
            {!user ? (
                <Login />
            ):(
            <div className="app_body">
                
                <Router>
                <Sidebar />
                    <Switch>
                   
                        <Route path="/rooms/:roomId">
                      
                      <Chat />
                      </Route>
                      <Route path="/">
                          <Chat />
                      </Route>
                    </Switch>
                </Router>
            </div>
       
            )
        }
          </div>   
    )
}

export default App
