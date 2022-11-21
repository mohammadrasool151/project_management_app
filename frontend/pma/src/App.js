import './App.css';
import { Home } from './MyComponents/Home';
import { Login } from './MyComponents/Login';
import { Register } from './MyComponents/Register';
import { SubTopic } from './MyComponents/SubTopic';
import { Topic } from './MyComponents/Topic';
import { Welcome } from './MyComponents/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";



function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path="/" >

          <Welcome />

        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>


      </Switch>




      {/* <Home/> */}
      {/* <RightHead/> */}
      {/* <Navbar/> */}
      {/* <Topic/> */}
      {/* <SubTopic/> */}
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
