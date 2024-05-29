import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 526px;
  /* border: 1px solid red; */
  /* background: gray; */
  background: linear-gradient(to bottom right, black, gray);
  justify-content: space-around;
  padding: 100px 30px 0 30px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    display: grid;
    gap: 20px;
    height: 1000px;
  }

  .ContentContainer{
    box-sizing: border-box;
  }

  .MyPhoto {
    max-width: 400px;
    @media only screen and (max-width: 500px) {
      max-width: 338px;
      max-height: 372px;
    }
  }

  .MyCVContainer {
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    border: 3px solid #fff;
    border-radius: 10px;
    box-sizing: border-box;
    width: 166px;
    margin-top: 30px;

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .TitleContainer {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    color: #fff;
    font-size: xxx-large;
  }

  .TitleDeveloper {
    font-family: Roboto, sans-serif;
    color: #323232;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    font-family: Roboto, sans-serif;
    font-size: 33px;
    font-weight: 900;
    line-height: 1.2;

        @media only screen and (max-width: 500px) {
margin: 0;
    }
  }

  .TitleIconContacts {
  }

  .ContactsList {
    display: grid;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .List {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ContactsItem {
    cursor: pointer;
    /* border-radius: 50%;
    background-color: #fff;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center; */

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
