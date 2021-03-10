import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import MyPokemon from "./components/MyPokemon/MyPokemon";

function App() {
    // list menu item
    let menuItem = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "My Pokemon",
            route: "/my-pokemon",
        },
    ];

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    children={<Home menuItem={menuItem} active="Home" />}
                />
                <Route
                    exact
                    path="/my-pokemon"
                    children={
                        <MyPokemon menuItem={menuItem} active="My Pokemon" />
                    }
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
