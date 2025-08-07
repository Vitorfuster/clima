import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ff7a21ff, #e0d201ff);
  height: 100vh;
  width: 100%;
  padding: 0px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const ConteudoMain = styled.main`
  display: grid;
  grid-template-rows: 1fr 1.3fr;
  justify-content: center;
  max-height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    grid-template-rows: none;
  }
  padding: 0px;
`;

export const PesquisaContainer = styled.div``;

export const TituloMain = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: var(--corPrimaria);
  font-family: var(--fonteBase);
  font-size: var(--fAltaX);
`;

// Informação Dinâmica

export const InfoDinamico = styled.div`
  background-color: #e7e7e7ff;
  padding: 10px 80px;
  margin-bottom: 30px;

  @media (max-width: 650px) {
    padding: 10px 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    padding: 10px 10px;
  }
`;

export const Localidade = styled.span`
  color: #646464ff;
  font-size: var(--fMedia);
  font-weight: 500;
  margin-bottom: 15px;
`;

export const SubTituloInfo = styled.h2`
  margin-bottom: 30px;
  color: #464646ff;
  font-family: var(--fonteBase);
  font-size: var(--fAltaGG);
  @media (max-width: 780px) {
    font-size: var(--fAltaG);
  }
`;

export const InfoDinamicoLista = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 35px;
`;

export const InfoDinamicoItem = styled.li`
  display: flex;
  gap: 10px;
  color: #646464ff;
  font-weight: 500;

  .spanResponse {
    color: #000;
  }
`;

export const InfoDiasTemp = styled.ul`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: orange;
    position: absolute;
    top: -15px;
  }
`;

export const InfoDiasLi = styled.li`
  h3 {
    font-size: var(--FMedia);
    color: #575757ff;
    margin-bottom: 3px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  span {
    font-size: var(--fBaixa);
    color: #ff7a21ff;
    font-weight: 600;
  }

  @media (max-width: 560px) {
    &:nth-child(5) {
      display: none;
    }
  }
  @media (max-width: 430px) {
    h3 {
      font-size: 0.8rem;
    }
  }
`;

// Pesquisa

export const PesquisaBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 120%;
    background-color: white;
    position: absolute;
    bottom: -30px;
  }

  @media (max-width: 900px) {
    &::after {
      width: 98%;
      background-color: white;
      position: absolute;
      bottom: -30px;
    }
  }
`;

export const Barra = styled.input`
  font-size: var(--fAlta);
  color: #3b3b3bff;
  width: 100%;
  border: none;
  padding: 10px;
  padding-left: 15px;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 300;
    font-size: var(--fAlta);
  }

  @media (max-width: 450px) {
    &::placeholder {
      font-weight: 300;
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const BotaoBarra = styled.button`
  background-color: white;
  border: none;
  padding: 0px 8px;
  cursor: pointer;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ResultadoContainer = styled.div``;

export const SubTituloMain = styled.h2`
  grid-column: 1 / -1;
  margin-bottom: 20px;
  color: var(--corPrimaria);
  font-family: var(--fonteBase);
  font-size: var(--fAltaG);
`;

export const LocalidadeContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 120px;
`;

export const LocalidadePrimaria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 10px;
  th {
    font-size: var(--fMedia);
    font-weight: 300;
    text-align: start;
    padding: 5px 10px;
  }
  td {
    font-size: var(--fMedia);
    font-weight: 700;
    padding: 5px 10px;
  }

  div + div {
    padding-left: 40px;
  }

  @media (max-width: 450px) {
    div + div {
      padding-left: 20px;
    }
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    width: 100%;
    grid-template-columns: 1fr;
    div + div {
      padding-left: 0px;
      th {
        display: none;
      }
      td + td {
        padding-left: 19px;
      }

      td + td + td {
        padding-left: 25px;
      }
    }
    th {
      font-size: 1.5rem;
    }
    td {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 350px) {
    th {
      font-size: 1.2rem;
    }

    td {
      font-size: 1.1rem;
    }
    div + div {
      td + td {
        padding-left: 14px;
      }
      td + td + td {
        padding-left: 18px;
      }
    }
  }
`;
