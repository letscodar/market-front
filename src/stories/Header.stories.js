import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../app/store";
import { Provider } from "react-redux";

import { Header } from "../components/Header";

export default {
  title: `Let's Market/Header`,
  component: Header,
};

const Template = (args) => (
  <Provider store={store}>
    <Router>
      <Header {...args} />
    </Router>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
