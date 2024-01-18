import { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import "./EditarPeriodosEstagio.css";

const EditarPeriodosEstagio = ({ onClose }) => {
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
    <div className="editar-periodos-estagio" data-animate-on-scroll>
      <div className="editar-periodos-estagio-child" />
      <div className="frame-group" onClick={onClose}>
        <button className="guardar-alteraes-frame" onClick={onClose}>
          <div className="guardar-alteraes2">Guardar Alterações</div>
        </button>
        <div className="press-button1" onClick={onClose}>
          <button className="frame-button" onClick={onClose}>
            <div className="guardar-alteraes3">Guardar Alterações</div>
          </button>
        </div>
      </div>
      <b className="curso1">CURSO</b>
      <b className="perodo-de-estgio1">PERÍODO DE ESTÁGIO</b>
      <b className="incio-empresas1">INÍCIO EMPRESAS</b>
      <b className="incio-candidatura-alunos1">INÍCIO CANDIDATURA ALUNOS</b>
      <b className="fim-empresas1">FIM EMPRESAS</b>
      <b className="fim-candidatura-alunos1">FIM CANDIDATURA ALUNOS</b>
      <b className="incio-docentes1">INÍCIO DOCENTES</b>
      <b className="fim-docentes2">FIM DOCENTES</b>
      <input
        className="editar-curso2"
        placeholder="Mestrado em Eng.Informática"
        type="text"
      />
      <Input
        className="inicio-empresa1"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="inicio-candidatura1"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="inicio-docentes1"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-empresas2"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-candidatura1"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <Input
        className="fim-docentes3"
        variant="outline"
        width="368px"
        size="lg"
        textColor="#000"
        borderColor="#1196db"
        focusBorderColor="#1196db"
        type="date"
      />
      <input
        className="editar-curso3"
        placeholder="PLURI FEV 2023 - FEV 2024"
        type="text"
      />
      <b className="editar-perodo-de">{`Editar  Período de  Estágio `}</b>
      <div className="vector-group" onClick={onClose}>
        <img className="group-inner" alt="" src="/vector-3.svg" />
        <img
          className="vector-icon"
          alt=""
          src="/vector-4.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default EditarPeriodosEstagio;
