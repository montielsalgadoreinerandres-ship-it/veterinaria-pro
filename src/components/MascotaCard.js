import { useEffect, useState } from "react";

const MascotaCard = ({ mascota, eliminarMascota }) => {
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setImagen(data.message));
  }, []);

  return (
    <div className="card">
      <img src={imagen} alt="perro" />

      <h3>{mascota.nombre}</h3>
      <p>Dueño: {mascota.dueno}</p>

      <button onClick={() => eliminarMascota(mascota.id)}>
        ❌ Eliminar
      </button>
    </div>
  );
};

export default MascotaCard;
