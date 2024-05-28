import styled from "styled-components";

export const HeaderMainContainer = styled.div`
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  border-radius: 5px;
  box-sizing: border-box;
    display: flex;
    align-items: center;
  position: fixed;
  z-index: 1000;
  justify-content: center;
  margin-top: 10px;


  .HeaderList {
    display: flex;
    list-style: none;
    max-width: 500px;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
    color: white;
    font-size: larger;
     backdrop-filter: blur(8px);
     border-radius: 20px;
padding: 20px 40px;
     gap: 30px;
    @media only screen and (max-width: 768px) {
      display: none;
    }

      @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }

  .HeaderItem {
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .HeaderItem.active {
  color: black;
}

  .LinkToContainer {
    text-decoration: none;
    /* color: #fff; */

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .BurgerMenu {
    @media only screen and (max-width: 768px) {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      z-index: 1000;
    }
  }

  .BurgerLine {
    @media only screen and (max-width: 768px) {
      width: 30px;
      height: 4px;
      background-color: white;
      transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;

      ${({ open }) =>
        open &&
        `
    &:nth-child(1) {
      transform: rotate(45deg);
            margin-top: 9px;
            height: 200px;
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      margin-bottom: 9px;
      height: 200px;
    }
  `}
    }
  }
`;

export const ModalWindow = styled.div`
display: none;
  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: transform 0.5s ease, visibility 0.5s ease;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};

    .HeaderList {
      display: grid;
      gap: 20px;
    }

    .HeaderItem {
      font-size: 25px;
      font-weight: 800;
      text-align: center;
      font-family: serif;
    }
  }
`;
