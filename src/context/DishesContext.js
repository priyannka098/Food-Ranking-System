import React, { createContext, useContext, useState, useEffect } from "react";

const DishesContext = createContext({});

export const DishesContextProvider = ({ children }) => {
  
    const [username, setUsername] = useState("");

//   useEffect(() => {
//     const fetchAPI = async () => {
//       const data = await getDish();
//       setDishes(data);
//     };
//     fetchAPI();
//   }, []);

  return (
    <DishesContext.Provider value={{ username, setUsername }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => useContext(DishesContext);