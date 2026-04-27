import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaMascotas from "./components/ListaMascotas";
import "./App.css";

function App() {
  const [mascotas, setMascotas] = useState([]);

  const agregarMascota = (mascota) => {
    setMascotas([...mascotas, mascota]);
  };

  const eliminarMascota = (id) => {
    setMascotas(mascotas.filter(m => m.id !== id));
  };

  return (
    <div className="container">
      <h1>🐶 Veterinaria PRO</h1>

      <Formulario agregarMascota={agregarMascota} />

      <ListaMascotas 
        mascotas={mascotas} 
        eliminarMascota={eliminarMascota}
      />
    </div>
  );
}

export default App;
