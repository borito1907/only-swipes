import { Routes, Route } from 'react-router-dom';

import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';

import ListingPage from './pages/ListingPage';
import ChatRoomsPage from './pages/ChatRooms';
import ProfilePage from './pages/Profile';
import SignInPage from './pages/SignIn';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div><Navbar /></div>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/chatrooms" element={<ChatRoomsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
