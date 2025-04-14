import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { id: 1, title: "Consumer Electronics", value: "consumer_electronics" },
    { id: 2, title: "Home products", value: "home_products" },
    { id: 3, title: "Tool & hardware", value: "tool_hardware" },
    {
      id: 4,
      title: "Computers & Accessories",
      value: "computers_accessories",
    },
    { id: 5, title: "Gaming accessories", value: "gaming_accessories" },
    { id: 6, title: "Electronics", value: "electronics" },
  ]);

  return (
    <MyContext.Provider value={{ categories }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
