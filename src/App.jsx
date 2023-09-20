/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ParentComponent from './components/ParentComponent';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    if (storedIsAuth) {
      setIsAuth(JSON.parse(storedIsAuth));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {isAuth ? (
            <Route path='/*' element={<Home />} />
          ) : (
            <Route path='/*' element={<Login setIsAuth={setIsAuth} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
