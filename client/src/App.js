import './App.css';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar.js"

function App() {
  return (
    
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path= {["/", "/search"]} component={Search} />
        <Route exact path= "/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
