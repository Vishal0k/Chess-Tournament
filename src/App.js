// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewItem from './components/ViewItem';
import './App.css';
import AddMatchForm from './components/AddItem';
import PlayerWinPercentage from './components/PlayerWinPercentage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-match" element={<AddMatchForm />} />
                        <Route path="/player-by-country" element={<ViewItem />} />
                        <Route path="/player-win-percentage" element={<PlayerWinPercentage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
