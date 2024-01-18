import { useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import "./EditarDadosProposta.css";

const EditarDadosProposta = ({ onClose }) => {
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
    <div className="editar-dados-proposta" data-animate-on-scroll>
      <div className="editar-dados-proposta-child" />
      <div className="editar-dados-proposta-item" />
      <input
        className="editar-dados-proposta-inner"
        placeholder="JÚRI VOGAL"
        type="text"
      />
      <div className="rectangle-div" />
      <div className="editar-dados-da-container">
        <b>{`Editar/ `}</b>
        <span className="dados-da-proposta">Dados da Proposta</span>
      </div>
      <button className="vector-container" onClick={onClose}>
        <img className="group-child1" alt="" src="/vector-3.svg" />
        <img className="group-child1" alt="" src="/vector-4.svg" />
      </button>
      <div className="objectivos-pouco-claros-container">
        <p className="p">
          <b>10/10/2022</b>
        </p>
        <p className="p">Objectivos pouco claros.</p>
        <p className="p">
          <b>&nbsp;</b>
        </p>
        <p className="p">
          <b>&nbsp;</b>
        </p>
        <p className="p">
          <b>12/10/2022</b>
        </p>
        <p className="p">Objectivos corrigidos.</p>
      </div>
      <div className="botao-add-comment" onClick={onClose}>
        <button className="adicionar-comentrio-wrapper" onClick={onClose}>
          <div className="adicionar-comentrio">ADICIONAR COMENTÁRIO</div>
        </button>
      </div>
      <b className="novo-comentrio">NOVO COMENTÁRIO</b>
      <textarea className="rectangle-textarea" />
      <b className="aluno">ALUNO</b>
      <b className="aluno-indicado">ALUNO INDICADO</b>
      <b className="orientadores">ORIENTADORES</b>
      <b className="plano-de-trabalhos">PLANO DE TRABALHOS</b>
      <b className="objetivos">OBJETIVOS</b>
      <b className="enquadramento">ENQUADRAMENTO</b>
      <b className="ttulo-do-estgio">TÍTULO DO ESTÁGIO</b>
      <b className="rea-de-especialidade">ÁREA DE ESPECIALIDADE</b>
      <b className="rea-de-especialidade1">ÁREA DE ESPECIALIDADE</b>
      <div className="botao-guardar" onClick={onClose}>
        <button className="guardar-alteraes-wrapper1" onClick={onClose}>
          <div className="guardar-alteraes4">Guardar Alterações</div>
        </button>
        <div className="press-button2" onClick={onClose}>
          <button className="guardar-alteraes-wrapper2" onClick={onClose}>
            <div className="guardar-alteraes5">Guardar Alterações</div>
          </button>
        </div>
      </div>
      <b className="perodo-de-estgio2">PERÍODO DE ESTÁGIO</b>
      <b className="perodo-de-estgio3">PERÍODO DE ESTÁGIO</b>
      <div className="editar-dados-proposta-child1" />
      <Stack className="wrapper" w="354px">
        <Select
          variant="outline"
          textColor="#000"
          backgroundColor="#fff"
          borderColor="#1196d8"
          focusBorderColor="#1196d8"
        >
          <option value="Dissertação/Estágio MEI 2022/2023">
            Dissertação/Estágio MEI 2022/2023
          </option>
          <option value="Dissertação/Estágio MEI 2021/2022">
            Dissertação/Estágio MEI 2021/2022
          </option>
          <option value="Dissertação/Estágio MEI 2020/2021">
            Dissertação/Estágio MEI 2020/2021
          </option>
        </Select>
      </Stack>
      <Stack className="container" w="354px">
        <Select
          variant="outline"
          textColor="#000"
          backgroundColor="#fff"
          borderColor="#1196d8"
          focusBorderColor="#1196d8"
        >
          <option value="Dissertação/Estágio MEI 2022/2023">
            Dissertação/Estágio MEI 2022/2023
          </option>
          <option value="Dissertação/Estágio MEI 2021/2022">
            Dissertação/Estágio MEI 2021/2022
          </option>
          <option value="Dissertação/Estágio MEI 2020/2021">
            Dissertação/Estágio MEI 2020/2021
          </option>
        </Select>
      </Stack>
      <textarea className="editar-dados-proposta-child2" />
      <input className="frame-input" placeholder="ORIENTADOR 1" type="text" />
      <input className="rectangle-input" type="text" />
      <textarea className="editar-dados-proposta-child3" />
      <input
        className="editar-dados-proposta-child4"
        placeholder="ORIENTADOR 2"
        type="text"
      />
      <div className="maria-lima-alimastudentdeiu">
        Maria Lima ALIMA@STUDENT.DEI.UC.PT
      </div>
      <div className="line-div" />
      <textarea className="editar-dados-proposta-child5" />
      <textarea className="editar-dados-proposta-child6" />
      <Stack className="frame" w="269px">
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
      <Stack className="frame-stack" w="269px">
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

export default EditarDadosProposta;
