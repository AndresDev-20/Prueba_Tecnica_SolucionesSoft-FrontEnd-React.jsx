const Date = ({user}) => {
    return(
        <>
        <article className="Dates__article1">
        <div className="Dates__div">
          <h2>
            <span>
              <i className="bx bx-briefcase-alt-2"></i>
            </span>
            <span>Nivel profesional</span>
          </h2>
          <p>{user.professionalLevel}</p>
        </div>
        <div className="Dates__div">
          <h2>
            <span>
              <i className="bx bx-wallet"></i>
            </span>
            <span>Rango salarial</span>
          </h2>
          <p>{user.salaryRange}</p>
        </div>
      </article>
      <hr className="linea__discontinua" />
      <article className="Dates__article2">
        <div className="Dates__date">
          <h1 className="date__nombre">Nombre</h1>
          <p>{user.name} {user.lastName}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__profetion">Profesion</h1>
          <p>{user.profetion}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__espe">Especializacion</h1>
          <p>{user.specialization}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__iden">Numero de documento</h1>
          <p>{user.documentNumber}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__ciudad">Ciudad donde busco</h1>
          <p>{user.citySearhJoi}</p>
        </div>
        <div className="Dates__date travel">
          <h1 className="date__ubicacion">Abierto a nueva ubicación</h1>
          <p>{user.travelAvailability ? "Sí" : "No"}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__correo">Correo electronico</h1>
          <p>{user.email}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__celular">Numero de celular</h1>
          <p>{user.phone}</p>
        </div>
        <div className="Dates__date">
          <h1 className="date__red">Red profesional</h1>
          <p className="date__red-enlace">
            <span>
              <i className="bx bxl-linkedin-square"></i>
            </span>
            <span><a href={user.linkedin}>{user.linkedin}</a></span>
          </p>
        </div>
      </article>
      <hr className="linea__discontinua" />
      <article className="Dates__article3">
        <div>
          <h1>
            <span>
              <i className="bx bx-like date_emo"></i>
            </span>
            <span>Valor agregado personal</span>
          </h1>
          <p>{user.personalValue}</p>
        </div>
        <div>
          <h1>
            <span>
              <i className="bx bx-heart date_emo"></i>
            </span>
            <span>Lo que me hace feliz</span>
          </h1>
          <p>{user.jobHappiness}</p>
        </div>
        <div>
          <h1>
            <span>
              <i className="bx bx-star date_emo"></i>
            </span>
            <span>Talento profesional</span>
          </h1>
          <p>{user.professionalTalent}</p>
        </div>
        <div>
          <h1>
            <span>
              <i className="bx bx-sun"></i>
            </span>
            <span>Ideas, proyectos o actividades a futuro</span>
          </h1>
          <p>{user.futureIdeas}</p>
        </div>
      </article>
        </>
    )
}

export default Date;