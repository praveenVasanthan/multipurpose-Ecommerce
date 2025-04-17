import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [themecolour, setThemeColour] = useState({
    primary: "#ff3d3d",
    secondary: "#004ec3",
  });
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

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary",
      themecolour.primary
    );
    document.documentElement.style.setProperty(
      "--secondary",
      themecolour.secondary
    );
  }, [themecolour]);

  return (
    <MyContext.Provider value={{ categories }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
