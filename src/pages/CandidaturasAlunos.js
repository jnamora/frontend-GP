import { useState, useCallback, useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import { Button } from "@mui/material";
import TabelaCandidaturas from "../components/TabelaCandidaturas";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./CandidaturasAlunos.css";

const CandidaturasAlunos = () => {
  const [isTabelaCandidaturasOpen, setTabelaCandidaturasOpen] = useState(false);
  const [isTabelaCandidaturas1Open, setTabelaCandidaturas1Open] =
    useState(false);
  const [isTabelaCandidaturas2Open, setTabelaCandidaturas2Open] =
    useState(false);
  const [isTabelaCandidaturas3Open, setTabelaCandidaturas3Open] =
    useState(false);
  const [isTabelaCandidaturas4Open, setTabelaCandidaturas4Open] =
    useState(false);
  const [isTabelaCandidaturas5Open, setTabelaCandidaturas5Open] =
    useState(false);
  const [isTabelaCandidaturas6Open, setTabelaCandidaturas6Open] =
    useState(false);
  const [isTabelaCandidaturas7Open, setTabelaCandidaturas7Open] =
    useState(false);
  const [isTabelaCandidaturas8Open, setTabelaCandidaturas8Open] =
    useState(false);
  const [isTabelaCandidaturas9Open, setTabelaCandidaturas9Open] =
    useState(false);
  const navigate = useNavigate();

  const openTabelaCandidaturas = useCallback(() => {
    setTabelaCandidaturasOpen(true);
  }, []);

  const closeTabelaCandidaturas = useCallback(() => {
    setTabelaCandidaturasOpen(false);
  }, []);

  const openTabelaCandidaturas1 = useCallback(() => {
    setTabelaCandidaturas1Open(true);
  }, []);

  const closeTabelaCandidaturas1 = useCallback(() => {
    setTabelaCandidaturas1Open(false);
  }, []);

  const openTabelaCandidaturas2 = useCallback(() => {
    setTabelaCandidaturas2Open(true);
  }, []);

  const closeTabelaCandidaturas2 = useCallback(() => {
    setTabelaCandidaturas2Open(false);
  }, []);

  const openTabelaCandidaturas3 = useCallback(() => {
    setTabelaCandidaturas3Open(true);
  }, []);

  const closeTabelaCandidaturas3 = useCallback(() => {
    setTabelaCandidaturas3Open(false);
  }, []);

  const openTabelaCandidaturas4 = useCallback(() => {
    setTabelaCandidaturas4Open(true);
  }, []);

  const closeTabelaCandidaturas4 = useCallback(() => {
    setTabelaCandidaturas4Open(false);
  }, []);

  const openTabelaCandidaturas5 = useCallback(() => {
    setTabelaCandidaturas5Open(true);
  }, []);

  const closeTabelaCandidaturas5 = useCallback(() => {
    setTabelaCandidaturas5Open(false);
  }, []);

  const openTabelaCandidaturas6 = useCallback(() => {
    setTabelaCandidaturas6Open(true);
  }, []);

  const closeTabelaCandidaturas6 = useCallback(() => {
    setTabelaCandidaturas6Open(false);
  }, []);

  const openTabelaCandidaturas7 = useCallback(() => {
    setTabelaCandidaturas7Open(true);
  }, []);

  const closeTabelaCandidaturas7 = useCallback(() => {
    setTabelaCandidaturas7Open(false);
  }, []);

  const openTabelaCandidaturas8 = useCallback(() => {
    setTabelaCandidaturas8Open(true);
  }, []);

  const closeTabelaCandidaturas8 = useCallback(() => {
    setTabelaCandidaturas8Open(false);
  }, []);

  const openTabelaCandidaturas9 = useCallback(() => {
    setTabelaCandidaturas9Open(true);
  }, []);

  const closeTabelaCandidaturas9 = useCallback(() => {
    setTabelaCandidaturas9Open(false);
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
      <div className="candidaturas-alunos">
        <div className="body1">
          <div className="body2">
            <b className="candidaturas-de-alunos">Candidaturas de Alunos</b>
            <div className="nesta-pgina-poder-container1">
              <span className="nesta-pgina-poder">{`Nesta página poderá `}</span>
              <b>atribuir</b>
              <span className="nesta-pgina-poder">{` e `}</span>
              <b>remover a atribuição</b>
              <span className="nesta-pgina-poder">
                {" "}
                de um aluno a um estágio/dissertação
              </span>
            </div>
          </div>
          <Stack className="wrapper14" w="408px">
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
          <b className="perodo-de-estgio6">PERÍODO DE ESTÁGIO</b>
        </div>
        <div className="alunos-sem-estgio">
          <b className="alunos-sem-estgio1">Alunos sem estágio atribuído</b>
          <div className="alunos-sem-estgio-child" />
          <div className="alunos-sem-estgio-item" />
          <div className="alunos-sem-estgio-inner" />
          <div className="alunos-sem-estgio-child1" />
          <div className="alunos-sem-estgio-child2" />
          <b className="b94">[-]</b>
          <b className="n-estudante">Nº ESTUDANTE</b>
          <b className="nome1">NOME</b>
          <b className="login">LOGIN</b>
          <b className="email">EMAIL</b>
          <div className="wrapper15">
            <div className="div13">20186491</div>
          </div>
          <div className="div14">20183494</div>
          <div className="div15">20173428</div>
          <div className="div16">20183452</div>
          <div className="div17">20184545</div>
          <div className="antnio-carvalho">António Carvalho</div>
          <div className="carlos-barreiros">Carlos Barreiros</div>
          <div className="ana-alves1">Ana Alves</div>
          <div className="alberto-silva">Alberto Silva</div>
          <div className="ana-carvalhinho">Ana Carvalhinho</div>
          <div className="ana">ana</div>
          <div className="alberto">alberto</div>
          <div className="aalves">aalves</div>
          <div className="fonseca">fonseca</div>
          <div className="dourado">dourado</div>
          <div className="barreirosstudentdeiucpt">
            BARREIROS@STUDENT.DEI.UC.PT
          </div>
          <div className="aalvesstudentdeiucpt">AALVES@STUDENT.DEI.UC.PT</div>
          <div className="albertostudentdeiucpt">ALBERTO@STUDENT.DEI.UC.PT</div>
          <div className="carvalhinhostudentdeiucpt">
            CARVALHINHO@STUDENT.DEI.UC.PT
          </div>
          <div className="acarvalhostudentdeiucpt">
            ACARVALHO@STUDENT.DEI.UC.PT
          </div>
          <div className="atribuido">
            <div className="no-atribudo1">NÃO ATRIBUÍDO</div>
          </div>
          <div className="atribuido1">
            <div className="no-atribudo1">NÃO ATRIBUÍDO</div>
          </div>
          <div className="atribuido2">
            <div className="no-atribudo1">NÃO ATRIBUÍDO</div>
          </div>
          <div className="atribuido3">
            <div className="no-atribudo1">NÃO ATRIBUÍDO</div>
          </div>
          <div className="atribuido4">
            <div className="no-atribudo1">NÃO ATRIBUÍDO</div>
          </div>
          <div className="editar10" onClick={openTabelaCandidaturas}>
            editar
          </div>
          <div className="editar11" onClick={openTabelaCandidaturas1}>
            editar
          </div>
          <div className="editar12" onClick={openTabelaCandidaturas2}>
            editar
          </div>
          <div className="editar13" onClick={openTabelaCandidaturas3}>
            editar
          </div>
          <div className="editar14" onClick={openTabelaCandidaturas4}>
            editar
          </div>
        </div>
        <div className="alunos-com-estgio">
          <div className="atribuido5">
            <div className="no-atribudo1">AUTO ATRIBUÍDO</div>
          </div>
          <div className="atribuido6">
            <div className="no-atribudo1">AUTO ATRIBUÍDO</div>
          </div>
          <div className="atribuido7">
            <div className="no-atribudo1">AUTO ATRIBUÍDO</div>
          </div>
          <label className="atribuido8">
            <div className="no-atribudo1">ATRIBUÍDO</div>
          </label>
          <div className="atribuido9">
            <div className="no-atribudo1">ATRIBUÍDO</div>
          </div>
          <div className="alunos-com-estgio-child" />
          <div className="alunos-com-estgio-item" />
          <div className="alunos-com-estgio-inner" />
          <div className="alunos-com-estgio-child1" />
          <div className="alunos-com-estgio-child2" />
          <b className="alunos-com-estgio1">Alunos com estágio atribuído</b>
          <b className="b95">[-]</b>
          <div className="n-estudante1">Nº ESTUDANTE</div>
          <div className="nome2">NOME</div>
          <div className="login1">LOGIN</div>
          <div className="email1">EMAIL</div>
          <div className="div18">20186491</div>
          <div className="div19">20183494</div>
          <div className="div20">20184545</div>
          <div className="div21">20173428</div>
          <div className="div22">20183452</div>
          <div className="ana-carvalhinho1">Ana Carvalhinho</div>
          <div className="alberto-silva1">Alberto Silva</div>
          <div className="ana-alves2">Ana Alves</div>
          <div className="carlos-barreiros1">Carlos Barreiros</div>
          <div className="antnio-carvalho1">António Carvalho</div>
          <div className="ana1">ana</div>
          <div className="alberto1">alberto</div>
          <div className="aalves1">aalves</div>
          <div className="fonseca1">fonseca</div>
          <div className="dourado1">dourado</div>
          <div className="carvalhinhostudentdeiucpt1">
            CARVALHINHO@STUDENT.DEI.UC.PT
          </div>
          <div className="albertostudentdeiucpt1">
            ALBERTO@STUDENT.DEI.UC.PT
          </div>
          <div className="aalvesstudentdeiucpt1">AALVES@STUDENT.DEI.UC.PT</div>
          <div className="barreirosstudentdeiucpt1">
            BARREIROS@STUDENT.DEI.UC.PT
          </div>
          <div className="acarvalhostudentdeiucpt1">
            ACARVALHO@STUDENT.DEI.UC.PT
          </div>
          <div className="editar15" onClick={openTabelaCandidaturas5}>
            editar
          </div>
          <div className="editar16" onClick={openTabelaCandidaturas6}>
            editar
          </div>
          <div className="editar17" onClick={openTabelaCandidaturas7}>
            editar
          </div>
          <div className="editar18" onClick={openTabelaCandidaturas8}>
            editar
          </div>
          <div className="editar19" onClick={openTabelaCandidaturas9}>
            editar
          </div>
        </div>
        <div className="barra2">
            <div className="barra-inner" />
          </div>
        <nav className="menu2">
          <div className="adm-name2">
            <div className="admin-frame">
              <b className="admin2">ADMIN</b>
            </div>
            <div className="x-frame" onClick={onFrameContainer1Click}>
              <div className="admin2">x</div>
            </div>
            <div className="mrio-silva-frame">
              <b className="admin2">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo2" onClick={onLogoContainerClick}>
              <img className="logo-icon2" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories2">
              <Button
                className="estgios4"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios4"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios4"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu2">
                <div className="submenu2" data-animate-on-scroll>
                  <button className="empresas3" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes3" onClick={onDocentesTextClick}>
                    Docentes
                  </div>
                  <div
                    className="administradores2"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios5" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isTabelaCandidaturasOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas1}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas1} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas2}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas2} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas3}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas3} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas4Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas4}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas4} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas5Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas5}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas5} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas6Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas6}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas6} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas7Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas7}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas7} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas8Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas8}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas8} />
        </PortalDrawer>
      )}
      {isTabelaCandidaturas9Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeTabelaCandidaturas9}
        >
          <TabelaCandidaturas onClose={closeTabelaCandidaturas9} />
        </PortalDrawer>
      )}
    </>
  );
};

export default CandidaturasAlunos;
