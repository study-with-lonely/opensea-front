import './App.css';
import NavBar from "./components/NavBar";
import {Outlet} from "react-router";

function App() {
    return (
        <div className="App" style={{scrollbarWidth: 'thin'}}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default App;
