import { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import "./NovoPeriodoEstagio.css";

const NovoPeriodoEstagio = ({ onClose }) => {
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
    <div className="novo-periodo-estagio" data-animate-on-scroll>
      <div className="novo-periodo-estagio-child" />
      <div className="frame-parent" onClick={onClose}>
        <button className="guardar-alteraes-wrapper" onClick={onClose}>
          <div className="guardar-alteraes">Guardar Alterações</div>
        </button>
        <div className="press-button" onClick={onClose}>
          <button className="guardar-alteraes-container" onClick={onClose}>
            <div className="guardar-alteraes1">Guardar Alterações</div>
          </button>
        </div>
      </div>
      <b className="curso">CURSO</b>
      <b className="perodo-de-estgio">PERÍODO DE ESTÁGIO</b>
      <b className="incio-empresas">INÍCIO EMPRESAS</b>
      <b className="incio-candidatura-alunos">INÍCIO CANDIDATURA ALUNOS</b>
      <b className="fim-empresas">FIM EMPRESAS</b>
      <b className="fim-candidatura-alunos">FIM CANDIDATURA ALUNOS</b>
      <b className="incio-docentes">INÍCIO DOCENTES</b>
      <b className="fim-docentes">FIM DOCENTES</b>
      <input className="editar-curso" type="text" />
      <Input
        className="inicio-empresa"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="inicio-candidatura"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="inicio-docentes"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-empresa"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-candidatura"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-docentes1"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <input className="editar-curso1" type="text" />
      <b className="novo-perodo-de">{`Novo  Período de  Estágio `}</b>
      <div className="vector-parent" onClick={onClose}>
        <img className="group-child" alt="" src="/vector-3.svg" />
        <img
          className="group-item"
          alt=""
          src="/vector-4.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default NovoPeriodoEstagio;
