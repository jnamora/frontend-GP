import { useEffect } from "react";
import { Select, Stack } from "@chakra-ui/react";
import "./EditarRankingJuri.css";

const EditarRankingJuri = ({ onClose }) => {
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
  return (
    <div className="editar-ranking-juri" data-animate-on-scroll>
      <div className="editar-ranking-juri-child" />
      <button className="adicionar-presidente">
        <p className="adicionar">Adicionar</p>
        <p className="adicionar">Presidente</p>
      </button>
      <input
        className="editar-ranking-juri-item"
        placeholder="JÚRI ARGUENTE  "
        type="text"
      />
      <div className="editar-ranking-juri-inner">
        <div className="jri-wrapper">
          <div className="jri">Júri</div>
        </div>
      </div>
      <input
        className="editar-ranking-juri-child1"
        placeholder="JÚRI VOGAL"
        type="text"
      />
      <input
        className="editar-ranking-juri-child2"
        placeholder="ORIENTADOR"
        type="text"
      />
      <div className="editar-dados-jri-container">
        <b>{`Editar/ `}</b>
        <span className="dados-jri">Dados Júri</span>
      </div>
      <button className="group-button" onClick={onClose}>
        <img className="group-child3" alt="" src="/vector-3.svg" />
        <img className="group-child3" alt="" src="/vector-4.svg" />
      </button>
      <div className="frame-container" onClick={onClose}>
        <button className="guardar-alteraes-wrapper3" onClick={onClose}>
          <div className="guardar-alteraes6">Guardar Alterações</div>
        </button>
        <div className="press-button3" onClick={onClose}>
          <button className="guardar-alteraes-wrapper4" onClick={onClose}>
            <div className="guardar-alteraes7">Guardar Alterações</div>
          </button>
        </div>
      </div>
      <button className="adicionar-presidente1">
        <p className="adicionar">Adicionar</p>
        <p className="adicionar">Presidente</p>
      </button>
      <button className="adicionar-presidente2">
        <p className="adicionar">Adicionar</p>
        <p className="adicionar">Presidente</p>
      </button>
      <div className="editar-ranking-juri-child3" />
      <div className="editar-ranking-juri-child4" />
      <div className="editar-ranking-juri-child5" />
      <div className="distribuicao-docentes">
        <div className="distribuio-docentes">Distribuição Docentes</div>
        <input className="distribuicao-docentes-child" type="search" />
        <b className="pesquisa">PESQUISA</b>
        <Stack className="wrapper1" w="398px">
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
        <b className="perodo-de-estgio4">PERÍODO DE ESTÁGIO</b>
        <b className="docentes-por-pgina-container">
          <p className="adicionar">DOCENTES</p>
          <p className="adicionar">POR PÁGINA</p>
        </b>
        <Stack className="wrapper2" w="102px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </Select>
        </Stack>
      </div>
      <div className="selecionar">
        <b className="rea-de-especialidade2">ÁREA DE ESPECIALIDADE</b>
        <b className="ordenar-por">ORDENAR POR</b>
        <b className="tipo-de-visualizao">TIPO DE VISUALIZAÇÃO</b>
        <b className="filtrar">FILTRAR</b>
        <Stack className="wrapper3" w="316px">
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
        <Stack className="wrapper4" w="237px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="Carga (Decrescente)">Carga (Decrescente)</option>
            <option value="Carga (Ascendente)">Carga (Ascendente)</option>
          </Select>
        </Stack>
        <Stack className="wrapper5" w="147px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="Por papel">Por papel</option>
            <option value="Opção 2">Opção 2</option>
          </Select>
        </Stack>
        <Stack className="wrapper6" w="102px">
          <Select
            variant="flushed"
            size="lg"
            textColor="#000"
            backgroundColor="#fff"
            borderColor="#1196db"
            focusBorderColor="#1196db"
          >
            <option value="Jurí">Jurí</option>
            <option value="Opção 2">Opção 2</option>
          </Select>
        </Stack>
      </div>
      <div className="lugares">
        <b className="nome">NOME</b>
        <div className="antnio-cunha">António Cunha</div>
        <div className="antnio-cunha1">António Cunha</div>
        <div className="antnio-cunha2">António Cunha</div>
        <div className="antnio-cunha3">António Cunha</div>
        <div className="andr-perrota">André Perrota</div>
        <div className="andr-perrota1">André Perrota</div>
        <div className="andr-perrota2">André Perrota</div>
        <div className="andr-perrota3">André Perrota</div>
        <div className="carlos-fonseca">Carlos Fonseca</div>
        <div className="carlos-laranjeiro">Carlos Laranjeiro</div>
        <div className="lugares-child" />
        <div className="lugares-item" />
        <div className="lugares-inner" />
        <div className="lugares-child1" />
        <div className="lugares-child2" />
        <div className="orientador-do-dei">ORIENTADOR DO DEI</div>
        <div className="jri-argunte">JÚRI ARGUNTE</div>
        <div className="jri-vogal">JÚRI VOGAL</div>
        <div className="orientador-empresa">ORIENTADOR EMPRESA</div>
        <div className="segundo-orientador-do-container">
          <span>SEGUNDO ORIENTADOR DO DE</span>
          <span className="dados-jri">I</span>
        </div>
        <b className="b">10</b>
        <b className="b1">10</b>
        <b className="b2">10</b>
        <b className="b3">10</b>
        <b className="b4">10</b>
        <b className="b5">8</b>
        <b className="b6">4</b>
        <b className="b7">6</b>
        <b className="b8">10</b>
        <b className="b9">10</b>
        <div className="block">
          <div className="block-child" />
          <b className="b10">2</b>
        </div>
        <div className="block1">
          <div className="block-item" />
          <b className="b10">0</b>
        </div>
        <div className="block2">
          <div className="block-item" />
          <b className="b10">0</b>
        </div>
        <div className="block3">
          <div className="block-item" />
          <b className="b10">0</b>
        </div>
        <div className="block4">
          <div className="block-item" />
          <b className="b10">0</b>
        </div>
        <div className="block5">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block7">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block9">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block11">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block13">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block15">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block17">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block19">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block21">
          <div className="block-child7" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child7" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block23">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block25">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block27">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block29">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block31">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block33">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block35">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block37">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block39">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block41">
          <div className="block-child21" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child21" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block43">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block45">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block47">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block49">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block51">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block53">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block55">
          <div className="block-child5" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child5" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block57">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block59">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block61">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block63">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block65">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block67">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block69">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="block71">
          <div className="block-child3" />
          <b className="b10">2</b>
          <div className="block6">
            <div className="block-child3" />
            <b className="b10">2</b>
          </div>
        </div>
        <div className="lugares-child3" />
        <div className="lugares-child4" />
        <div className="lugares-child5" />
        <div className="lugares-child6" />
        <div className="lugares-child7" />
        <div className="lugares-child8" />
        <div className="lugares-child9" />
        <b className="b83">2</b>
        <b className="b84">2</b>
        <b className="b85">2</b>
        <b className="b86">2</b>
        <b className="b87">2</b>
        <b className="b88">2</b>
        <b className="b89">2</b>
        <div className="colors">
          <div className="colors-child" />
          <b className="b90">1</b>
          <div className="colors-item" />
        </div>
        <div className="colors1">
          <div className="colors-inner" />
          <b className="b90">1</b>
          <div className="colors-item" />
        </div>
        <div className="colors2">
          <div className="colors-child2" />
          <b className="b90">1</b>
          <div className="colors-item" />
        </div>
        <div className="colors3">
          <div className="colors-child4" />
          <b className="b90">1</b>
          <div className="colors-item" />
        </div>
      </div>
      <b className="pgina-1-de">PÁGINA 1 DE 2</b>
      <button className="prxima-pgina-wrapper">
        <b className="prxima-pgina">Próxima Página</b>
      </button>
    </div>
  );
};

export default EditarRankingJuri;
