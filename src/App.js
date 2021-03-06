import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./componentes/home/Home";
import Home_usuario from "./componentes/home-usuario/Home_usuario";
import Quienes from "./componentes/about_us/Quienes_somos";
import Login from "./componentes/login/Login";
import Controla from "./componentes/controla/Controla";
// import Sidebar from "./componentes/sidebar/Sidebar";
import Administra from "./componentes/administra/Administra";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/home-usuario">
          <Home_usuario />
        </Route>
        <Route path="/quienes-somos">
          <Quienes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/controla">
          <Controla />
        </Route>
        {/* <Route path="/sidebar">
          <Sidebar />
        </Route> */}
        <Route path="/administra">
          <Administra />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
