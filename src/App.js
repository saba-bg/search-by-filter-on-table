import React from "react";
import { Switch, Route } from "react-router-dom";
import UserPage from "./layout/UserPage";
import { SearchContexProvider } from "./Contex/SearchContex";
import "./scss/main.scss";

function App() {
  return (
    <div>
      <SearchContexProvider>
        <Switch>
          <Route exact path="/" component={UserPage} />
        </Switch>
      </SearchContexProvider>
    </div>
  );
}

export default App;
