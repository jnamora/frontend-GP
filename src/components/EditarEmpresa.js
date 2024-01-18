import { useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import "./EditarEmpresa.css";

const EditarEmpresa = ({ onClose }) => {
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
    <div className="editar-empresa" data-animate-on-scroll>
      <div className="editar-dados-empresa">
        <div className="editar-dados-empresa-child" />
        <div className="pas">PAÍS</div>
        <div className="atividade">ATIVIDADE</div>
        <div className="estado5">ESTADO</div>
        <div className="website">WEBSITE</div>
        <div className="n-telefone">Nº TELEFONE</div>
        <div className="editar-dados-empresa-inner">
          <div className="nome-wrapper">
            <div className="nome5">NOME*</div>
          </div>
        </div>
        <div className="editar-dados-empresa-inner1">
          <div className="morada-wrapper">
            <div className="morada">MORADA*</div>
          </div>
        </div>
        <input
          className="editar-dados-empresa-item"
          placeholder="Insira a morada da sua empresa"
          type="text"
        />
        <b className="editar-dados-empresa1">Editar Dados Empresa</b>
        <button className="editar-dados" onClick={onClose}>
          <img className="editar-dados-child" alt="" src="/vector-3.svg" />
          <img className="editar-dados-child" alt="" src="/vector-4.svg" />
        </button>
        <div className="editar-dados-empresa-inner2">
          <div className="nome-wrapper">
            <div className="acrnimo">ACRÓNIMO</div>
          </div>
        </div>
        <input
          className="editar-dados-empresa-child1"
          placeholder="259 479 152"
          type="tel"
        />
        <Stack className="wrapper18" w="425px">
          <Select
            variant="outline"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196d8"
            focusBorderColor="#1196d8"
          >
            <option value="Portugal">Portugal</option>
            <option value="Espanha">Espanha</option>
            <option value="França">França</option>
            <option value="" />
          </Select>
        </Stack>
        <input
          className="editar-dados-empresa-child2"
          placeholder="Desenvolvimento de software"
          type="text"
        />
        <input
          className="editar-dados-empresa-child3"
          placeholder="HTTPS://WWW.IPN:COM/"
          type="text"
        />
        <div className="frame-parent3" onClick={onClose}>
          <button className="guardar-alteraes-wrapper9" onClick={onClose}>
            <div className="guardar-alteraes12">Guardar Alterações</div>
          </button>
          <div className="press-button7" onClick={onClose}>
            <button className="guardar-alteraes-wrapper10" onClick={onClose}>
              <div className="guardar-alteraes13">Guardar Alterações</div>
            </button>
          </div>
        </div>
        <Stack className="wrapper19" w="426px">
          <Select
            variant="outline"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196d8"
            focusBorderColor="#1196d8"
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </Select>
        </Stack>
        <input
          className="editar-dados-empresa-child4"
          placeholder="Instituto Pedro Nunes"
          type="text"
        />
        <input className="editar-dados-empresa-child5" type="search" />
      </div>
    </div>
  );
};

export default EditarEmpresa;
