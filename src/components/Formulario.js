import React, { useState } from 'react';

const Formulario = ({ agregarMascota }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '',
    raza: '',
    edad: '',
    propietario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.especie && formData.propietario) {
      agregarMascota({
        ...formData,
        id: Date.now()
      });
      setFormData({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        propietario: ''
      });
    } else {
      alert('Por favor completa los campos obligatorios');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="formulario-header">
        <h2>🐾 Registrar Nueva Mascota 🐾</h2>
        <p className="subtitulo">¡Bienvenido a la familia veterinaria!</p>
      </div>
      
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">🐶 Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Max, Luna, Félix..."
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="especie">🦴 Especie *</label>
            <input
              type="text"
              id="especie"
              name="especie"
              placeholder="Ej: Perro, Gato, Conejo..."
              value={formData.especie}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="raza">🎀 Raza</label>
            <input
              type="text"
              id="raza"
              name="raza"
              placeholder="Ej: Labrador, Persa, Angora..."
              value={formData.raza}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edad">📅 Edad</label>
            <input
              type="text"
              id="edad"
              name="edad"
              placeholder="Ej: 2 años, 6 meses..."
              value={formData.edad}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="propietario">👤 Propietario *</label>
          <input
            type="text"
            id="propietario"
            name="propietario"
            placeholder="Nombre del dueño..."
            value={formData.propietario}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-registrar">✨ Registrar Mascota ✨</button>
    </form>
  );
};

export default Formulario;
