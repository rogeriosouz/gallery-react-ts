import { Dispatch, SetStateAction, useState } from 'react';
import { FooterGrid } from '../footerGrid';
import { GridFhotos } from '../gridFhotos';
import { HeaderGrid } from '../headerGrid';
import { Container, ContainerFooter, ContainerFhotosGrid } from './style';

type Props = {
  fhotos: string[];
  fhoto: number;
  onclickImg: any;
  setMenu?: any;
}

export function Menu(props: Props) {
  const [clickImg, setClickImg] = useState(false);

  return (
    <Container visibilit={clickImg}>
      <HeaderGrid />
        <ContainerFhotosGrid>
          <GridFhotos 
            onClick={() => {
              setClickImg(value => !value);
              props.setMenu(false)
            }} 
            fhoto={props.fhoto} 
            fhotos={props.fhotos} 
            onclickImg={props.onclickImg} 
          />
        </ContainerFhotosGrid>
      <ContainerFooter>
        <FooterGrid />
      </ContainerFooter>
    </Container>
  );
}