import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import EditarAdmin from "../components/EditarAdmin";
import PortalDrawer from "../components/PortalDrawer";
import NovoAdmin from "../components/NovoAdmin";
import { useNavigate } from "react-router-dom";
import "./Administradores.css";

const Administradores = () => {
  const [isEditarAdminOpen, setEditarAdminOpen] = useState(false);
  const [isEditarAdmin1Open, setEditarAdmin1Open] = useState(false);
  const [isEditarAdmin2Open, setEditarAdmin2Open] = useState(false);
  const [isEditarAdmin3Open, setEditarAdmin3Open] = useState(false);
  const [isEditarAdmin4Open, setEditarAdmin4Open] = useState(false);
  const [isEditarAdmin5Open, setEditarAdmin5Open] = useState(false);
  const [isEditarAdmin6Open, setEditarAdmin6Open] = useState(false);
  const [isEditarAdmin7Open, setEditarAdmin7Open] = useState(false);
  const [isNovoAdmin2Open, setNovoAdmin2Open] = useState(false);
  const [isNovoAdminOpen, setNovoAdminOpen] = useState(false);
  const [isNovoAdmin1Open, setNovoAdmin1Open] = useState(false);
  const navigate = useNavigate();

  const openEditarAdmin = useCallback(() => {
    setEditarAdminOpen(true);
  }, []);

  const closeEditarAdmin = useCallback(() => {
    setEditarAdminOpen(false);
  }, []);

  const openEditarAdmin1 = useCallback(() => {
    setEditarAdmin1Open(true);
  }, []);

  const closeEditarAdmin1 = useCallback(() => {
    setEditarAdmin1Open(false);
  }, []);

  const openEditarAdmin2 = useCallback(() => {
    setEditarAdmin2Open(true);
  }, []);

  const closeEditarAdmin2 = useCallback(() => {
    setEditarAdmin2Open(false);
  }, []);

  const openEditarAdmin3 = useCallback(() => {
    setEditarAdmin3Open(true);
  }, []);

  const closeEditarAdmin3 = useCallback(() => {
    setEditarAdmin3Open(false);
  }, []);

  const openEditarAdmin4 = useCallback(() => {
    setEditarAdmin4Open(true);
  }, []);

  const closeEditarAdmin4 = useCallback(() => {
    setEditarAdmin4Open(false);
  }, []);

  const openEditarAdmin5 = useCallback(() => {
    setEditarAdmin5Open(true);
  }, []);

  const closeEditarAdmin5 = useCallback(() => {
    setEditarAdmin5Open(false);
  }, []);

  const openEditarAdmin6 = useCallback(() => {
    setEditarAdmin6Open(true);
  }, []);

  const closeEditarAdmin6 = useCallback(() => {
    setEditarAdmin6Open(false);
  }, []);

  const openEditarAdmin7 = useCallback(() => {
    setEditarAdmin7Open(true);
  }, []);

  const closeEditarAdmin7 = useCallback(() => {
    setEditarAdmin7Open(false);
  }, []);

  const openNovoAdmin2 = useCallback(() => {
    setNovoAdmin2Open(true);
  }, []);

  const closeNovoAdmin2 = useCallback(() => {
    setNovoAdmin2Open(false);
  }, []);

  const openNovoAdmin = useCallback(() => {
    setNovoAdminOpen(true);
  }, []);

  const closeNovoAdmin = useCallback(() => {
    setNovoAdminOpen(false);
  }, []);

  const openNovoAdmin1 = useCallback(() => {
    setNovoAdmin1Open(true);
  }, []);

  const closeNovoAdmin1 = useCallback(() => {
    setNovoAdmin1Open(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
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
      <div className="administradores5">
        <div className="body5">
          <h2 className="administradores6">Administradores</h2>
          <div className="de-seguida-so-container3">
            <p className="poder-criar-novo-e-editar-os">
              De seguida são apresentadas os administradores da Página de
              Estágios.
            </p>
            <p className="poder-criar-novo-e-editar-os">
              <span>{`Poderá `}</span>
              <b className="criar-novo">{`criar novo `}</b>
              <span className="criar-novo">{`e `}</span>
              <b className="criar-novo">{`editar `}</b>
              <span className="criar-novo">os administradores atuais.</span>
            </p>
          </div>
        </div>
        <b className="pesquisar2">PESQUISAR</b>
        <input
          className="administradores-child"
          placeholder="  "
          type="search"
        />
        <section className="lista-admins1">
          <b className="num2">NUM</b>
          <b className="login2">LOGIN</b>
          <b className="nome9">NOME</b>
          <b className="estado6">ESTADO</b>
          <div className="lista-admins-child15" />
          <div className="lista-admins-child16" />
          <div className="lista-admins-child17" />
          <div className="lista-admins-child18" />
          <div className="lista-admins-child19" />
          <div className="lista-admins-child20" />
          <div className="lista-admins-child21" />
          <div className="lista-admins-child22" />
          <button className="editar37" onClick={openEditarAdmin}>
            editar
          </button>
          <button className="editar38" onClick={openEditarAdmin1}>
            editar
          </button>
          <button className="editar39" onClick={openEditarAdmin2}>
            editar
          </button>
          <button className="editar40" onClick={openEditarAdmin3}>
            editar
          </button>
          <button className="editar41" onClick={openEditarAdmin4}>
            editar
          </button>
          <button className="editar42" onClick={openEditarAdmin5}>
            editar
          </button>
          <button className="editar43" onClick={openEditarAdmin6}>
            editar
          </button>
          <button className="editar44" onClick={openEditarAdmin7}>
            editar
          </button>
          <div className="marcia">marcia</div>
          <div className="div48">1</div>
          <div className="div49">
            <p className="poder-criar-novo-e-editar-os">2</p>
          </div>
          <div className="edmundo-monteiro">Edmundo Monteiro</div>
          <div className="edmundo">edmundo</div>
          <div className="div49">
            <p className="poder-criar-novo-e-editar-os">2</p>
          </div>
          <div className="penousal-machado">Penousal Machado</div>
          <div className="machado">machado</div>
          <div className="div53">3</div>
          <div className="amlcar-cardoso2">Amílcar Cardoso</div>
          <div className="amilcar">amilcar</div>
          <div className="div54">
            <p className="poder-criar-novo-e-editar-os">4</p>
          </div>
          <div className="carlos-bento2">Carlos Bento</div>
          <div className="bento">bento</div>
          <div className="div55">
            <p className="poder-criar-novo-e-editar-os">5</p>
          </div>
          <div className="mrcia-esprito-santo">Márcia Espírito Santo</div>
          <div className="marcia1">marcia</div>
          <div className="div56">
            <p className="poder-criar-novo-e-editar-os">6</p>
          </div>
          <div className="edmundo-monteiro4">Edmundo Monteiro</div>
          <div className="edmundo4">edmundo</div>
          <div className="div57">
            <p className="poder-criar-novo-e-editar-os">7</p>
          </div>
          <div className="penousal-machado1">Penousal Machado</div>
          <div className="mrcia-esprito-santo1">Márcia Espírito Santo</div>
          <div className="machado1">machado</div>
          <div className="div58">
            <p className="poder-criar-novo-e-editar-os">8</p>
          </div>
          <div className="ativo30">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo32">
            <div className="ativo31">INATIVO</div>
          </div>
          <div className="ativo33">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo35">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo37">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo39">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo41">
            <div className="ativo31">ATIVO</div>
          </div>
          <div className="ativo43">
            <div className="ativo31">ATIVO</div>
          </div>
        </section>
        <div className="administradores-inner">
          <div className="frame-parent7" onClick={openNovoAdmin2}>
            <button
              className="novo-administrador-wrapper"
              onClick={openNovoAdmin}
            >
              <div className="novo-administrador1">+ Novo Administrador</div>
            </button>
            <div className="press-button10">
              <button
                className="novo-administrador-container"
                onClick={openNovoAdmin1}
              >
                <div className="novo-administrador2">+ Novo Administrador</div>
              </button>
            </div>
          </div>
        </div>
        <nav className="menu5">
          <div className="barra5">
            <div className="barra-child3" />
          </div>
          <div className="adm-name5">
            <div className="admin-wrapper3">
              <b className="admin5">ADMIN</b>
            </div>
            <div className="x-wrapper3" onClick={onFrameContainer3Click}>
              <div className="admin5">x</div>
            </div>
            <div className="mrio-silva-wrapper3">
              <b className="admin5">MÁRIO SILVA</b>
            </div>
          </div>
          <div className="logo-parent3">
            <div className="logo5" onClick={onLogoContainerClick}>
              <img className="logo-icon5" alt="" src="/logo@2x.png" />
            </div>
            <div className="categories5">
              <Button
                className="estgios10"
                sx={{ width: 86.3 }}
                color="primary"
                variant="text"
                onClick={onEstgiosClick}
              >
                ESTÁGIOS
              </Button>
              <Button
                className="estgios10"
                sx={{ width: 124.8 }}
                color="primary"
                variant="text"
                onClick={onCandidaturasClick}
              >
                CANDIDATURAS
              </Button>
              <Button
                className="estgios10"
                sx={{ width: 215 }}
                color="primary"
                variant="text"
                onClick={onPeriodosDeEstagioClick}
              >
                PERÍODOS DE ESTÁGIOS
              </Button>
              <div className="perfissubmenu5">
                <div className="submenu5" data-animate-on-scroll>
                  <button className="empresas8" onClick={onEmpresasClick}>
                    Empresas
                  </button>
                  <div className="docentes8" onClick={onDocentesTextClick}>
                    Docentes
                  </div>
                  <div
                    className="administradores7"
                    onClick={onAdministradoresTextClick}
                  >
                    Administradores
                  </div>
                </div>
                <Button className="estgios11" color="primary" variant="text">
                  PERFIS
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isEditarAdminOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin}
        >
          <EditarAdmin onClose={closeEditarAdmin} />
        </PortalDrawer>
      )}
      {isEditarAdmin1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin1}
        >
          <EditarAdmin onClose={closeEditarAdmin1} />
        </PortalDrawer>
      )}
      {isEditarAdmin2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin2}
        >
          <EditarAdmin onClose={closeEditarAdmin2} />
        </PortalDrawer>
      )}
      {isEditarAdmin3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin3}
        >
          <EditarAdmin onClose={closeEditarAdmin3} />
        </PortalDrawer>
      )}
      {isEditarAdmin4Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin4}
        >
          <EditarAdmin onClose={closeEditarAdmin4} />
        </PortalDrawer>
      )}
      {isEditarAdmin5Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin5}
        >
          <EditarAdmin onClose={closeEditarAdmin5} />
        </PortalDrawer>
      )}
      {isEditarAdmin6Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin6}
        >
          <EditarAdmin onClose={closeEditarAdmin6} />
        </PortalDrawer>
      )}
      {isEditarAdmin7Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeEditarAdmin7}
        >
          <EditarAdmin onClose={closeEditarAdmin7} />
        </PortalDrawer>
      )}
      {isNovoAdmin2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoAdmin2}
        >
          <NovoAdmin onClose={closeNovoAdmin2} />
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
      {isNovoAdmin1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeNovoAdmin1}
        >
          <NovoAdmin onClose={closeNovoAdmin1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Administradores;
