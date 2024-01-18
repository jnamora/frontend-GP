import { useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import "./EditarDocente.css";

const EditarDocente = ({ onClose }) => {
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
    <div className="editar-docente" data-animate-on-scroll>
      <div className="novo-admin">
        <div className="novo-admin-child" />
        <div className="novo-admin-inner">
          <div className="nome-curto-wrapper">
            <div className="nome-curto">NOME CURTO*</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="nome-curto-wrapper">
            <div className="estado">ESTADO</div>
          </div>
        </div>
        <Stack className="wrapper7" w="376px">
          <Select
            variant="outline"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196d8"
            focusBorderColor="#1196d8"
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </Select>
        </Stack>
        <b className="editar-docente1">Editar Docente</b>
        <button className="vector-parent1" onClick={onClose}>
          <img className="group-child5" alt="" src="/vector-3.svg" />
          <img className="group-child5" alt="" src="/vector-4.svg" />
        </button>
        <div className="frame-parent1" onClick={onClose}>
          <button className="guardar-alteraes-wrapper5" onClick={onClose}>
            <div className="guardar-alteraes8">Guardar Alterações</div>
          </button>
          <div className="press-button4" onClick={onClose}>
            <button className="guardar-alteraes-wrapper6" onClick={onClose}>
              <div className="guardar-alteraes9">Guardar Alterações</div>
            </button>
          </div>
        </div>
        <input
          className="novo-admin-item"
          placeholder="Maria Silva"
          type="text"
        />
      </div>
      <div className="editar-docente-inner">
        <div className="rea-de-especializao-wrapper">
          <div className="rea-de-especializao">ÁREA DE ESPECIALIZAÇÃO</div>
        </div>
      </div>
      <Stack className="wrapper8" w="399px">
        <Select
          variant="outline"
          textColor="#000"
          backgroundColor="#fff"
          borderColor="#1196d8"
          focusBorderColor="#1196d8"
        >
          <option value="Design e Multimédia">Design e Multimédia</option>
          <option value="Engenharia Informática">Engenharia Informática</option>
        </Select>
      </Stack>
    </div>
  );
};

export default EditarDocente;
