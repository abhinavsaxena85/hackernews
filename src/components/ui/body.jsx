import React from "react";
import { Switch, Route } from "react-router-dom";
import News from "./news";
import Comments from "./comments";


export const Main = () => (
  <main className="main-body-container">
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/news/:news_type" component={News} />
        <Route path="/story/:storyId/comments" component={Comments} />
      </Switch>
  </main>
);
