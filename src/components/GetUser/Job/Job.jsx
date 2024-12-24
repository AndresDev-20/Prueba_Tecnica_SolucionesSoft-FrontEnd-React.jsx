import React, { useState } from "react";
import "./Job.css";
import UpdateJob from "./UpdateJob";

const areasImages = {
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

const Job = ({ jobData, refreshUserData}) => {
  const [edit, setEdit] = useState(true);
  const EditOpen = () => {
    setEdit(false);
  };
  const getImageForCategory = (categoryName, categoryType) => {
    const images = areasImages[categoryType];
    return images ? images[categoryName] : "../../../images/fondo.png";
  };

  return (
    <section className="Job">
      <div className="Job__ted">
        <h1 className="Job__title">Empleo</h1>
        <button onClick={EditOpen} className="Job__edit">
          <i className="bx bx-edit-alt"></i>
        </button>
      </div>
      {edit ? (
        <section className="Job__jobs">
          <article className="Job__article">
            <h1 className="Job__article-title">Área de interes</h1>
            <div className="Job__div">
              <figure className="Job__figure">
                <img
                  src={getImageForCategory(jobData.work.jobType, "Área de interés")}
                  alt=""
                />
              </figure>
              <h1 className="Job__h1">{jobData.work.jobType}</h1>
            </div>
          </article>

          <article className="Job__article">
            <h1 className="Job__article-title">Opciones de jornada</h1>
            <div className="Job__div">
              <figure className="Job__figure">
                <img
                  src={getImageForCategory(
                    jobData.work.workOption,
                    "Opciones de jornada"
                  )}
                  alt=""
                />
              </figure>
              <h1 className="Job__h1">{jobData.work.workOption}</h1>
            </div>
          </article>

          <article className="Job__article">
            <h1 className="Job__article-title">Tipo de cultura</h1>
            <div className="Job__div">
              <figure className="Job__figure">
                <img
                  src={getImageForCategory(
                    jobData.work.cultureType,
                    "Tipo de cultura"
                  )}
                  alt=""
                />
              </figure>
              <h1 className="Job__h1">{jobData.work.cultureType}</h1>
            </div>
          </article>
        </section>
      ) : (
        <UpdateJob refreshUserData={refreshUserData} setEdit={setEdit} idJob={jobData}/>
      )}
    </section>
  );
};

export default Job;
