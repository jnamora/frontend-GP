import { useState, useCallback, useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import { Button } from "@mui/material";
import EditarDocente from "../components/EditarDocente";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./Docentes.css";

const Docentes = () => {
  const [isEditarDocenteOpen, setEditarDocenteOpen] = useState(false);
  const [isEditarDocente1Open, setEditarDocente1Open] = useState(false);
  const [isEditarDocente2Open, setEditarDocente2Open] = useState(false);
  const [isEditarDocente3Open, setEditarDocente3Open] = useState(false);
  const [isEditarDocente4Open, setEditarDocente4Open] = useState(false);
  const [isEditarDocente5Open, setEditarDocente5Open] = useState(false);
  const [isEditarDocente6Open, setEditarDocente6Open] = useState(false);
  const [isEditarDocente7Open, setEditarDocente7Open] = useState(false);
  const navigate = useNavigate();

  const openEditarDocente = useCallback(() => {
    setEditarDocenteOpen(true);
  }, []);

  const closeEditarDocente = useCallback(() => {
    setEditarDocenteOpen(false);
  }, []);

  const openEditarDocente1 = useCallback(() => {
    setEditarDocente1Open(true);
  }, []);

  const closeEditarDocente1 = useCallback(() => {
    setEditarDocente1Open(false);
  }, []);

  const openEditarDocente2 = useCallback(() => {
    setEditarDocente2Open(true);
  }, []);

  const closeEditarDocente2 = useCallback(() => {
    setEditarDocente2Open(false);
  }, []);

  const openEditarDocente3 = useCallback(() => {
    setEditarDocente3Open(true);
  }, []);

  const closeEditarDocente3 = useCallback(() => {
    setEditarDocente3Open(false);
  }, []);

  const openEditarDocente4 = useCallback(() => {
    setEditarDocente4Open(true);
  }, []);

  const closeEditarDocente4 = useCallback(() => {
    setEditarDocente4Open(false);
  }, []);

  const openEditarDocente5 = useCallback(() => {
    setEditarDocente5Open(true);
  }, []);

  const closeEditarDocente5 = useCallback(() => {
    setEditarDocente5Open(false);
  }, []);

  const openEditarDocente6 = useCallback(() => {
    setEditarDocente6Open(true);
  }, []);

  const closeEditarDocente6 = useCallback(() => {
    setEditarDocente6Open(false);
  }, []);

  const openEditarDocente7 = useCallback(() => {
    setEditarDocente7Open(true);
  }, []);

  const closeEditarDocente7 = useCallback(() => {
    setEditarDocente7Open(false);
  }, []);

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

  const onDocentesText1Click = useCallback(() => {
    navigate("/docentes");
  }, [navigate]);

  const onAdministradoresTextClick = useCallback(() => {
    navigate("/administradores");
  }, [navigate]);

  return (
    <>
      <div className="docentes4">
        <div className="lista-admins">
          <b className="num1">NUM</b>
          <b className="nome3">NOME</b>
          <b className="email2">EMAIL</b>
          <b className="nome4">NOME</b>
          <b className="estado3">ESTADO</b>
          <a
            className="alvesdeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            ALVES@DEI.UC.PT
          </a>
          <div className="lista-admins-child" />
          <a
            className="cardosodeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            CARDOSO@DEI.UC.PT
          </a>
          <a
            className="acardosodeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            ACARDOSO@DEI.UC.PT
          </a>
          <div className="alves">alves</div>
          <div className="eng-software">Eng. Software</div>
          <div className="ana-alves3">Ana Alves</div>
          <div className="div23">1349</div>
          <div className="div24">
            <p className="de-seguida-so">2</p>
          </div>
          <div className="div24">
            <p className="de-seguida-so">2</p>
          </div>
          <div className="alberto-cardoso">Alberto Cardoso</div>
          <div className="div24">
            <p className="de-seguida-so">2</p>
          </div>
          <div className="div27">
            <p className="de-seguida-so">2499</p>
          </div>
          <div className="acardoso">acardoso</div>
          <div className="eng-software1">Eng. Software</div>
          <div className="amlcar-cardoso">Amílcar Cardoso</div>
          <div className="div28">3457</div>
          <div className="cfonseca">cfonseca</div>
          <div className="sistemas-inteligentes">Sistemas Inteligentes</div>
          <div className="carlos-fonseca1">Carlos Fonseca</div>
          <div className="div29">
            <p className="de-seguida-so">4352</p>
          </div>
          <div className="acardoso1">acardoso</div>
          <div className="design-e-multimdia">Design e Multimédia</div>
          <div className="amlcar-cardoso1">Amílcar Cardoso</div>
          <div className="div30">
            <p className="de-seguida-so">5345</p>
          </div>
          <div className="cbento">cbento</div>
          <div className="eng-software2">Eng. Software</div>
          <div className="carlos-bento">Carlos Bento</div>
          <div className="div31">6647</div>
          <div className="mariasilva">mariasilva</div>
          <div className="design-e-multimdia1">Design e Multimédia</div>
          <div className="maria-silva1">Maria Silva</div>
          <div className="div32">7354</div>
          <div className="cardoso">cardoso</div>
          <div className="eng-software3">Eng. Software</div>
          <div className="cbento1">cbento</div>
          <div className="sistemas-inteligentes1">Sistemas Inteligentes</div>
          <div className="carlos-bento1">Carlos Bento</div>
          <div className="div33">
            <p className="de-seguida-so">8356</p>
          </div>
          <div className="ativo2">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo4">
            <div className="ativo3">INATIVO</div>
          </div>
          <div className="ativo5">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo7">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo9">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo11">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo13">
            <div className="ativo3">ATIVO</div>
          </div>
          <div className="ativo15">
            <div className="ativo3">ATIVO</div>
          </div>
          <a
            className="cfonsecadeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            CFONSECA@DEI.UC.PT
          </a>
          <a
            className="cbentodeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            CBENTO@DEI.UC.PT
          </a>
          <a
            className="mariasilvadeiucpt"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            MARIASILVA@DEI.UC.PT
          </a>
          <a
            className="cbentodeiucpt1"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            CBENTO@DEI.UC.PT
          </a>
          <a
            className="acardosodeiucpt1"
            href="mailto:ALVES@DEI.UC.PT"
            target="_blank"
          >
            ACARDOSO@DEI.UC.PT
          </a>
          <b className="rea-de-especializao1">ÁREA DE ESPECIALIZAÇÃO</b>
          <div className="lista-admins-item" />
          <div className="lista-admins-inner" />
          <div className="lista-admins-child1" />
          <div className="lista-admins-child2" />
          <div className="lista-admins-child3" />
          <div className="lista-admins-child4" />
          <div className="lista-admins-child5" />
          <div className="lista-admins-child6" />
          <div className="editar20" onClick={openEditarDocente}>
            editar
          </div>
          <div className="editar21" onClick={openEditarDocente1}>
            editar
          </div>
          <div className="editar22" onClick={openEditarDocente2}>
            editar
          </div>
          <div className="editar23" onClick={openEditarDocente3}>
            editar
          </div>
          <div className="editar24" onClick={openEditarDocente4}>
            editar
          </div>
          <div className="editar25" onClick={openEditarDocente5}>
            editar
          </div>
          <div className="editar26" onClick={openEditarDocente6}>
            editar
          </div>
          <div className="editar27" onClick={openEditarDocente7}>
            editar
          </div>

        </div>
        <div className="body3">
          <b className="pesquisar">PESQUISAR</b>
          <b className="docentes5">Docentes</b>
          <div className="de-seguida-so-container1">
            <p className="de-seguida-so">
              De seguida são apresentadas os docentes do DEI.
            </p>
            <p className="de-seguida-so">
              <span>{`Poderá `}</span>
              <b className="docentes-atuais">editar</b>
              <span className="docentes-atuais"> docentes atuais.</span>
            </p>
          </div>
          <input className="body-child6" type="search" />
        </div>
        <Stack className="wrapper16" w="159px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="Em Aprovação">Em Aprovação</option>
            <option value="Aprovado">Aprovado</option>
          </Select>
        </Stack>
        <b className="estado4">ESTADO</b>
        <b className="propostas-por-pgina-container1">
          <p className="de-seguida-so">PROPOSTAS</p>
          <p className="de-seguida-so">POR PÁGINA</p>
        </b>
        <Stack className="wrapper17" w="102px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Select>
        </Stack>
        <div className="barra3">
            <div className="barra-child1" />
          </div>
        <nav className="menu3">

          <div className="adm-name3">
            <div className="admin-wrapper1">
              <b className="admin3">ADMIN</b>
            </div>
            <div className="x-wrapper1" onClick={onFrameContainer1Click}>
              <div className="admin3">x</div>
            </div>
            <div className="mrio-silva-wrapper1">
              <b className="admin3">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-parent1">
            <div className="logo3" onClick={onLogoContainerClick}>
              <img className="logo-icon3" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories3">
              <Button
                className="estgios6"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios6"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios6"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu3">
                <div className="submenu3" data-animate-on-scroll>
                  <button className="empresas4" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes6" onClick={onDocentesText1Click}>
                    Docentes
                  </div>
                  <div
                    className="administradores3"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios7" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isEditarDocenteOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente}
        >
          <EditarDocente onClose={closeEditarDocente} />
        </PortalDrawer>
      )}
      {isEditarDocente1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente1}
        >
          <EditarDocente onClose={closeEditarDocente1} />
        </PortalDrawer>
      )}
      {isEditarDocente2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente2}
        >
          <EditarDocente onClose={closeEditarDocente2} />
        </PortalDrawer>
      )}
      {isEditarDocente3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente3}
        >
          <EditarDocente onClose={closeEditarDocente3} />
        </PortalDrawer>
      )}
      {isEditarDocente4Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente4}
        >
          <EditarDocente onClose={closeEditarDocente4} />
        </PortalDrawer>
      )}
      {isEditarDocente5Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente5}
        >
          <EditarDocente onClose={closeEditarDocente5} />
        </PortalDrawer>
      )}
      {isEditarDocente6Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente6}
        >
          <EditarDocente onClose={closeEditarDocente6} />
        </PortalDrawer>
      )}
      {isEditarDocente7Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDocente7}
        >
          <EditarDocente onClose={closeEditarDocente7} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Docentes;
