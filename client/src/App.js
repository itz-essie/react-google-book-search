import './App.css';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js"

function App() {
  return (
    
  <Router>
    <div>
      <Navbar/>
      <Header/>
      <Switch>
        <Route exact path= "/" component={Search} />
        <Route exact path= "/saved" componenet={Saved} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
