import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import PeriodosEstagio from "./pages/PeriodosEstagio";
import Estagios from "./pages/Estagios";
import CandidaturasAlunos from "./pages/CandidaturasAlunos";
import Docentes from "./pages/Docentes";
import Empresas from "./pages/Empresas";
import Administradores from "./pages/Administradores";
import HomePage from "./pages/HomePage";
import SignInEmpresas from "./pages/SignInEmpresas";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/periodos-estagio":
        title = "";
        metaDescription = "";
        break;
      case "/estagios":
        title = "";
        metaDescription = "";
        break;
      case "/candidaturasalunos":
        title = "";
        metaDescription = "";
        break;
      case "/docentes":
        title = "";
        metaDescription = "";
        break;
      case "/empresas":
        title = "";
        metaDescription = "";
        break;
      case "/administradores":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/signinempresas":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/periodos-estagio" element={<PeriodosEstagio />} />
      <Route path="/estagios" element={<Estagios />} />
      <Route path="/candidaturasalunos" element={<CandidaturasAlunos />} />
      <Route path="/docentes" element={<Docentes />} />
      <Route path="/empresas" element={<Empresas />} />
      <Route path="/administradores" element={<Administradores />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/signinempresas" element={<SignInEmpresas />} />
    </Routes>
  );
}
export default App;
