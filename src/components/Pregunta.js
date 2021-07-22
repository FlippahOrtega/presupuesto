import React, { useState } from "react";
import Error from "./Error";
import Proptypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //error validate
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setMostrarPregunta: Proptypes.func.isRequired,
  setRestante: Proptypes.func.isRequired,
  setPresupuesto: Proptypes.func.isRequired,
};
export default Pregunta;
