import styled from "styled-components";
import background from "../assets/background.avif"
export const Header = styled.div`
  height: 40vh;
  width: 100%;
  background-image: url(${background});
  display: flex;
  flex-direction: column;
align-items: center;
justify-content: space-around;
`;

export const Title = styled.h1`
font-weight: bold;
  color : whitesmoke;
  font-size: 36px;
  @media (max-width: 610px) {
    font-size: 28px;
  }
`;

export const Input = styled.input`
width: 35vw;
  height: 5vh;
`;

export const SearchButton = styled.img`
  position: absolute ;
  top : 20%;
  right: 2%;
  cursor: pointer;
`;

export const Settings = styled.div`
width: 36vw;
height: 10vh;
  display: flex;
justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    height: 15vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
 
`;
export const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
width: 20vw;

`;
export const Sort = styled.div`
width: 16vw;
  display: flex;
justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1300px) {
  width: 25vw;
  }

`;

export const MySpan = styled.span`
  margin-top : 3px ;
  color : white;
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 1300px) {
    margin-right: 20px;
   
  }
  @media (max-width: 610px) {
    margin-right: 20px;
    font-size: 15px;
  }
`;
export const SelectCategories = styled.select`
width: 10vw;
  height: 5vh;
  border: none;

`;

export const SelectSort = styled.select`
  width: 10vw;
  height: 5vh;
  border: none;
`;
