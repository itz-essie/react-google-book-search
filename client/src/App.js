import './App.css';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js"

function App() {
  console.log("YOU HIT IT!")
  return (
    
  <Router>
    <div>
      <Navbar/>
      <Header/>
      <Switch>
        <Route exact path= {["/", "/search"]} component={Search} />
        <Route exact path= "/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
