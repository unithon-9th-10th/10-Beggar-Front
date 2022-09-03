import "../styles/globals.css";
import "../styles/svg.image.css";
import styled from "styled-components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Content>
      <Component class="main" {...pageProps} />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  margin: auto;
`;

export default MyApp;
