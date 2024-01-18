import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignInEmpresas.css";

const SignInEmpresas = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onRegistarEmpresaContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onPressButtonContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="sign-in-empresas">
      <img className="log-in-icon" alt="" src="/log-in@2x.png" />
      <img
        className="captura-de-ecra-2023-12-09-a"
        alt=""
        src="/captura-de-ecra-20231209-as-0015-1@2x.png"
      />
      <div className="log-in">
        <div className="frame4">
          <div className="frame5">
            <img
              className="captura-de-ecra-2023-12-09-a1"
              alt=""
              src="/captura-de-ecra-20231209-as-0015-3@2x.png"
            />
            <TextField
              className="insira-o-seu"
              color="primary"
              label="Insira o seu e-mail"
              sx={{ width: 404 }}
              variant="outlined"
              multiline
            />
            <TextField
              className="insira-a-sua"
              color="primary"
              label="Insira a sua password"
              sx={{ width: 404 }}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="insira-o-nif"
              color="primary"
              label="Insira o NIF da sua empresa"
              sx={{ width: 404 }}
              variant="outlined"
              multiline
            />
            <div
              className="registar-empresa"
              onClick={onRegistarEmpresaContainerClick}
            >
              <button className="j-tenho-conta-container">
                <span className="j-tenho-conta">{`Já tenho conta, `}</span>
                <b className="entrar">Entrar</b>
              </button>
              <img
                className="registar-empresa-child"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className="frame-parent8" onClick={onFrameContainerClick}>
              <button className="criar-wrapper" onClick={onFrameButtonClick}>
                <div className="criar">Criar</div>
              </button>
              <div
                className="press-button11"
                onClick={onPressButtonContainerClick}
              >
                <button
                  className="criar-container"
                  onClick={onFrameButton1Click}
                >
                  <div className="criar1">Criar</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInEmpresas;
