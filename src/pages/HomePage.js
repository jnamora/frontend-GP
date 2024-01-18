import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

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
    <div className="home-page">
      <div className="body6">
        <div className="a-rea-de-container">
          <span>
            <span className="a-rea-de">{`A área de `}</span>
            <b className="a-rea-de">estágios -</b>
            <i className="admin6">{` admin `}</i>
            <span>é dedicada à aprovação de</span>
          </span>
          <b className="estgios-propostos"> estágios propostos</b>
          <span>{`, à atribuição de `}</span>
          <b className="estgios-propostos">propostas</b>
          <span>{` a alunos e criação de `}</span>
          <b className="estgios-propostos">períodos de estágio</b>
          <span>.</span>
        </div>
        <img className="adm-icon" alt="" src="/adm@2x.png" />
      </div>
      <div className="barra6">
          <div className="barra-child4" />
        </div>
      <nav className="menu6">
        <div className="adm-name6">
          <div className="admin-wrapper4">
            <b className="admin7">ADMIN</b>
          </div>
          <div className="x-wrapper4" onClick={onFrameContainer1Click}>
            <div className="admin7">x</div>
          </div>
          <div className="mrio-silva-wrapper4">
            <b className="admin7">MÁRIO SILVA</b>
          </div>
        </div>
        <div className="logo-parent4">
          <div className="logo6" onClick={onLogoContainerClick}>
            <img className="logo-icon6" alt="" src="/logo@2x.png" />
          </div>
          <div className="categories6">
            <Button
              className="estgios12"
              sx={{ width: 86.3 }}
              color="primary"
              variant="text"
              onClick={onEstgiosClick}
            >
              ESTÁGIOS
            </Button>
            <Button
              className="estgios12"
              sx={{ width: 124.8 }}
              color="primary"
              variant="text"
              onClick={onCandidaturasClick}
            >
              CANDIDATURAS
            </Button>
            <Button
              className="estgios12"
              sx={{ width: 215 }}
              color="primary"
              variant="text"
              onClick={onPeriodosDeEstagioClick}
            >
              PERÍODOS DE ESTÁGIOS
            </Button>
            <div className="perfissubmenu6">
              <div className="submenu6" data-animate-on-scroll>
                <button className="empresas9" onClick={onEmpresasClick}>
                  Empresas
                </button>
                <div className="docentes9" onClick={onDocentesTextClick}>
                  Docentes
                </div>
                <div
                  className="administradores8"
                  onClick={onAdministradoresTextClick}
                >
                  Administradores
                </div>
              </div>
              <Button className="estgios13" color="primary" variant="text">
                PERFIS
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
