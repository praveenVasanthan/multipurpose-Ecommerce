import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Consumer Electronics",
      value: "consumer_electronics",
      subcategories: [
        {
          id: 1,
          subTitle: "Laptops",
          subValue: "laptops",
        },

        {
          id: 2,
          subTitle: "Mobiles",
          subValue: "mobiles",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
    {
      id: 2,
      title: "Home products",
      value: "home_products",
      subcategories: [
        {
          id: 1,
          subTitle: "Sofa",
          subValue: "sofa",
        },

        {
          id: 2,
          subTitle: "Doors",
          subValue: "doors",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
    {
      id: 3,
      title: "Tool & hardware",
      value: "tool_hardware",
      subcategories: [
        {
          id: 1,
          subTitle: "Laptops",
          subValue: "laptops",
        },

        {
          id: 2,
          subTitle: "Mobiles",
          subValue: "mobiles",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
    {
      id: 4,
      title: "Computers & Accessories",
      value: "computers_accessories",
      subcategories: [
        {
          id: 1,
          subTitle: "Laptops",
          subValue: "laptops",
        },

        {
          id: 2,
          subTitle: "Mobiles",
          subValue: "mobiles",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
    {
      id: 5,
      title: "Gaming accessories",
      value: "gaming_accessories",
      subcategories: [
        {
          id: 1,
          subTitle: "Laptops",
          subValue: "laptops",
        },

        {
          id: 2,
          subTitle: "Mobiles",
          subValue: "mobiles",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
    {
      id: 6,
      title: "Electronics",
      value: "electronics",
      subcategories: [
        {
          id: 1,
          subTitle: "Laptops",
          subValue: "laptops",
        },

        {
          id: 2,
          subTitle: "Mobiles",
          subValue: "mobiles",
        },
        {
          id: 3,
          subTitle: "TV",
          subValue: "tv",
        },
      ],
    },
  ]);

  return (
    <MyContext.Provider value={{ categories }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
