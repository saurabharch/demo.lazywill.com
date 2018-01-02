import React from "react";
import ReactDOM from "react-dom";
import whatInput from "what-input"; // eslint-disable-line no-unused-vars
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjbgvexpt0hsm0176hz0flrix"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("app"),
  revealEntryBtnOnSplashScreen
);

registerServiceWorker();

function revealEntryBtnOnSplashScreen() {
  let appContainer = document.getElementById("app");
  let splashScreen = document.getElementById("splash");
  let entryButton = splashScreen.querySelector(".entry");
  let loadingIndicator = splashScreen.querySelector(".loading");

  setNewLeftForElement(loadingIndicator, "-50%");
  removeElementAfterTime(loadingIndicator, 2000);

  setNewLeftForElement(entryButton, "50%");

  entryButton.addEventListener("click", function() {
    appContainer.style.display = "block";

    setNewLeftForElement(splashScreen, "-100%");
    removeElementAfterTime(splashScreen, 1100);
  });
}

function setNewLeftForElement(el, left) {
  el.style.left = left;
}

function removeElementAfterTime(el, time) {
  setTimeout(function() {
    el.remove();
  }, time);
}
