import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --corPrimaria: #ffffffff;
    --corSecundaria: #000000ff;
    --fonteBase: 'Roboto', sans-serif;
    --fBaixa: 0.9rem;
    --fMedia: 1.2rem;
    --fAlta: 1.8rem;
    --fAltaG: 2.2rem;
    --fAltaGG: 2.8rem;
    --fAltaGGG: 3.2rem;
    --fAltaGGGG: 3.8rem;
    --fAltaX: 4.2rem;

    @media (max-width: 700px) {
       --fBaixa: 0.6rem;
    --fMedia: 0.9rem;
    --fAlta: 1.5rem;
    --fAltaG: 1.9rem;
    --fAltaGG: 2.5rem;
    --fAltaGGG: 2.9rem;
    --fAltaGGGG: 3.5rem;
    --fAltaX: 3.9rem;
    }
    @media (max-width: 600px) {
    --fAlta: 1.5rem;
    --fAltaG: 1.5rem;
    --fAltaGG: 1.7rem;
    --fAltaGGG: 1.9rem;
    --fAltaGGGG: 2.5rem;
    --fAltaX: 2.9rem;
    }
        @media (max-width: 450px) {
    --fAltaG: 1.2rem;
     --fAltaX: 2.2rem;
    }
          @media (max-width: 350px) {
     --fAltaX: 1.8rem;
    }
  }
html, body, #root {
   height: 100%;
  margin: 0;
  padding: 0;
}



* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: var(  --fonteBase)
}

li {
  list-style: none;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyle;
