import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { dark, light } from "./styles/theme";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const theme = themeMode === "dark" ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
