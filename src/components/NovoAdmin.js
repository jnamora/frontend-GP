import { useEffect } from "react";
import "./NovoAdmin.css";

const NovoAdmin = ({ onClose }) => {
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
    <div className="novo-admin1" data-animate-on-scroll>
      <div className="novo-admin2">
        <div className="novo-admin-child1" />
        <b className="novo-administrador">Novo Administrador</b>
        <button className="vector-parent2" onClick={onClose}>
          <img className="group-child12" alt="" src="/vector-3.svg" />
          <img
            className="group-child13"
            alt=""
            src="/vector-4.svg"
            onClick={onClose}
          />
        </button>
        <div className="frame-parent5" onClick={onClose}>
          <button className="guardar-alteraes-wrapper11" onClick={onClose}>
            <div className="guardar-alteraes14">Guardar Alterações</div>
          </button>
          <div className="press-button8" onClick={onClose}>
            <button className="guardar-alteraes-wrapper12" onClick={onClose}>
              <div className="guardar-alteraes15">Guardar Alterações</div>
            </button>
          </div>
        </div>
      </div>
      <input
        className="novo-admin-child2"
        placeholder="Insira o seu nome"
        type="text"
      />
      <div className="novo-admin-inner1">
        <div className="nome-container">
          <div className="nome7">NOME*</div>
        </div>
      </div>
      <div className="novo-admin-inner2">
        <div className="nome-container">
          <div className="e-mail">E-MAIL*</div>
        </div>
      </div>
      <input
        className="novo-admin-child3"
        placeholder="Insira o seu e-mail"
        type="text"
      />
    </div>
  );
};

export default NovoAdmin;
