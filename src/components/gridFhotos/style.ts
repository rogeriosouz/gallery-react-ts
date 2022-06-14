import styled from 'styled-components';


export const Gridfhotos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;

  @media (max-width: 835px) {
    grid-template-columns: 1fr;
  }

  div {
    width: 150px;
    margin: auto;

    @media (max-width: 1024px) {
      width: 140px;
    }
    @media (max-width: 936px) {
      width: 120px;
    }
    @media (max-width: 835px) {
      width: 170px;
    }
  }

`;

type Foto = {
  Fundo: string;
}

export const Img = styled.img<Foto>`
  width: 100%;
  border-radius: 1px; 
  height: 100px;
  border: 2px solid ${props => props.Fundo ? props.Fundo : '#fff'};
  cursor: pointer;
`;
