import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Proptypes from "prop-types";

import Error from "./Error";
const Formulario = ({ setGasto, setCrearGasto }) => {
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const saveName = (e) => {
    e.preventDefault();
    setNombre(e.target.value);
  };
  const saveCount = (e) => {
    e.preventDefault();
    setCantidad(parseInt(e.target.value, 10));
  };
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (Cantidad < 1 || isNaN(Cantidad) || Nombre === "") {
      setError(true);
      return;
    }
    // construir gasto
    setError(false);
    const gasto = {
      nombre: Nombre,
      cantidad: Cantidad,
      id: uuid(),
    };

    //pasar al componente
    setGasto(gasto);
    setCrearGasto(true);
    //reset form
    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar tus gasto aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios ó presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={Nombre}
          onChange={saveName}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="1000"
          value={Cantidad}
          onChange={saveCount}
        />
      </div>
      <input
        value="Agregar gasto"
        type="submit"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Formulario.propTypes = {
  setCrearGasto: Proptypes.func.isRequired,
  setGasto: Proptypes.func.isRequired,
};
export default Formulario;
