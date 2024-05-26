import styled from "styled-components";
import backgraundImg from "../../../img/imgonline-com-ua-Black-White-hb0WXheGwe.jpg";

export const ContactsContainer = styled.div`
width: 100%;
  background-image: url(${backgraundImg});
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
      box-sizing: border-box;

  .ContentContainer {
    /* margin-top: 50px; */
    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 20px;
    }
  }

  .ContactContainer {
    /* margin-top: 30px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      width: 30%;
    } */
  }

  .ContactsTitle {
    font-size: 1.4rem;
    font-weight: 600;
    font-family: emoji;
  }

  .ContactsList {
    margin-top: 20px;
    display: grid;
    gap: 10px;
  }

  .ContactItem {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: emoji;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }

  .Contact {
    cursor: pointer;
    text-decoration: none;
    color: gray;
  }
`;
