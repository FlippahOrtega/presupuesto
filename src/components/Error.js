import React from "react";
import Proptypes from "prop-types";

const Error = ({ mensaje }) => {
  return <p className="alert alert-danger error">{mensaje}</p>;
};
Error.propTypes = {
  mensaje: Proptypes.string.isRequired,
};
export default Error;
