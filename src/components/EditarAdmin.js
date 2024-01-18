import { useEffect } from "react";
import "./EditarAdmin.css";

const EditarAdmin = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="editar-admin" data-animate-on-scroll>
      <div className="novo-admin3">
        <div className="novo-admin-child4" />
        <input
          className="novo-admin-child5"
          placeholder="Mário Silva"
          type="text"
        />
        <div className="novo-admin-inner3">
          <div className="e-mail-container">
            <div className="e-mail1">E-MAIL*</div>
          </div>
        </div>
        <div className="novo-admin-inner4">
          <div className="e-mail-container">
            <div className="nome8">NOME*</div>
          </div>
        </div>
        <input
          className="novo-admin-child6"
          placeholder="MARIOSILVA@DEI.UC.PT"
          type="text"
        />
        <b className="editar-administrador">Editar Administrador</b>
        <button className="vector-parent3" onClick={onClose}>
          <img className="group-child14" alt="" src="/vector-3.svg" />
          <img className="group-child14" alt="" src="/vector-4.svg" />
        </button>
        <div className="frame-parent6" onClick={onClose}>
          <button className="guardar-alteraes-wrapper13" onClick={onClose}>
            <div className="guardar-alteraes16">Guardar Alterações</div>
          </button>
          <div className="press-button9" onClick={onClose}>
            <button className="guardar-alteraes-wrapper14" onClick={onClose}>
              <div className="guardar-alteraes17">Guardar Alterações</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarAdmin;
