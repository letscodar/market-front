import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ProductCard from "../components/ProductCard";

export default {
  title: `Let's Market/ProductCard`,
  component: ProductCard,
};

const Template = (args) => (
  <Router>
    <ProductCard {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  product: {
    id: "001",
    name: "TV Samsung",
    slug: "tv-samsung",
    description: "TV Samsung de várias polegadas",
    price: 1899.99,
    img:
      "https://a-static.mlcdn.com.br/280x210/smart-tv-50-crystal-4k-samsung-50au7700-wi-fi-bluetooth-hdr-alexa-built-in-3-hdmi-1-usb/magazineluiza/193441200/d5d03c49e9e9f5e24f15516131a87d63.jpg",
  },
};
