import React, { useState } from "react";
import axios from "axios";
import "./Job.css";
const Api = import.meta.env.VITE_REACT_APP_URL;

const UpdateJob = ({setEdit, refreshUserData}) => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedWorkOption, setSelectedWorkOption] = useState("");
  const [selectedCultureType, setSelectedCultureType] = useState("");
  const Editclose = () => {
    setEdit(true);
  };

  const jobData = {
    "Área de interés": {
      "Áreas humanas": "../../../images/Frame2.png",
      "Áreas Financieras": "../../../images/Frame4.png",
      "Áreas Comerciales": "../../../images/Frame5.png",
      "Áreas de Logística": "../../../images/Frame6.png",
      "Genérica": "../../../images/Frame7.png",
    },
    "Opciones de jornada": {
      "Presencial": "../../../images/Frame1.png",
      "Remoto": "../../../images/Frame8.png",
      "Híbrido": "../../../images/Frame9.png",
      "Me es indiferente": "../../../images/Frame10.png",
    },
    "Tipo de cultura": {
      "Emocionales": "../../../images/Frame11.png",
      "Conocimiento": "../../../images/Frame3.png",
      "Remoto": "../../../images/Frame12.png",
      "Producción": "../../../images/Frame13.png",
      "Intuitiva": "../../../images/Frame15.png",
      "Me es indiferente": "../../../images/Frame4.png",
    },
  };

  // Función para manejar la selección de una opción
  const handleSelection = (section, option) => {
    if (section === "Opciones de jornada") {
      setSelectedWorkOption(option);
    } else if (section === "Área de interés") {
      setSelectedJobType(option);
    } else if (section === "Tipo de cultura") {
      setSelectedCultureType(option);
    }
  };

  const handleSave = () => {
    if (!selectedJobType || !selectedWorkOption || !selectedCultureType) {
      alert("Por favor, selecciona una opción de cada categoría antes de guardar.");
      return;
    }

    const payload = {
      jobType: selectedJobType,
      workOption: selectedWorkOption,
      cultureType: selectedCultureType,
      userId: 1, // Cambia según tu lógica
    };
    axios.put(`${Api}work/1`, payload)
    .then(res => {
      alert("Actualizado")
      setEdit(true)
      refreshUserData(res.data)
    })
    .catch(err => console.log(err))
       
  };

  return (
    <section className="Job__Update">
      <div className="Job__Update-jobs">
        {Object.entries(jobData).map(([sectionTitle, options]) => (
          <article className="Job__Update-article" key={sectionTitle}>
            <h1 className="Job__Update-article-title">{sectionTitle}</h1>
            <div>
              {Object.entries(options).map(([option, imgSrc]) => (
                <div
                  className={`Job__Update-div`}
                  tabIndex="0"
                  key={option}
                  onClick={() => handleSelection(sectionTitle, option)} // Selección de opción
                  style={{ cursor: "pointer" }}
                >
                  <img  className={`Job__figure ${
                    (sectionTitle === "Opciones de jornada" && selectedWorkOption === option) ||
                    (sectionTitle === "Área de interés" && selectedJobType === option) ||
                    (sectionTitle === "Tipo de cultura" && selectedCultureType === option)
                      ? "selected"
                      : ""
                  }`} src={imgSrc} alt={option} />
                  <h1 className="Job__Update-h1">{option}</h1>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="Job__update-btn">
        <button onClick={Editclose}>Cancelar</button>
        <button onClick={handleSave}>Guardar</button>
      </div>
    </section>
  );
};

export default UpdateJob;
