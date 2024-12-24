import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ChangePassword.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
const Api = import.meta.env.VITE_REACT_APP_URL;

const UpdatePassword = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const newPassword = watch("newPassword");

  const handlePasswordStrength = (password) => {
    if (
      password.length >= 10 &&
      /\d/.test(password) &&
      /[a-z]/i.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      return "strong";
    } else if (password.length >= 8 && /\d/.test(password) && /[a-z]/i.test(password)) {
      return "medium";
    } else if (password.length >= 6) {
      return "weak";
    }
    return "very-weak";
  };

  const onSubmit = async (data) => {
    const { oldPassword, newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(`${Api}user/1/password`, {
        oldPassword,
        newPassword,
      });
      alert("¡Contraseña actualizada con éxito!");
      reset();
    } catch (error) {
      alert(
        error.response?.data?.message || "Hubo un problema al actualizar la contraseña."
      );
    } finally {
      setLoading(false);
    }
  };

  const volver = () => {
    navigate("/")
  }

  return (
    <div>
     
      <header className="UpdatePassword_Header">
         <Header />
         <button onClickCapture={volver}><i className='bx bx-x'></i></button>
      </header>
      <div className="change-password">
        <h2 className="change-password__title">CAMBIO DE CONTRASEÑA</h2>
        <form className="change-password__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="change-password__field">
            <i className="bx bx-lock-alt change-password__icon"></i>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Contraseña antigua"
              className="change-password__input"
              {...register("oldPassword", { required: true })}
            />
            <button
              type="button"
              className="change-password__toggle"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              <i
                className={`bx ${
                  showOldPassword ? "bx-show" : "bx-hide"
                } change-password__toggle-icon`}
              ></i>
            </button>
          </div>

          <div className="change-password__field">
            <i className="bx bx-lock-alt change-password__icon"></i>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Nueva contraseña"
              className="change-password__input"
              {...register("newPassword", { required: true })}
            />
            <div className="change-password__strength-bar">
              <span
                className={`change-password__strength-segment ${
                  newPassword && handlePasswordStrength(newPassword) === "very-weak"
                    ? "is-active is-very-weak"
                    : ""
                }`}
              ></span>
              <span
                className={`change-password__strength-segment ${
                  newPassword && handlePasswordStrength(newPassword) === "weak"
                    ? "is-active is-weak"
                    : ""
                }`}
              ></span>
              <span
                className={`change-password__strength-segment ${
                  newPassword && handlePasswordStrength(newPassword) === "medium"
                    ? "is-active is-medium"
                    : ""
                }`}
              ></span>
              <span
                className={`change-password__strength-segment ${
                  newPassword && handlePasswordStrength(newPassword) === "strong"
                    ? "is-active is-strong"
                    : ""
                }`}
              ></span>
            </div>
            <button
              type="button"
              className="change-password__toggle"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              <i
                className={`bx ${
                  showNewPassword ? "bx-show" : "bx-hide"
                } change-password__toggle-icon`}
              ></i>
            </button>
          </div>

          <div className="change-password__field">
            <i className="bx bx-lock-alt change-password__icon"></i>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar nueva contraseña"
              className="change-password__input"
              {...register("confirmPassword", { required: true })}
            />
            <button
              type="button"
              className="change-password__toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i
                className={`bx ${
                  showConfirmPassword ? "bx-show" : "bx-hide"
                } change-password__toggle-icon`}
              ></i>
            </button>
          </div>

          <div className="change-password__policy">
            <input
              type="checkbox"
              id="policy"
              className="change-password__checkbox"
              {...register("policy", { required: true })}
            />
            <label htmlFor="policy" className="change-password__label">
              Acepto Política de Tratamiento de Datos
            </label>
          </div>

          <button type="submit" className="change-password__button" disabled={loading}>
            {loading ? "Guardando..." : "Guardar nueva contraseña"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
