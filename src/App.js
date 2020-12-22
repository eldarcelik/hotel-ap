import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SignleRoom/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Footer  from './components/Footer/Footer';
import { RoomProvider } from './Context';
import './App.css';

function App() {
  return (
    <>
    <RoomProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/hotel-ap" component={Home}/>
        <Route exact path="/hotel-ap/rooms" component={Rooms}/>
        <Route exact path="/hotel-ap/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </Router>
    <Footer />
    </RoomProvider>
    </>
  );
}

export default App;
