import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './home';
import User from './user';

const Webpages = () => {
    return(
    <Router basename="/">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
        </Routes>
    </Router>
    );
};
export default Webpages;