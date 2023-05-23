import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from "./UsersList";
import AlbumsList from "./AlbumsList";
import PhotosList from "./PhotosList";

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