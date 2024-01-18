import { useEffect } from "react";
import "./TabelaCandidaturas.css";

const TabelaCandidaturas = ({ onClose }) => {
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
    <div className="tabela-candidaturas" data-animate-on-scroll>
      <div className="tabela-candidaturas-child" />
      <img className="tabela-cand-icon" alt="" src="/tabela-cand@2x.png" />
      <div className="group-div" onClick={onClose}>
        <img className="group-child7" alt="" src="/vector-3.svg" />
        <img
          className="group-child8"
          alt=""
          src="/vector-4.svg"
          onClick={onClose}
        />
      </div>
      <div className="frame-parent2" onClick={onClose}>
        <button className="guardar-alteraes-wrapper7" onClick={onClose}>
          <div className="guardar-alteraes10">Guardar Alterações</div>
        </button>
        <div className="press-button5" onClick={onClose}>
          <button className="guardar-alteraes-wrapper8" onClick={onClose}>
            <div className="guardar-alteraes11">Guardar Alterações</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabelaCandidaturas;
