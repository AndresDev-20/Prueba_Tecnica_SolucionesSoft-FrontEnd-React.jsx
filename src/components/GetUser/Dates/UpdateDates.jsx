import React from "react";
import "./Dates.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Api = import.meta.env.VITE_REACT_APP_URL;

const UpdateDates = ({ user, refreshUserData, setOpenDates }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    axios
      .put(`${Api}user/${user.id}`, data)
      .then((res) => {
        alert("Datos guardados");
        setOpenDates(true);
        refreshUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error al guardar los datos");
      });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="Update">
      <div className="Update-group">
        <div className="Update-field">
          <label htmlFor="Rnago">Rango salarial</label>
          <input
            type="text"
            id="Rnago"
            className="Update-input"
            {...register("salaryRange")}
            defaultValue={user.salaryRange}
          />
        </div>
        <div className="Update-field">
          <label htmlFor="profe">Cual es tu nivel profesional</label>
          <input
            type="text"
            id="profe"
            className="Update-input"
            {...register("professionalLevel")}
            defaultValue={user.professionalLevel}
          />
        </div>
      </div>

      <div className="Update-group2">
        <div className="Update-subgroup">
          <div className="Update-field">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              type="text"
              id="fullName"
              className="Update-input"
              {...register("name")}
              defaultValue={`${user.name}`}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="profe">Profesión</label>
            <input
              type="text"
              id="profe"
              className="Update-input"
              {...register("profession")}
              defaultValue={user.profetion}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="specialization">Especialización</label>
            <input
              type="text"
              id="specialization"
              className="Update-input"
              {...register("specialization")}
              defaultValue={user.specialization}
            />
          </div>
        </div>

        <div className="Update-subgroup">
          <div className="Update-field">
            <label htmlFor="documentNumber">Número de documento</label>
            <input
              type="text"
              id="documentNumber"
              className="Update-input"
              {...register("documentNumber")}
              defaultValue={user.documentNumber}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="city">Ciudad de donde buscas empleo</label>
            <input
              type="text"
              id="city"
              className="Update-input"
              {...register("citySearhJoi")}
              defaultValue={user.citySearhJoi}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="travelAvailability">
              ¿Estás dispuesto a trasladarte?
            </label>
            <select
              id="travelAvailability"
              className="Update-input"
              {...register("travelAvailability")}
              defaultValue={user.travelAvailability ? "true" : "false"}
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <div className="Update-subgroup">
          <div className="Update-field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              id="email"
              className="Update-input"
              {...register("email")}
              defaultValue={user.email}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="phone">Número de celular</label>
            <input
              type="text"
              id="phone"
              className="Update-input"
              {...register("phone")}
              defaultValue={user.phone}
            />
          </div>
          <div className="Update-field">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              className="Update-input"
              {...register("linkedin")}
              defaultValue={user.linkedin}
            />
          </div>
        </div>
      </div>

      <div className="Update-field">
        <label htmlFor="personalValue">
          ¿Qué valor agregado le ofreces a una empresa que te contrata? ¿Qué te
          diferencia de otras personas?
        </label>
        <textarea
          id="personalValue"
          {...register("personalValue")}
          defaultValue={user.personalValue}
        />
      </div>

      <div className="Update-group">
        <div className="Update-field">
          <label htmlFor="jobHappiness">
            ¿Qué te hace feliz a nivel laboral?
          </label>
          <input
            type="text"
            id="jobHappiness"
            className="Update-input"
            {...register("jobHappiness")}
            defaultValue={user.jobHappiness}
          />
        </div>
        <div className="Update-field">
          <label htmlFor="professionalTalent">
            ¿Cuál es tu talento profesional?
          </label>
          <input
            type="text"
            id="professionalTalent"
            className="Update-input"
            {...register("professionalTalent")}
            defaultValue={user.professionalTalent}
          />
        </div>
      </div>

      <div className="Update-field">
        <label htmlFor="futureIdeas">
          ¿Qué ideas, proyectos o actividades has implementado que quieras
          contar? / Si no tienes experiencia ¿qué ideas tienes para implementar?
        </label>
        <textarea
          id="futureIdeas"
          {...register("futureIdeas")}
          defaultValue={user.futureIdeas}
        />
      </div>

      <div className="UpdateDates">
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};

export default UpdateDates;
