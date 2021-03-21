import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalProvider} from "./context/GlobalContext";

// Header
import Header from "./components/layout/header/Header";

// home
import Home from "./views/home/Home";

// details
import Details from "./views/details/Details";

// go to top
import GoToTopBtn from "./components/global/goToTopBtn/GoToTopBtn";

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>

        <div className="App">

          {/* header  */}
          <Header />

          <Switch>
            
            {/* home  */}
            <Route exact path="/" component={Home} />
            
            {/* Details  */}
            <Route exact path="/details/:id" component={Details} />

          </Switch>

          {/* go to top btn  */}
          <GoToTopBtn />

        </div>

      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
