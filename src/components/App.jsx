import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import { lazy } from "react";

const Header = lazy(() => import("./blocs/header/header"));
const Main = lazy(() => import("./blocs/main/main"));
const AboutMe = lazy(() => import("./blocs/aboutMe/aboutMe"));
const HardSkils = lazy(() => import("./blocs/hardSkils/hardSkils"));
const Contacts = lazy(() => import("./blocs/contacts/contacts"));
const Portfolio = lazy(() => import("./blocs/portfolio/portfolio"));

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Portfolio />
      <HardSkils/>
      <Contacts />
      <GlobalStyled />
    </>
  );
};
