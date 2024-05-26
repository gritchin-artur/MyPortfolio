import styled from "styled-components";

export const HardSkilsContainer = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 20px;
  box-sizing: border-box;
  background: #808080ad;

  .TitleHardSkils {
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    font-family: serif;
    font-family: "emoji";
  }

  .SkilsList {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .SkilsElement {
    cursor: pointer;
    padding: 10px 50px;
    border: 2px solid black;
    border-radius: 10px;
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 10px;

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 1.2);
    }
  }

  .Img {
    width: 50px;
    height: 50px;
  }

  .TextSkil {
    font-size: 10px;
    font-weight: 900;
  }

  .TitleSoftSkils {
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    font-family: serif;
    font-family: "emoji";
    margin-top: 50px;
  }

  .SoftSkilsListContainer{
    display: flex;
    justify-content: center;
  }

  .SoftSkilsList{
    /* display: flex;
    gap: 50px;
    flex-wrap: wrap; */
      display: grid;
  grid-template-columns: 1fr 1fr;  
  gap: 10px;  
  list-style: none; 
  padding: 0; 
  margin-top: 50px; 
  column-gap: 20%;
  }

  .SoftSkilsItem {
    position: relative;
    &::before {
      content: "";
      border-radius: 50%;
      border: 2px solid black;
      position: absolute;

      top: 8px;
      left: -10px;
    }
  }
`;
