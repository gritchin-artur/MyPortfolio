import styled from "styled-components";
import backgraundImg from "../../../img/imgonline-com-ua-Black-White-hb0WXheGwe.jpg";

export const ContactsContainer = styled.div`
  width: 100%;
  background-image: url(${backgraundImg});
 height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: grid;
   gap: 50px;
   padding-bottom: 20px;

        @media only screen and (min-width: 768px) {
    display: flex;
 height: 500px;
 
  }

  .ContentContainer {
    height: 100%;
    /* width: 100%; */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(10px);
          display: flex;
      gap: 20px;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
    @media only screen and (min-width: 768px) {
       width: 30%;
    }
  }

  .ContactContainer {
    display: grid;
    align-items: center;
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
    color: white;
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
    color: #ffffffbd;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }

  .Contact {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  .CreatedBy{
    color: #ffffffbd;
  }

  .FormContainer{
    width: 100%;
    height: 100%;
display: flex;
justify-content: center;
align-items: center;
  }

  .Form{
display: grid;
gap: 20px;
  }

  .TitleForm{
        font-size: 2.3rem;
    font-weight: 600;
    font-family: emoji;
    color: #fff;

  }

  .InputEmail{
height: 40px;
width: 350px;
border-radius: 10px;
padding: 10px;
    box-sizing: border-box;
    border: none;
     background-color: rgba(255, 255, 255, 0.2); /* Прозрачный цвет */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

            font-size: 1.2rem;
    font-weight: 600;
    color: #fff;

    &:focus {
      outline: none;
    }
    &::placeholder {
    color: white; 
}
  }

  .InputMessage{
width: 350px;
height: 200px;
border-radius: 10px;
padding: 10px;

    box-sizing: border-box;
    border: none;
     background-color: rgba(255, 255, 255, 0.2); /* Прозрачный цвет */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

                font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
 
    &:focus {
      outline: none;
    }

        &::placeholder {
    color: white; 
}
  }

  .ButtonSubmit{
height: 40px;
width: 150px;
border-radius: 10px;
border: none;

font-size: 1.2rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

        transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 1.2);
    }
  }
`;
