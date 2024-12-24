import React from "react";
import About from "../About/About";
import Job from "../Job/Job";
import Dates from "../Dates/Dates";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

const User = ({ user, refreshUserData, setImg }) => {
  return (
    <section>
      <About setImg={setImg} user={user} />
      <Job jobData={user} refreshUserData={refreshUserData} />
      <Dates user={user} refreshUserData={refreshUserData} />
      <Education user={user} refreshUserData={refreshUserData} /> 
      <Experience user={user} refreshUserData={refreshUserData} />
    </section>
  );
};

export default User;
