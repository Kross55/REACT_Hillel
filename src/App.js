import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from "./ComponentsRouterDom/UsersList";
import AlbumsList from "./ComponentsRouterDom/AlbumsList";
import PhotosList from "./ComponentsRouterDom/PhotosList";

function App() {
  return (
    <Router>
      <Route exact path="/" component={UsersList} />
      <Route path="/albums" component={AlbumsList} />
      <Route path="/photos" component={PhotosList} />
    </Router>
  );
}

export default App;
