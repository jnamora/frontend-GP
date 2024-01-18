import { useState, useCallback, useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import { Button } from "@mui/material";
import EditarEmpresa from "../components/EditarEmpresa";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./Empresas.css";

const Empresas = () => {
  const [isEditarEmpresaOpen, setEditarEmpresaOpen] = useState(false);
  const [isEditarEmpresa1Open, setEditarEmpresa1Open] = useState(false);
  const [isEditarEmpresa2Open, setEditarEmpresa2Open] = useState(false);
  const [isEditarEmpresa3Open, setEditarEmpresa3Open] = useState(false);
  const [isEditarEmpresa4Open, setEditarEmpresa4Open] = useState(false);
  const [isEditarEmpresa5Open, setEditarEmpresa5Open] = useState(false);
  const [isEditarEmpresa6Open, setEditarEmpresa6Open] = useState(false);
  const navigate = useNavigate();

  const openEditarEmpresa = useCallback(() => {
    setEditarEmpresaOpen(true);
  }, []);

  const closeEditarEmpresa = useCallback(() => {
    setEditarEmpresaOpen(false);
  }, []);

  const openEditarEmpresa1 = useCallback(() => {
    setEditarEmpresa1Open(true);
  }, []);

  const closeEditarEmpresa1 = useCallback(() => {
    setEditarEmpresa1Open(false);
  }, []);

  const openEditarEmpresa2 = useCallback(() => {
    setEditarEmpresa2Open(true);
  }, []);

  const closeEditarEmpresa2 = useCallback(() => {
    setEditarEmpresa2Open(false);
  }, []);

  const openEditarEmpresa3 = useCallback(() => {
    setEditarEmpresa3Open(true);
  }, []);

  const closeEditarEmpresa3 = useCallback(() => {
    setEditarEmpresa3Open(false);
  }, []);

  const openEditarEmpresa4 = useCallback(() => {
    setEditarEmpresa4Open(true);
  }, []);

  const closeEditarEmpresa4 = useCallback(() => {
    setEditarEmpresa4Open(false);
  }, []);

  const openEditarEmpresa5 = useCallback(() => {
    setEditarEmpresa5Open(true);
  }, []);

  const closeEditarEmpresa5 = useCallback(() => {
    setEditarEmpresa5Open(false);
  }, []);

  const openEditarEmpresa6 = useCallback(() => {
    setEditarEmpresa6Open(true);
  }, []);

  const closeEditarEmpresa6 = useCallback(() => {
    setEditarEmpresa6Open(false);
  }, []);

  const onFrameContainer6Click = useCallback(() => {
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
      <div className="empresas5">
        <div className="frame-parent4">
          <div className="frame1">
            <b className="id">ID</b>
            <b className="acrnimo1">ACRÓNIMO</b>
            <b className="nome6">NOME</b>
            <b className="email3">EMAIL</b>
            <b className="telefone">TELEFONE</b>
          </div>
          <div className="frame2">
            <div className="frame-child" />
            <div className="frame-item" />
            <div className="frame-inner" />
            <div className="frame-child1" />
            <div className="frame-child2" />
            <div className="frame-child3" />
            <div className="frame-child4" />
            <div className="div34">1</div>
            <div className="dei">DEI</div>
            <div className="dei-fct1">DEI -FCT</div>
            <div className="coord-meideiucpt">COORD-MEI@DEI.UC.PT</div>
            <div className="div35">239700929</div>
            <div className="div36">2</div>
            <div className="div37">3</div>
            <div className="div38">4</div>
            <div className="div39">5</div>
            <div className="div40">6</div>
            <div className="div41">7</div>
            <div className="wit">WIT</div>
            <div className="ipnlis">IPNlis</div>
            <div className="stratio">Stratio</div>
            <div className="wit1">WIT</div>
            <div className="ipnlis1">IPNlis</div>
            <div className="instituto-pedro-nunes">Instituto Pedro Nunes</div>
            <div className="inova-ria">INOVA - RIA</div>
            <div className="wit-software1">WIT Software</div>
            <div className="stratio1">Stratio</div>
            <div className="instituto-pedro-nunes1">Instituto Pedro Nunes</div>
            <div className="wit-software2">WIT Software</div>
            <div className="witsoftwarept">WIT@SOFTWARE.PT</div>
            <div className="ipnipnpt">IPN@IPN.PT</div>
            <div className="stratioinfopt">STRATIO@INFO.PT</div>
            <div className="witsoftwarept1">WIT@SOFTWARE.PT</div>
            <div className="ipnipnpt1">IPN@IPN.PT</div>
            <div className="jcbabomypartnerpt">JCBABO@MYPARTNER.PT</div>
            <div className="div42">239700929</div>
            <div className="div43">239700929</div>
            <div className="div44">239700929</div>
            <div className="div45">239700929</div>
            <div className="div46">239700929</div>
            <div className="div47">239700929</div>
            <button className="editar29" onClick={openEditarEmpresa}>
              editar
            </button>
            <button className="editar30" onClick={openEditarEmpresa1}>
              editar
            </button>
            <button className="editar31" onClick={openEditarEmpresa2}>
              editar
            </button>
            <button className="editar32" onClick={openEditarEmpresa3}>
              editar
            </button>
            <button className="editar33" onClick={openEditarEmpresa4}>
              editar
            </button>
            <button className="editar34" onClick={openEditarEmpresa5}>
              editar
            </button>
            <button className="editar35" onClick={openEditarEmpresa6}>
              editar
            </button>
            <div className="ativo17">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo19">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo21">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo23">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo25">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo27">
              <div className="ativo18">ATIVO</div>
            </div>
            <div className="ativo29">
              <div className="ativo18">INATIVO</div>
            </div>
          </div>
        </div>
        <div className="frame3">
          <div className="body4">
            <b className="pesquisar1">PESQUISAR</b>
            <b className="empresas6">Empresas</b>
            <div className="de-seguida-so-container2">
              <span className="empresas-atuais">{`De seguida são apresentadas as empresas com as quais o DEI tem parcerias. Poderá `}</span>
              <b>editar</b>
              <span className="empresas-atuais"> empresas atuais.</span>
            </div>
          </div>
          <Stack className="wrapper20" w="340px">
            <Select variant="flushed">
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
          <b className="perodo-de-estgio7">PERÍODO DE ESTÁGIO</b>
          <input className="frame-child5" type="search" />
          <div className="frame-inner1">
            <div className="exportar-excel-wrapper">
              <button className="exportar-excel">EXPORTAR EXCEL</button>
            </div>
          </div>
          <b className="n-de-empresas">Nº DE EMPRESAS :658</b>
        </div>
        <div className="barra4">
            <div className="barra-child2" />
          </div>
        <nav className="menu4">
          <div className="adm-name4">
            <div className="admin-wrapper2">
              <b className="admin4">ADMIN</b>
            </div>
            <div className="x-wrapper2" onClick={onFrameContainer6Click}>
              <div className="admin4">x</div>
            </div>
            <div className="mrio-silva-wrapper2">
              <b className="admin4">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-parent2">
            <div className="logo4" onClick={onLogoContainerClick}>
              <img className="logo-icon4" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories4">
              <Button
                className="estgios8"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios8"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios8"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu4">
                <div className="submenu4" data-animate-on-scroll>
                  <button className="empresas7" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes7" onClick={onDocentesTextClick}>
                    Docentes
                  </div>
                  <div
                    className="administradores4"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios9" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>

      </div>
      {isEditarEmpresaOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa}
        >
          <EditarEmpresa onClose={closeEditarEmpresa} />
        </PortalDrawer>
      )}
      {isEditarEmpresa1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa1}
        >
          <EditarEmpresa onClose={closeEditarEmpresa1} />
        </PortalDrawer>
      )}
      {isEditarEmpresa2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa2}
        >
          <EditarEmpresa onClose={closeEditarEmpresa2} />
        </PortalDrawer>
      )}
      {isEditarEmpresa3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa3}
        >
          <EditarEmpresa onClose={closeEditarEmpresa3} />
        </PortalDrawer>
      )}
      {isEditarEmpresa4Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa4}
        >
          <EditarEmpresa onClose={closeEditarEmpresa4} />
        </PortalDrawer>
      )}
      {isEditarEmpresa5Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa5}
        >
          <EditarEmpresa onClose={closeEditarEmpresa5} />
        </PortalDrawer>
      )}
      {isEditarEmpresa6Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarEmpresa6}
        >
          <EditarEmpresa onClose={closeEditarEmpresa6} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Empresas;
