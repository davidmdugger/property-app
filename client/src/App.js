import React from "react";
import store from "./store";
import { Provider } from "react-redux";

// components
import Layout from "./components/Layout/Layout";

export default () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
