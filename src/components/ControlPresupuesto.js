import React from "react";
import { revisarPresupuesto } from "./../helper/helpers";
import Proptypes from "prop-types";

const ControlPresupuesto = ({ Restante, Presupuesto }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {Presupuesto}</div>
      <div className={revisarPresupuesto(Presupuesto, Restante)}>
        Restante: $ {Restante}
      </div>
    </>
  );
};

ControlPresupuesto.propTypes = {
  Restante: Proptypes.number.isRequired,
  Presupuesto: Proptypes.number.isRequired,
};
export default ControlPresupuesto;
