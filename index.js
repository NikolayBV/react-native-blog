import {View} from 'react-native';
import React from "react";
import store from "./src/store/index.ts";
import {Provider} from "react-redux";
import App from "./App.tsx";
import {registerRootComponent} from "expo";

const myApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

registerRootComponent(myApp);