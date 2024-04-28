import {useEffect, useState } from 'react';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './Pages/Landing';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import FavArtiste from './Pages/Listener/FavArtiste'
import MusicHome from './Pages/Listener/MusicHome';
// import Components from './Pages/Components';
import CreatorBio from './Pages/Listener/CreatorBio';
import Explore from './Pages/Listener/Explore';
import Library from './Pages/Listener/Library';
import CreatorLanding from './Pages/Creator/CreatorLanding';

import CreatorLogin from './Pages/Creator/CreatorLogin';
import PlaylistView from './Pages/Listener/PlaylistView';
import CreatorSignUp from './Pages/Creator/CreatorSignUp';
import CreatorHome from './Pages/Creator/CreatorHome';
import UserRecommendations from './Pages/Creator/UserRecommendations';
import EditProfile from './Pages/Creator/EditProfile';
import CoverUpload from './Pages/Creator/CoverUpload';
import CreatorRecommendations from './Pages/Listener/CreatorRecommendations';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import CreatorProfile from './Pages/Creator/CreatorProfile';
import React from 'react';
import { login, logout } from '../actions/accountActions';


const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkAuthentication = () => {   
    const userData = localStorage.getItem('unCoverUser');
    if(userData !== null) {
      dispatch(login(JSON.parse(userData)));
    }
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  };
  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    setIsLoggedIn(isAuthenticated);
  }, []);
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    dispatch(logout());
    localStorage.removeItem('unCoverUser')
  };
 
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route index path="/" element = {<Landing isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />} />
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/fav-artiste" element={<FavArtiste/>} /> 
        <Route path="/music-home" element={<MusicHome isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>} /> 
        {/* <Route path="/components" element={<Components/>} />  */}
        <Route path="/creator-bio" element={<CreatorBio/>} /> 
        <Route path="/explore" element={<Explore isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> } /> 
        <Route path="/library" element={<Library/>} /> 
        <Route path="/playlist-view" element={<PlaylistView/>} /> 
        <Route path="/currently-playing" element={<CurrentlyPlaying/>} /> 

        {/* Creator Routes */}
        <Route path="/creator-landing"  element={<CreatorLanding isLoggedIn={isLoggedIn}/> } /> 
        <Route path="/creator-login" element={<CreatorLogin setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/creator-signUp" element={<CreatorSignUp/>} /> 
        <Route path="/creator-home" element={<CreatorHome isLoggedIn={isLoggedIn}/>} /> 
        <Route path="/user-recommendations" element={<UserRecommendations/>} /> 
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/profile" element={<CreatorProfile/>} />
        <Route path="/upload-cover" element={<CoverUpload/>} />
        <Route path="/creator-recommendation" element={<CreatorRecommendations/>} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
};
export default App;