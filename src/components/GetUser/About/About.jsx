import React, { useRef, useState, useEffect } from "react";
import './About.css';
import { useNavigate } from "react-router-dom";

const About = ({ user }) => {
    const fileInputRef = useRef(null);
    const [imageFondo, setImageFondo] = useState(user.images.find(img => img.type === "fondo")?.url);
    const [imagePerfil, setImagePerfil] = useState(user.images.find(img => img.type === "perfil")?.url);
    const navigate = useNavigate()

    useEffect(() => {
        const storedFondo = localStorage.getItem('fondo');
        const storedPerfil = localStorage.getItem('perfil');
        if (storedFondo) setImageFondo(storedFondo);
        if (storedPerfil) setImagePerfil(storedPerfil);
    }, []);

    const handleEditClick = (imageType) => {
        fileInputRef.current.setAttribute('data-type', imageType);
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const imageType = event.target.getAttribute('data-type');
            if (imageType === "fondo") {
                setImageFondo(reader.result);
                localStorage.setItem('fondo', reader.result);
            } else if (imageType === "perfil") {
                setImagePerfil(reader.result);
                localStorage.setItem('perfil', reader.result);
            }
        };

        if (files) {
            reader.readAsDataURL(files);
        }
    };

    const updatepassword = () => {
        navigate("/updatepassword")
    }

    return (
        <div className="About">
            <header className="About__header" style={{ backgroundImage: `url(${imageFondo})` }}>
                <div>
                    <button onClick={() => handleEditClick("fondo")}>
                        <span>Editar Fondo</span>
                        <span><i className="bx bx-edit-alt"></i></span>
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
            </header>
            <section className="About__section">
                <figure className="About__figure">
                    <img
                        src={imagePerfil || "https://i.pinimg.com/736x/f6/f1/17/f6f117075bfaad3912a678a96e9bb6ec.jpg"}
                        alt="User Profile"
                    />
                    <div className="actualiazar__perfil">
                        <button onClick={() => handleEditClick("perfil")}>
                            <span><i className="bx bx-edit-alt"></i></span>
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </figure>
                <article className="About__article">
                    <div className="About__welcome">
                        <h1>Bienvenido</h1>
                        <h2>{user.name} {user.lastName}</h2>
                        <hr className="Line__Abut" />
                    </div>
                    <div className="About__dates">
                        <div>
                            <h3>Email</h3>
                            <h4>{user.email}</h4>
                        </div>
                        <div>
                            <h3>Documento</h3>
                            <h4>CC # {user.documentNumber}</h4>
                        </div>
                        <div>
                            <h3>Password</h3>
                            <h4>{user.password}</h4>
                        </div>
                        <button onClick={updatepassword} className="About__edit-password">Cambiar contraseña</button>
                    </div>
                </article>
                <article className="About__article-movil">
                    <div className="About__movil-dates">
                        <h1 className="About__movil-name">{user.name} {user.lastName}</h1>
                        <h2 className="About__movil-profetion">{user.profetion}</h2>
                        <button onClick={updatepassword} className="About__edit-password">Cambiar contraseña</button>
                    </div>
                    <div>
                        <button className="About__btn">
                            <i className='bx bx-dots-horizontal-rounded'></i>
                        </button>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default About;
