import React, { useState } from "react";
import "./Dates.css";
import Date from "./Date";
import UpdateDates from "./UpdateDates";

const Dates = ({ user, refreshUserData }) => {
  const [openDates, setOpenDates] = useState(true)
  const OpenUpdate = () => {
    setOpenDates(false)
  }

  return (
    <section className="Dates">
      <div className="Dates__inicio">
        <h1 className="Dates__title">Datos personales</h1>
        <button onClick={OpenUpdate}>
          <i className="bx bx-edit-alt"></i>
        </button>
      </div>
      {
        openDates
        ?(<Date user={user}/>)
        :(<UpdateDates refreshUserData={refreshUserData}  user={user} setOpenDates={setOpenDates}/>)
      }
    </section>
  );
};

export default Dates;
