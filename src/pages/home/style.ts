import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ContainerFhoto = styled.div`
  min-width: 70%;
  min-height: 100vh;
  position: relative;
`;

export const Fhotos = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: relative;
  } 
`; 

export const ContainerFhotos = styled.div`
  min-width: 30%;
  height: 100vh;
  background-color: #fff;
  overflow: auto;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const ButtonRight = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: calc(100% - 60px);
  button {
    border: 0 none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
`;  

export const ButtonLeft = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0px;


  button {
    border: 0 none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
`;  


export const ContentGrid = styled.div`
  width: 100%;
  min-height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 5px;
`;


export const ButtonHamburg = styled.button`
  position: absolute;
  left: 90%;
  top: 20px;
  z-index: 3;
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
  display: none;

  @media (max-width: 630px) {
    display: block;
  }

  @media (max-width: 376px) {
    left: 84%;
  }
`;