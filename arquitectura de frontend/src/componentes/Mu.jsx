import React from "react";
import { dataContexto } from "../dataContexto";
import { AppContext, AppProvider } from "./contexto/appContext";

export default function Mu() {
  return <div className="componente nivel5">Mu {dataContexto.mu}</div>;
}
