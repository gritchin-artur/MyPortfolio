import styled from "styled-components";

export const PortfolioContainer = styled.div`
  width: 100%;
  padding: 50px 30px;
  box-sizing: border-box;

  .TitleMyProject {
    margin-top: 20px;
    text-align: center;
    font-family: math;
    font-weight: 900;
    font-size: xxx-large;
  }

  .ProjectList {
    display: flex;
  }

  .ProjectItem {
    padding: 20px;
    display: block;
    background: linear-gradient(to bottom right, #8080804d, white);
    border-radius: 10px;
    width: 50%;
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-areas:
        "t i"
        "t i"
        "t i"
        "l l";
    }
  }

  .TitleProject {
    align-items: center;
    font-family: math;
    font-weight: 900;
    font-size: 30px;
  }

  .PicturesContainer {
    width: 100%;
    @media only screen and (min-width: 768px) {
      grid-area: t;
    }
  }

  .Description {
    margin-top: 10px;
    max-height: 150px;
    overflow: auto;
    font-family: math;
    font-weight: 900;
    font-size: 12px;

    @media only screen and (min-width: 768px) {
      max-height: 250px;
    }
  }

  .Img {
    cursor: pointer;
    border-radius: 10px;
    width: 100%;

    margin-top: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);

    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02) rotate(-2deg);
    }

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
      margin-left: 10px;
    }
  }

  .Role {
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;

    color: grey;
    margin-top: 10px;
    text-align: center;
  }

  .ImageContainer {
    @media only screen and (min-width: 768px) {
      grid-area: i;
    }
  }

  .LinkList {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
  }

  .LinkItem {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;

    color: gray;
    padding: 5px;
    border: 2px solid grey;
    border-radius: 10px;
    text-decoration: none;

    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1) rotate(-2deg);
    }
  }

  .TechnologieList {
    display: flex;
    gap: 10px;
    margin-top: 20px;

    width: 100%;
    flex-wrap: wrap;

    @media only screen and (min-width: 768px) {
      grid-area: l;
    }
  }

  .TechnologieElement {
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;

    border-radius: 10px;
    border: solid 2px;
    padding: 5px;
    box-sizing: border-box;
    white-space: nowrap;
  }
`;

export const BackdropStyle = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;

  .ModalDiv {
    border-radius: 10px;
    max-width: calc(100vw - 15%);
    max-height: calc(100vh - 15%);
  }
`;
