import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";
const App = () => {
  //Definir state
  const [Presupuesto, setPresupuesto] = useState(0);
  const [Restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [Gastos, setGastos] = useState([]);
  const [Gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //useEffect actualiza restante

  useEffect(() => {
    //add presupuesto
    if (crearGasto) {
      setGastos([...Gastos, Gasto]);
      //resta del presupuesto actual
      const presupuestoRestante = Restante - Gasto.cantidad;

      setRestante(presupuestoRestante);
      setCrearGasto(false);
    }
  }, [Gasto, crearGasto, Gastos, Restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setCrearGasto={setCrearGasto} setGasto={setGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={Gastos} />
                <ControlPresupuesto
                  Presupuesto={Presupuesto}
                  Restante={Restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
