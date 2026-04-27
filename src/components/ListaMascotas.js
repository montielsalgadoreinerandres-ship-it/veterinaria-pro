import MascotaCard from "./MascotaCard";

const ListaMascotas = ({ mascotas, eliminarMascota }) => {
  return (
    <div className="grid">
      {mascotas.map(m => (
        <MascotaCard 
          key={m.id}
          mascota={m}
          eliminarMascota={eliminarMascota}
        />
      ))}
    </div>
  );
};

export default ListaMascotas;
