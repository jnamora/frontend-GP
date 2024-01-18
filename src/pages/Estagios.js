import { useState, useCallback, useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import { Button } from "@mui/material";
import EditarDadosProposta from "../components/EditarDadosProposta";
import PortalDrawer from "../components/PortalDrawer";
import EditarRankingJuri from "../components/EditarRankingJuri";
import { useNavigate } from "react-router-dom";
import "./Estagios.css";

const Estagios = () => {
  const [isEditarDadosPropostaOpen, setEditarDadosPropostaOpen] =
    useState(false);
  const [isEditarDadosProposta1Open, setEditarDadosProposta1Open] =
    useState(false);
  const [isEditarDadosProposta2Open, setEditarDadosProposta2Open] =
    useState(false);
  const [isEditarDadosProposta3Open, setEditarDadosProposta3Open] =
    useState(false);
  const [isEditarRankingJuriOpen, setEditarRankingJuriOpen] = useState(false);
  const navigate = useNavigate();

  const openEditarDadosProposta = useCallback(() => {
    setEditarDadosPropostaOpen(true);
  }, []);

  const closeEditarDadosProposta = useCallback(() => {
    setEditarDadosPropostaOpen(false);
  }, []);

  const openEditarDadosProposta1 = useCallback(() => {
    setEditarDadosProposta1Open(true);
  }, []);

  const closeEditarDadosProposta1 = useCallback(() => {
    setEditarDadosProposta1Open(false);
  }, []);

  const openEditarDadosProposta2 = useCallback(() => {
    setEditarDadosProposta2Open(true);
  }, []);

  const closeEditarDadosProposta2 = useCallback(() => {
    setEditarDadosProposta2Open(false);
  }, []);

  const openEditarDadosProposta3 = useCallback(() => {
    setEditarDadosProposta3Open(true);
  }, []);

  const closeEditarDadosProposta3 = useCallback(() => {
    setEditarDadosProposta3Open(false);
  }, []);

  const openEditarRankingJuri = useCallback(() => {
    setEditarRankingJuriOpen(true);
  }, []);

  const closeEditarRankingJuri = useCallback(() => {
    setEditarRankingJuriOpen(false);
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

  const onDocentesTextClick = useCallback(() => {
    navigate("/docentes");
  }, [navigate]);

  const onAdministradoresTextClick = useCallback(() => {
    navigate("/administradores");
  }, [navigate]);

  return (
    <>
      <div className="estagios">
        <div className="inicio">
          <div className="nesta-pgina-poder-container">
            <span>{`Nesta página poderá `}</span>
            <b>editar</b>
            <span>{` e `}</span>
            <b>aprovar</b>
            <span> as propostas de dissertação/estágios submetidas</span>
          </div>
          <b className="propostas-de-estgio">Propostas de Estágio</b>
        </div>
        <div className="head">
          <Stack className="wrapper10" w="367px">
            <Select
              variant="flushed"
              size="lg"
              textColor="#000"
              backgroundColor="#fff"
              borderColor="#1196db"
              focusBorderColor="#1196db"
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
          <b className="propostas-por-pgina-container">
            <p className="propostas">PROPOSTAS</p>
            <p className="propostas">POR PÁGINA</p>
          </b>
          <b className="estado1">ESTADO</b>
          <b className="pesquisa1">PESQUISA</b>
          <b className="perodo-de-estgio5">PERÍODO DE ESTÁGIO</b>
          <b className="rea-de-especialidade3">ÁREA DE ESPECIALIDADE</b>
          <Stack className="wrapper11" w="152px">
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
          <Stack className="wrapper12" w="102px">
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
          <Stack className="wrapper13" w="248px">
            <Select
              variant="flushed"
              size="lg"
              textColor="#000"
              backgroundColor="#fff"
              borderColor="#1196db"
              focusBorderColor="#1196db"
            >
              <option value="Sistemas de Informação">
                Sistemas de Informação
              </option>
              <option value="Ciência de Dados">Ciência de Dados</option>
              <option value="Segurança e Privacidade">
                Segurança e Privacidade
              </option>
            </Select>
          </Stack>
          <input className="head-child" type="search" />
        </div>
        <div className="body">
          <div className="rectangle-parent">
            <div className="group-child9" />
            <b className="em-aprovao">EM APROVAÇÃO</b>
          </div>
          <div className="rectangle-group">
            <div className="group-child10" />
            <b className="aprovado">APROVADO</b>
          </div>
          <div className="rectangle-container">
            <div className="group-child9" />
            <b className="em-aprovao1">EM APROVAÇÃO</b>
          </div>
          <div className="corpo">
            <b className="num">NUM</b>
            <b className="instituio">INSTITUIÇÃO</b>
            <b className="ttulo-estgio">TÍTULO ESTÁGIO</b>
            <b className="orientadores1">ORIENTADORES</b>
            <b className="aluno1">ALUNO</b>
            <b className="estado2">ESTADO</b>
            <div className="div9">3489</div>
            <div className="div10">1429</div>
            <div className="div11">2545</div>
            <div className="div12">3428</div>
            <div className="artsoft">ARTSOFT</div>
            <div className="dei-fct">DEI - FCT</div>
            <div className="wit-software">WIT SOFTWARE</div>
            <div className="artsoft1">ARTSOFT</div>
            <div className="aplicaes-de-realidade">
              Aplicações de Realidade Aumentada
            </div>
            <div className="disguised-source-animation-container">
              <p className="propostas">Disguised source animation</p>
              <p className="propostas">in steady-state-visually-evoked</p>
            </div>
            <div className="aplicaes-de-realidade1">
              Aplicações de Realidade Aumentada
            </div>
            <div className="disguised-source-animation-container1">
              <p className="propostas">Disguised source animation</p>
              <p className="propostas">in steady-state-visually-evoked</p>
            </div>
            <div className="joo-catalo">João Catalão</div>
            <div className="marco-simes">Marco Simões</div>
            <div className="ana-alves">Ana Alves</div>
            <div className="joo-catalo1">João Catalão</div>
            <div className="maria-silva-2019293819-container">
              <p className="propostas">Maria Silva</p>
              <p className="p20">2019293819</p>
            </div>
            <div className="joo-costa-2019293819-container">
              <p className="propostas">João Costa</p>
              <p className="p20">2019293819</p>
            </div>
            <div className="corpo-child" />
            <div className="corpo-item" />
            <div className="corpo-inner" />
            <div className="corpo-child1" />
            <div className="corpo-child2" />
            <div className="corpo-child3" />
            <div className="corpo-child4" />
            <div className="corpo-child5" />
            <div className="corpo-child6" />
            <div className="corpo-child7" />
            <div className="corpo-child8" />
          </div>
          <div className="em-revisao">
            <div className="em-revisao-child" />
            <b className="em-reviso">EM REVISÃO</b>
          </div>
          <div className="body-child" />
          <div className="body-item" />
          <div className="body-inner" />
          <div className="body-child1" />
          <img className="line-icon" alt="" src="/line-71.svg" />
          <div className="body-child2" />
          <div className="body-child3" />
          <div className="body-child4" />
          <div className="body-child5" />
          <div className="editar6" onClick={openEditarDadosProposta}>
            editar
          </div>
          <div className="editar7" onClick={openEditarDadosProposta1}>
            editar
          </div>
          <div className="editar8" onClick={openEditarDadosProposta2}>
            editar
          </div>
          <div className="editar9" onClick={openEditarDadosProposta3}>
            editar
          </div>
          <div className="adicionar-jri" onClick={openEditarRankingJuri}>
            adicionar júri
          </div>
        </div>
        <b className="pgina-1-de1">PÁGINA 1 DE 10</b>
        <button className="prxima-pgina-container">
          <b className="prxima-pgina1">Próxima Página</b>
        </button>
        <div className="barra1">
            <div className="barra-item" />
          </div>
        <nav className="menu1">
          <div className="adm-name1">
            <div className="admin-container">
              <b className="admin1">ADMIN</b>
            </div>
            <div className="x-container" onClick={onFrameContainer1Click}>
              <div className="admin1">x</div>
            </div>
            <div className="mrio-silva-container">
              <b className="admin1">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-group">
            <div className="logo1" onClick={onLogoContainerClick}>
              <img className="logo-icon1" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories1">
              <Button
                className="estgios2"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios2"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios2"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu1">
                <div className="submenu1" data-animate-on-scroll>
                  <button className="empresas2" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes2" onClick={onDocentesTextClick}>
                    Docentes
                  </div>
                  <div
                    className="administradores1"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios3" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isEditarDadosPropostaOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDadosProposta}
        >
          <EditarDadosProposta onClose={closeEditarDadosProposta} />
        </PortalDrawer>
      )}
      {isEditarDadosProposta1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDadosProposta1}
        >
          <EditarDadosProposta onClose={closeEditarDadosProposta1} />
        </PortalDrawer>
      )}
      {isEditarDadosProposta2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDadosProposta2}
        >
          <EditarDadosProposta onClose={closeEditarDadosProposta2} />
        </PortalDrawer>
      )}
      {isEditarDadosProposta3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarDadosProposta3}
        >
          <EditarDadosProposta onClose={closeEditarDadosProposta3} />
        </PortalDrawer>
      )}
      {isEditarRankingJuriOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarRankingJuri}
        >
          <EditarRankingJuri onClose={closeEditarRankingJuri} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Estagios;
