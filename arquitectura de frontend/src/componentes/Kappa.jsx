import React from "react";
import { dataContexto } from "../dataContexto";
import { AppContext, AppProvider } from "./contexto/appContext";

export default function Kappa() {
  return <div className="componente nivel5">Kappa {dataContexto.kappa}</div>;
}
