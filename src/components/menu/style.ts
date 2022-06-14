import styled from 'styled-components';

type Props = {
  visibilit: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;


  display: ${props => props.visibilit ? 'none' : 'flex'};
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  overflow: auto;

  @media (min-width: 630px) {
    display: none;
  }
`;

export const ContainerFooter = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerFhotosGrid = styled.div`
  margin-top: 20px;

  div {
    min-width: 100px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media (max-width: 375px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 170px;
    }
  }
`;