import React, { useState } from "react";
import "./Experience.css";
import AddExperience from "./AddExperience";
import axios from "axios";
const Api = import.meta.env.VITE_REACT_APP_URL;

const Experience = ({ user, refreshUserData }) => {
  const [openEx, setOpenEX] = useState(true);
  const OpenAddEX = () => setOpenEX(false);

  const remove = (dataId) => {
    axios
      .delete(`${Api}experience/${dataId}`)
      .then((res) => {
        alert("Experiencia borrada");
        refreshUserData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="Experience">
      <div className="Experience__titles">
        <h1 className="Experience__title">Experiencia laboral</h1>
        <i onClick={OpenAddEX} className="bx bx-plus ex__plus"></i>
      </div>
      {openEx ? (
        <div>
          {user.experiences.map((res, index) => (
            <section key={res.id}>
              <article className="Experience__edu">
                <div className="Experience__edu-title">
                  <h1
                    style={{
                      opacity: index === 0 ? "block" : 0,
                    }}
                  >
                    Trabajo aquí actualmente
                  </h1>
                  <ul>
                    <li>
                      <i
                        onClick={() => remove(res.id)}
                        className="bx bx-trash"
                      ></i>
                    </li>
                  </ul>
                </div>
                <article className="Experience__dates">
                  <div>
                    <h1>
                      <span>
                        <i className="bx bx-user"></i>
                      </span>{" "}
                      <span>Cargo</span>
                    </h1>
                    <p>{res.position}</p>
                  </div>
                  <div>
                    <h1>
                      <span>
                        <i className="bx bx-buildings ex__emo"></i>
                      </span>{" "}
                      <span>Empresa</span>
                    </h1>
                    <p>{res.company}</p>
                  </div>
                  <div>
                    <h1>
                      <span>
                        <i className="bx bxs-calendar-alt edu__emo"></i>
                      </span>{" "}
                      <span>Tiempo de duración</span>
                    </h1>
                    <p>
                      {res.startDate} {res.endDate}
                    </p>
                  </div>
                </article>
              </article>
              <hr className="linea__discontinua-edu" />
            </section>
          ))}
        </div>
      ) : (
        <AddExperience refreshUserData={refreshUserData} setOpen={setOpenEX} />
      )}
    </section>
  );
};

export default Experience;
