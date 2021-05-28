import React, { useContext } from "react";
import { dataContexto } from "../dataContexto";
import { AppContext, AppProvider } from "./contexto/appContext";

export default function Beta() {
  console.log(dataContexto);
  const { dataContexto } = useContext(AppContext);
  return <div className="componente nivel2">Beta {dataContexto.beta}</div>;
}
