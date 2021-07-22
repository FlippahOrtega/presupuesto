import React from "react";
import Gasto from "./Gasto";
import Proptypes from "prop-types";
const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((item) => {
        return <Gasto gasto={item} key={item.id} />;
      })}
    </div>
  );
};

Listado.propTypes = {
  gastos: Proptypes.array.isRequired,
};
export default Listado;
