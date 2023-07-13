import './App.css';
import Home from './pages/Home';
import AppContext from './context/AppContext';
import UpperNavbar from './components/UpperNavbar';
import SearchResults from './pages/SearchResults'
import {Routes,Route} from 'react-router-dom'
import VideoDetails from './pages/VideoDetails';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ChannelDetails from './pages/ChannelDetails';
import ShortVideos from './pages/ShortVideos'
import PlaylistDetails from './pages/PlaylistDetails'
import BottomNavbar from './components/BottomNavbar';
import Trending from './pages/Trending';
import TreasureHunt from './pages/TreasureHunt';

function App() {
  const location = useLocation();

  useEffect(()=>{},[location])

  return (
     <> 
       <AppContext>
             <UpperNavbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='searchResults/:query' element={<SearchResults/>} />
                <Route path='video/:id/:cid' element={<VideoDetails />}/>
                <Route path='channelDetails/:cid' element={<ChannelDetails />}/>
                <Route path='shorts/:id/:cid' element={<ShortVideos/>} />
                <Route path='playlist/:pid' element={ <PlaylistDetails/>} />
                <Route path='trending' element={<Trending />} />
                <Route path='treasure' element={<TreasureHunt/>} />
            </Routes>
            <BottomNavbar />
       </AppContext> 
     </>
  );
}

export default App;
