import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { Select, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NovoPeriodoEstagio from "../components/NovoPeriodoEstagio";
import PortalDrawer from "../components/PortalDrawer";
import NovoAdmin from "../components/NovoAdmin";
import EditarPeriodosEstagio from "../components/EditarPeriodosEstagio";
import "./PeriodosEstagio.css";

const PeriodosEstagio = () => {
  const navigate = useNavigate();
  const [isNovoPeriodoEstagio2Open, setNovoPeriodoEstagio2Open] =
    useState(false);
  const [isNovoPeriodoEstagioOpen, setNovoPeriodoEstagioOpen] = useState(false);
  const [isNovoPeriodoEstagio1Open, setNovoPeriodoEstagio1Open] =
    useState(false);
  const [isNovoAdminOpen, setNovoAdminOpen] = useState(false);
  const [isEditarPeriodosEstagioOpen, setEditarPeriodosEstagioOpen] =
    useState(false);
  const [isEditarPeriodosEstagio1Open, setEditarPeriodosEstagio1Open] =
    useState(false);
  const [isEditarPeriodosEstagio2Open, setEditarPeriodosEstagio2Open] =
    useState(false);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onEstgiosClick = useCallback(() => {
    navigate("/estagios");
  }, [navigate]);

  const onCandidaturasClick = useCallback(() => {
    navigate("/candidaturasalunos");
  }, [navigate]);

  const onPeriodosDeEstagioClick = useCallback(() => {
    navigate("/periodos-estagio");
  }, [navigate]);

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

  const onEmpresasClick = useCallback(() => {
    navigate("/empresas");
  }, [navigate]);

  const onDocentesTextClick = useCallback(() => {
    navigate("/docentes");
  }, [navigate]);

  const onAdministradoresTextClick = useCallback(() => {
    navigate("/administradores");
  }, [navigate]);

  const openNovoPeriodoEstagio2 = useCallback(() => {
    setNovoPeriodoEstagio2Open(true);
  }, []);

  const closeNovoPeriodoEstagio2 = useCallback(() => {
    setNovoPeriodoEstagio2Open(false);
  }, []);

  const openNovoPeriodoEstagio = useCallback(() => {
    setNovoPeriodoEstagioOpen(true);
  }, []);

  const closeNovoPeriodoEstagio = useCallback(() => {
    setNovoPeriodoEstagioOpen(false);
  }, []);

  const openNovoPeriodoEstagio1 = useCallback(() => {
    setNovoPeriodoEstagio1Open(true);
  }, []);

  const closeNovoPeriodoEstagio1 = useCallback(() => {
    setNovoPeriodoEstagio1Open(false);
  }, []);

  const openNovoAdmin = useCallback(() => {
    setNovoAdminOpen(true);
  }, []);

  const closeNovoAdmin = useCallback(() => {
    setNovoAdminOpen(false);
  }, []);

  const openEditarPeriodosEstagio = useCallback(() => {
    setEditarPeriodosEstagioOpen(true);
  }, []);

  const closeEditarPeriodosEstagio = useCallback(() => {
    setEditarPeriodosEstagioOpen(false);
  }, []);

  const openEditarPeriodosEstagio1 = useCallback(() => {
    setEditarPeriodosEstagio1Open(true);
  }, []);

  const closeEditarPeriodosEstagio1 = useCallback(() => {
    setEditarPeriodosEstagio1Open(false);
  }, []);

  const openEditarPeriodosEstagio2 = useCallback(() => {
    setEditarPeriodosEstagio2Open(true);
  }, []);

  const closeEditarPeriodosEstagio2 = useCallback(() => {
    setEditarPeriodosEstagio2Open(false);
  }, []);

  return (
    <>
      <div className="periodos-estagio">
        <img
          className="editar-periodos-icon"
          alt=""
          src="/editar-periodos@2x.png"
        />
        <b className="perodos-de-estgio">Períodos de Estágio</b>
        <div className="de-seguida-so-container">
          <span>{`De seguida são apresentadas  os períodos de estágio. Poderá `}</span>
          <b>inserir</b>
          <span>{` novo ou `}</span>
          <b>editar</b>
          <span> atuais.</span>
        </div>
        <div className="barra">
            <div className="barra-child" />
          </div>
        <nav className="menu">
          <div className="adm-name">
            <div className="admin-wrapper">
              <b className="admin">ADMIN</b>
            </div>
            <div className="x-wrapper" onClick={onFrameContainer1Click}>
              <div className="admin">x</div>
            </div>
            <div className="mrio-silva-wrapper">
              <b className="admin">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-parent">
            <div className="logo" onClick={onLogoContainerClick}>
              <img className="logo-icon" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories">
              <Button
                className="estgios"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu">
                <div className="submenu" data-animate-on-scroll>
                  <button className="empresas" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes1" onClick={onDocentesTextClick}>
                    Docentes
                  </div>
                  <div
                    className="administradores"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios1" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <img
          className="periodos-de-estagio1"
          alt=""
          src="/periodos-de-estagio@2x.png"
        />
        <div className="botao-np">
          <div className="perodos-por-pgina-container">
            <p className="perodos">PERÍODOS</p>
            <p className="perodos">POR PÁGINA</p>
          </div>
          <Stack className="wrapper9" w="102px">
            <Select
              variant="flushed"
              size="lg"
              textColor="#000"
              backgroundColor="#fff"
              borderColor="#1196db"
              focusBorderColor="#1196db"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
            </Select>
          </Stack>
        </div>
        <div className="botao" onClick={openNovoPeriodoEstagio2}>
          <button
            className="novo-perodo-wrapper"
            onClick={openNovoPeriodoEstagio}
          >
            <div className="novo-perodo">+ Novo Período</div>
          </button>
          <div className="press-button6" onClick={openNovoPeriodoEstagio1}>
            <button className="novo-perodo-container" onClick={openNovoAdmin}>
              <div className="novo-perodo1">+ Novo Período</div>
            </button>
          </div>
        </div>
        <div className="tabela">
          <div className="curso2">CURSO</div>
          <div className="candalunos">CAND.ALUNOS</div>
          <div className="descrio">DESCRIÇÃO</div>
          <div className="tabela-child" />
          <div className="tabela-item" />
          <div className="tabela-inner" />
          <div className="mei">MEI</div>
          <div className="mei1">MEI</div>
          <div className="mdm">MDM</div>
          <div className="mestrado-em-enginformtica">
            Mestrado em Eng.Informática
          </div>
          <div className="mestrado-em-enginformtica1">
            Mestrado em Eng.Informática
          </div>
          <div className="mestrado-em-enginformtica2">
            Mestrado em Eng.Informática
          </div>
          <div className="fev-2024">
            <span>{`2023 - `}</span>
            <span className="fev-20241">FEV 2024</span>
          </div>
          <div className="fev-20242">
            <span>{`2023 - `}</span>
            <span className="fev-20241">FEV 2024</span>
          </div>
          <div className="fev-20244">
            <span>{`2023 - `}</span>
            <span className="fev-20241">FEV 2024</span>
          </div>
          <div className="tabela-child1" />
          <div className="tabela-child2" />
          <div className="tabela-child3" />
          <div className="pluri-fev">
            <div className="pluri-fev1">PLURI FEV</div>
            <div className="pluri-fev-child" />
          </div>
          <div className="pluri-fev2">
            <div className="pluri-fev1">PLURI FEV</div>
            <div className="pluri-fev-child" />
          </div>
          <div className="pluri-fev4">
            <div className="pluri-fev1">PLURI FEV</div>
            <div className="pluri-fev-child" />
          </div>
          <div className="empresas1">EMPRESAS</div>
          <div className="propdocentes">PROP.DOCENTES</div>
          <div className="div">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div1">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div2">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div3">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div4">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div5">
            <p className="perodos">14/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div6">
            <p className="perodos">4/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div7">
            <p className="perodos">4/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="div8">
            <p className="perodos">4/12/2022</p>
            <p className="perodos">-23/12/2022</p>
          </div>
          <div className="editar" onClick={openEditarPeriodosEstagio}>
            <div className="pluri-fev1">editar</div>
            <div className="editar-child" />
          </div>
          <div className="editar2" onClick={openEditarPeriodosEstagio1}>
            <div className="pluri-fev1">editar</div>
            <img className="editar-item" alt="" src="/line-31.svg" />
          </div>
          <div className="editar4" onClick={openEditarPeriodosEstagio2}>
            <div className="pluri-fev1">editar</div>
            <div className="editar-inner" />
          </div>
        </div>
      </div>
      {isNovoPeriodoEstagio2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoPeriodoEstagio2}
        >
          <NovoPeriodoEstagio onClose={closeNovoPeriodoEstagio2} />
        </PortalDrawer>
      )}
      {isNovoPeriodoEstagioOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoPeriodoEstagio}
        >
          <NovoPeriodoEstagio onClose={closeNovoPeriodoEstagio} />
        </PortalDrawer>
      )}
      {isNovoPeriodoEstagio1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoPeriodoEstagio1}
        >
          <NovoPeriodoEstagio onClose={closeNovoPeriodoEstagio1} />
        </PortalDrawer>
      )}
      {isNovoAdminOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoAdmin}
        >
          <NovoAdmin onClose={closeNovoAdmin} />
        </PortalDrawer>
      )}
      {isEditarPeriodosEstagioOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarPeriodosEstagio}
        >
          <EditarPeriodosEstagio onClose={closeEditarPeriodosEstagio} />
        </PortalDrawer>
      )}
      {isEditarPeriodosEstagio1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarPeriodosEstagio1}
        >
          <EditarPeriodosEstagio onClose={closeEditarPeriodosEstagio1} />
        </PortalDrawer>
      )}
      {isEditarPeriodosEstagio2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarPeriodosEstagio2}
        >
          <EditarPeriodosEstagio onClose={closeEditarPeriodosEstagio2} />
        </PortalDrawer>
      )}
    </>
  );
};

export default PeriodosEstagio;
