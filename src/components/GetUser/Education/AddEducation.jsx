import { useForm } from "react-hook-form";
import axios from "axios";
import "./Education.css";

const Api = import.meta.env.VITE_REACT_APP_URL;

const AddEducation = ({ setOpen, refreshUserData }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
     axios.post(`${Api}/education`, {
        degree: data.title,
        institution: data.institution,
        startDate: data.startDate,
        endDate: data.endDate,
        userId: 1, // Asegúrate de ajustar esto según tu lógica de usuario
      })
      .then(res => {
        alert("Formación académica añadida con éxito");
        refreshUserData(res.data) 
        reset(); 
        setOpen(true);
      })
      .catch(err => console.log(err))
      
     
     
    
  };



  const closeAdd = () => {
    setOpen(true);
  };

  return (
    <section className="UpdateEducation">
      <h1 className="UpdateEducation__title">Formación académica</h1>
      <form className="UpdateEducation__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="UpdateEducation__form-divs">
          <div>
            <label htmlFor="title">Título obtenido</label>
            <input
              type="text"
              placeholder="Diseño de medios interactivos"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="institution">Institución</label>
            <input
              type="text"
              placeholder="Universidad Icesi"
              {...register("institution", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="startDate">Fecha de inicio</label>
            <input type="date" {...register("startDate", { required: true })} />
          </div>
          <div>
            <label htmlFor="endDate">Fecha de terminación</label>
            <input type="date" {...register("endDate", { required: true })} />
          </div>
        </div>
        <div className="UpdateEdu__btn">
          <button type="button" onClick={closeAdd} className="Btn__cancel">
            Cancelar
          </button>
          <button type="submit" className="Btn__update">
            Añadir
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddEducation;
