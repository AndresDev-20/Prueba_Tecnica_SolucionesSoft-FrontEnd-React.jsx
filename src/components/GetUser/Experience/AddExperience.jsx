import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddExperience.css";
const Api = import.meta.env.VITE_REACT_APP_URL;

const AddExperience = ({ setOpen, refreshUserData }) => {
  const { register, handleSubmit, reset } = useForm();
  const [achievements, setAchievements] = useState(
    localStorage.getItem("achievements") || "" // Cargar del localStorage si existe
  );

  const handleAchievementsChange = (e) => {
    const value = e.target.value;
    setAchievements(value);
    localStorage.setItem("achievements", value); // Guardar en localStorage
  };

  const onSubmit = (data) => {
      const payload = {
        position: data.position,
        company: data.company,
        startDate: data.startDate,
        endDate: data.endDate,
        currentlyWorking: data.currentlyWorking === "true",
        userId: 1, 
      };

      axios.post(`${Api}experience`, payload)
      .then(res => {
        refreshUserData(res.data)
        alert("Experiencia laboral añadida con éxito")
      reset()
      setAchievements(""); 
      })
      .catch(err => console.log(err))

      
      localStorage.removeItem("achievements"); // Limpiar localStorage
      setOpen(true); 
   
  };

  return (
    <section className="AddExperience">
      <h1 className="AddExperience__title">Experiencia laboral</h1>
      <form className="AddExperience__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="AddExperience__fields">
          <div className="AddExperience__field">
            <label htmlFor="position">Cargo</label>
            <input
              type="text"
              id="position"
              placeholder="Ingresa aquí..."
              {...register("position", { required: true })}
            />
          </div>
          <div className="AddExperience__field">
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              placeholder="Ingresa aquí..."
              {...register("company", { required: true })}
            />
          </div>
          <div className="AddExperience__field">
            <label htmlFor="start-date">Fecha de inicio</label>
            <input
              type="date"
              id="start-date"
              {...register("startDate", { required: true })}
            />
          </div>
          <div className="AddExperience__field">
            <label htmlFor="end-date">Fecha de terminación</label>
            <input
              type="date"
              id="end-date"
              {...register("endDate", { required: true })}
            />
          </div>
        </div>
        <div className="AddExperience__achievements">
          <label htmlFor="achievements">Menciona 3 principales logros</label>
          <textarea
            id="achievements"
            placeholder="Ingresa tus logros aquí..."
            value={achievements}
            onChange={handleAchievementsChange}
          ></textarea>
        </div>
        <div className="AddExperience__extras">
          <div className="AddExperience__field">
            <label htmlFor="current-job-select">¿Trabajas aquí actualmente?</label>
            <select
              id="current-job-select"
              {...register("currentlyWorking", { required: true })}
            >
              <option value="">Selecciona</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="AddExperience__buttons">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="AddExperience__btn AddExperience__btn--cancel"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="AddExperience__btn AddExperience__btn--submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddExperience;
