import React, { useState } from "react";
import "./Education.css";
import AddEducation from "./AddEducation";
import axios from "axios";
const Api = import.meta.env.VITE_REACT_APP_URL;

const Education = ({ user, refreshUserData }) => {
  const [openEDU, setOpenEDU] = useState(true);
  const OpenAddEDU = () => setOpenEDU(false);

  const remove = (dataId) => {
    axios
      .delete(`${Api}education/${dataId}`)
      .then((res) => {
        refreshUserData(res.data);
        alert("Estudio borrado");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="Education">
      <div className="Education__titles">
        <h1 className="Education__title">Formación académica</h1>
        <i onClick={OpenAddEDU} className="bx bx-plus edu__plus"></i>
      </div>

      {openEDU ? (
        <section>
          {user.education.map((res, index) => (
            <div key={res.id}>
              <article className="Educatio__edu">
                <div className="Education__edu-title">
                  <h1
                    style={{
                      opacity: index === 0 ? "block" : "0",
                    }}
                  >
                    Último estudio realizado
                  </h1>
                  <ul>
                    <li onClick={() => remove(res.id)}>
                      <i className="bx bx-trash"></i>
                    </li>
                  </ul>
                </div>
                <article className="Education__dates">
                  <div>
                    <h1>
                      <span>
                        <i className="bx bxs-graduation edu__emo"></i>
                      </span>{" "}
                      <span>Nivel de formación</span>
                    </h1>
                    <p>{res.degree}</p>
                  </div>
                  <div>
                    <h1>
                      <span>
                        <i className="bx bx-buildings edu__emo"></i>
                      </span>{" "}
                      <span>Institución</span>
                    </h1>
                    <p>{res.institution}</p>
                  </div>
                  <div>
                    <h1>
                      <span>
                        <i className="bx bxs-calendar-alt edu__emo"></i>
                      </span>{" "}
                      <span>Fecha de certificación</span>
                    </h1>
                    <p>{res.startDate}</p>
                  </div>
                </article>
              </article>
              <hr className="linea__discontinua-edu" />
            </div>
          ))}
        </section>
      ) : (
        <AddEducation refreshUserData={refreshUserData} setOpen={setOpenEDU} />
      )}
    </section>
  );
};

export default Education;
