import React, { createContext } from "react";
import { dataContexto } from "../../dataContexto.js";

export const AppContext = createContext();

export const AppProvider = (props) => {
  return (
    <AppContext.Provider value={{ dataContexto }}>
      {props.children}
    </AppContext.Provider>
  );
};
