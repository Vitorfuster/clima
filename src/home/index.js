// Bibliotecas
import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Styled
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import {
  ContainerGeral,
  ConteudoMain,
  TituloMain,
  PesquisaBar,
  Barra,
  BotaoBarra,
  PesquisaContainer,
  ResultadoContainer,
  SubTituloMain,
  LocalidadeContainer,
  LocalidadePrimaria,
  InfoDinamico,
  InfoDinamicoLista,
  InfoDinamicoItem,
  SubTituloInfo,
  Localidade,
  InfoDiasTemp,
  InfoDiasLi,
} from "./style";

function Home() {
  const [climaDados, climaState] = useState([]);

  const [pesquisaDados, pesquisaState] = useState([]);

  const [tempDays, tempDaysState] = useState([]);

  const pesquisaTexto = useRef();

  const pesquisar = async () => {
    const cidadepesquisada = pesquisaTexto.current.value;
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=7e60ecf0d2874ac8a5a223638250508&q=${cidadepesquisada}&days=6&lang=pt`
      );

      const cidadePais = data.location.country;
      const cidadeEstado = data.location.region;
      const cidadeNome = data.location.name;
      const tempMaxima = data.forecast.forecastday[0].day.maxtemp_c;
      const tempMinima = data.forecast.forecastday[0].day.mintemp_c;
      const tempAtual = data.current.temp_c;
      const tempSensacao = data.current.feelslike_c;
      const ventoKm = data.current.vis_km;
      const tempHumidade = data.current.humidity;
      const condicaoClimatica = data.current.condition.text;

      const cidadeClima = {
        cidadePais,
        cidadeEstado,
        cidadeNome,
        tempMaxima,
        tempMinima,
        tempAtual,
        tempSensacao,
        ventoKm,
        tempHumidade,
        condicaoClimatica,
      };

      const attTempDayArray = [];
      data.forecast.forecastday.map((day, index) => {
        if (index >= 1) {
          const data = format(new Date(day.date), "EEEE", {
            locale: ptBR,
          });
          const min = day.day.mintemp_c;
          const max = day.day.maxtemp_c;
          const minMax = { data, min, max };
          attTempDayArray.push(minMax);
        }
      });

      tempDaysState(attTempDayArray);

      pesquisaState([cidadeClima]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cidadesPadrao.map((cidade) => {
      const BuscarClima = async () => {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=7e60ecf0d2874ac8a5a223638250508&q=${cidade}&days=1&lang=pt`
        );
        const tempMaxima = data.forecast.forecastday[0].day.maxtemp_c;
        const tempMinima = data.forecast.forecastday[0].day.mintemp_c;
        const cidadeTemperatura = { nome: cidade, tempMaxima, tempMinima };

        climaState((prev) => [...prev, cidadeTemperatura]);
      };
      BuscarClima();
    });
  }, []);

  const cidadesPadrao = [
    "Rio de Janeiro",
    "São Paulo",
    "Belo Horizonte",
    "Brasília",
    "Belém",
    "Salvador",
    "Curitiba",
    "Fortaleza",
    "Manaus",
    "João Pessoa",
  ];

  return (
    <ContainerGeral>
      <ConteudoMain>
        <PesquisaContainer>
          <TituloMain>Previsão do tempo</TituloMain>
          {pesquisaDados.map((pesquisa, index) => (
            <InfoDinamico key={index}>
              <Localidade>
                {pesquisa.cidadeNome}, {pesquisa.cidadeEstado} -{" "}
                {pesquisa.cidadePais}
              </Localidade>
              <SubTituloInfo>
                {pesquisa.tempAtual.toFixed(0)}°C {pesquisa.condicaoClimatica}
              </SubTituloInfo>
              <InfoDinamicoLista>
                <InfoDinamicoItem>
                  <span>
                    <FaArrowDown size={16} color="#ff7a21ff" />{" "}
                    {pesquisa.tempMinima.toFixed(0)}°
                  </span>
                  <span>
                    <FaArrowUp size={16} color="#ff7a21ff" />{" "}
                    {pesquisa.tempMaxima.toFixed(0)}°
                  </span>
                </InfoDinamicoItem>
                <InfoDinamicoItem>
                  <span>Sensação:</span>
                  <span className="spanResponse">
                    {pesquisa.tempSensacao.toFixed(0)}°C
                  </span>
                </InfoDinamicoItem>
                <InfoDinamicoItem>
                  <span>Vento:</span>
                  <span className="spanResponse">{pesquisa.ventoKm}Km/h</span>
                </InfoDinamicoItem>
                <InfoDinamicoItem>
                  <span>Humidade:</span>
                  <span className="spanResponse">
                    {pesquisa.tempHumidade.toFixed(0)}%
                  </span>
                </InfoDinamicoItem>
              </InfoDinamicoLista>
              <InfoDiasTemp>
                {tempDays.map((day, index) => (
                  <InfoDiasLi key={index}>
                    <h3>{day.data}</h3>
                    <div>
                      <span>{day.min.toFixed(0)}°</span>
                      <span>{day.max.toFixed(0)}°</span>
                    </div>
                  </InfoDiasLi>
                ))}
              </InfoDiasTemp>
            </InfoDinamico>
          ))}
          <PesquisaBar>
            <Barra
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  pesquisar();
                }
              }}
              ref={pesquisaTexto}
              placeholder="Insira aqui o nome da cidade"
            />
            <BotaoBarra onClick={pesquisar}>
              <FiSearch size={30} color="#666" />
            </BotaoBarra>
          </PesquisaBar>
        </PesquisaContainer>
        <ResultadoContainer>
          <LocalidadeContainer>
            <LocalidadePrimaria>
              <SubTituloMain>Capitais</SubTituloMain>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Min</th>
                      <th>Max</th>
                      <th>Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    {climaDados
                      .filter((_, index) => index < 5)
                      .map((cidade, index) => (
                        <tr key={index}>
                          <td>{cidade.tempMaxima.toFixed(0)}°</td>
                          <td>{cidade.tempMinima.toFixed(0)}°</td>
                          <td>{cidade.nome}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Min</th>
                      <th>Max</th>
                      <th>Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    {climaDados
                      .filter((_, index) => index >= 5 && index <= 10)
                      .map((cidade, index) => (
                        <tr key={index}>
                          <td>{cidade.tempMaxima.toFixed(0)}°</td>
                          <td>{cidade.tempMinima.toFixed(0)}°</td>
                          <td>{cidade.nome}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </LocalidadePrimaria>
          </LocalidadeContainer>
        </ResultadoContainer>
      </ConteudoMain>
    </ContainerGeral>
  );
}

export default Home;
