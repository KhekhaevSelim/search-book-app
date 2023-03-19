import styled from "styled-components";
import exp from "constants";

export const ContentStyled = styled.div`
width: 100%;
background-color: #D0B6A7;
  //margin: 10px auto;
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  gap : 2%;
  margin: 0;
  padding: 0;
  @media (max-width: 960px) {
  }
  `;

export const ItemsStyled =styled.div`
width: 15vw;
  height: 40vh;
  background-color: #F3F2F1;
  display: flex;
  flex-direction: column;  
  padding: 1%;
  margin: 2%;
  border-radius: 20px;
  border: none;
  transition: transform 300ms ease;
  -webkit-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  -moz-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  &:hover {
    transform: scale(1.03)
  }
  @media (max-width: 960px) {
  width: 20vw;
  }
  @media (max-width: 780px) {
    width: 23vw;
  }
  @media (max-width: 666px) {
    width: 28vw;
  }
  @media (max-width: 450px) {
    width: 55vw;
  }
`;

export const ImageContainer = styled.div`
  width: 15vw;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 20vw;
  }
  @media (max-width: 780px) {
    width: 23vw;
  }
  @media (max-width: 666px) {
    width: 28vw;
  }
  @media (max-width: 450px) {
    width: 55vw;
  }
  
`;

export const ImageStyled = styled.img`
  width: 9vw;
  height: 25vh;
  border-radius: 10px;
  -webkit-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  -moz-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  @media (max-width: 960px) {
    width: 14vw;
  } 
  @media (max-width: 780px) {
  width: 20vw;
}
  @media (max-width: 666px) {
    width: 24vw;
  }
  @media (max-width: 450px) {
    width: 35vw;
  }
  
`;

export const DescriptionsStyled = styled.div`
    
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const CategoriesStyled = styled.p`
font-size: 12px;
  color : grey;
  text-decoration-line: underline;
  margin: 5% 0 5% 0  ;
`;

export const TitleStyled = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0;

`;

export const AuthorStyled = styled.p`
  font-size: 12px;
  color : grey;
  margin: 0;
`;

export const LoadMoreContainer = styled.div`
width: 90vw;
  display: flex;
  justify-content: center;
  
`;

export const LoadMore = styled.button`
width: 8vw;
  height: 5vh;
  background-color: #A78178;
  cursor: pointer;
  color : white;
  border-radius: 10px;
  border: none;
  -webkit-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  -moz-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  
`;

export const IsFetching = styled.img`
  position: fixed;
  top : 40%;
  left : 45%;
  width : 100px; 
  height : 100px;
  border: none;
`;


export const ItemContainer = styled.div`
width: 100%;
  height: 100vh;
  background-color: #896B61;
  top : 0;
  z-index: 999;
  display: flex;
  position: fixed;
  border-radius: 20px;
`;
export const ContainerByClose = styled.div`
width: 99%;
  height: 10px;
  display: flex;
  justify-content: flex-end;
`;
export const Close = styled.div`
  width: 8vw;
  height: 5vh;
  background-color: #A78178;
  cursor: pointer;
  color : white;
  border-radius: 10px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  -moz-box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
  box-shadow: 8px 4px 6px 0px rgba(77, 92, 103, 0.2);
`;

export const ItemLeftPart = styled.div`
width: 40%;
  height: 100vh;
  background-color: #B2968A;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 50%;
    height: 100vh;
  }
`;
export const FullBookImg = styled.img`
width: 60%;
  height: 70%;
  @media (max-width: 850px) {
    width: 70%;
    height: 60%;
  }
`;
export const ItemRightPart = styled.div`
width: 60%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5%;
  @media (max-width: 850px) {
    width: 50%;
    height: 100vh;
  }
  
`;
export const FullBookCategories = styled.span`
  font-size: 12px;
  color : grey;
margin-top: 5%;
`;
export const FullBookTitle = styled.span`
  font-size: 22px;
  color : black;
  font-weight: 700;

`;
export const FullBookAuthors = styled.span`
  font-size: 12px;
  color : #D2D2D2;
  text-decoration: underline;
`;
export const FullBookDescriptions = styled.span`
  font-size: 18px;
  color : black;
  font-weight: 700;
`;

