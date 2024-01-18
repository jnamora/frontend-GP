import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onRegistarEmpresaContainerClick = useCallback(() => {
    navigate("/signinempresas");
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
    <div className="log-in1">
      <img className="log-in-icon1" alt="" src="/log-in@2x.png" />
      <img className="banner-icon" alt="" src="/banner@2x.png" />
      <div className="log-in2">
        <div className="frame6">
          <div className="frame7">
            <img className="login-icon" alt="" src="/login@2x.png" />
            <TextField
              className="insira-o-seu1"
              color="primary"
              label="Insira o seu e-mail"
              sx={{ width: 404 }}
              variant="outlined"
              multiline
            />
            <TextField
              className="insira-a-sua1"
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
            <div
              className="registar-empresa1"
              onClick={onRegistarEmpresaContainerClick}
            >
              <button className="registar-uma-empresa-container">
                <span className="registar-uma">{`Registar uma `}</span>
                <b className="empresa">Empresa</b>
              </button>
              <img
                className="registar-empresa-item"
                alt=""
                src="/vector-51.svg"
              />
            </div>
            <div className="frame-parent9" onClick={onFrameContainerClick}>
              <button className="entrar-wrapper" onClick={onFrameButtonClick}>
                <div className="entrar1">Entrar</div>
              </button>
              <div
                className="press-button12"
                onClick={onPressButtonContainerClick}
              >
                <button
                  className="entrar-container"
                  onClick={onFrameButton1Click}
                >
                  <div className="entrar2">Entrar</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
