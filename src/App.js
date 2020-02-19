import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/resetPassword" component={ResetPassword} />
      </div>
    </Router>
  );
}

export default App;
