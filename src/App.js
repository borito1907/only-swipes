import { Routes, Route } from 'react-router-dom';

import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/Home';
import ChatRoomsPage from './pages/ChatRooms';
import ProfilePage from './pages/Profile';

// Authentication
import { AuthContextProvider } from './components/Authentication/context/AuthContext';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import SignIn from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Account from './components/Authentication/Account';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div><Navbar /></div>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chatrooms" element={<ChatRoomsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/account' element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
                }/>
            </Routes>
          </AuthContextProvider>
      </div>
    );
  }  
}

export default App;
