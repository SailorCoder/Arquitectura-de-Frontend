import React from "react";
import { dataContexto } from "../dataContexto";
import { AppContext, AppProvider } from "./contexto/appContext";

export default function Lamda() {
  return <div className="componente nivel5">Lamda {dataContexto.lambda}</div>;
}
