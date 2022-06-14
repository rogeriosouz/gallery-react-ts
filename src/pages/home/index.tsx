import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, AiOutlineMenu } from "react-icons/all";
import { FooterGrid } from '../../components/footerGrid';
import { GridFhotos } from '../../components/gridFhotos';
import { HeaderGrid } from '../../components/headerGrid';
import { Menu } from '../../components/menu';

import foto1 from '../../styles/imgs/foto1.jpg';
import foto2 from '../../styles/imgs/foto2.jpg';
import foto3 from '../../styles/imgs/foto3.png';
import foto4 from '../../styles/imgs/foto4.png';


import {
  Container,
  Fhotos,
  ContainerFhotos,
  ButtonLeft,
  ContainerFhoto,
  ButtonRight,
  ContentGrid,
  ButtonHamburg
} from './style';

export function Home() {
  const [fhoto, setFhoto] = useState(0);
  const [menu, setMenu] = useState(false);

  const fhotos = [foto1, foto2, foto3, foto4];

  if(fhoto > fhotos.length - 1) {
    setFhoto(0);
  }

  if(fhoto < 0) {
    setFhoto(fhotos.length - 1);
  }

  return (
    <Container>
      {menu && (
        <Menu setMenu={setMenu} fhoto={fhoto} fhotos={fhotos} onclickImg={setFhoto}/>
      )}
      <ContainerFhoto> 
          <ButtonHamburg onClick={() => setMenu((m) => !m)}>
            <AiOutlineMenu fontSize={30} color='#6c6c6c'/>
          </ButtonHamburg>

          <Fhotos>
            <img src={fhotos[fhoto]} />
          </Fhotos>

          <ButtonLeft>
            <button>
              <IoIosArrowBack 
                color='#6c6c6c'
                fontSize={50} 
                onClick={() => setFhoto(value => value - 1)}
              />
            </button>
          </ButtonLeft>

          <ButtonRight>
            <button>
              <IoIosArrowForward 
                color='#6c6c6c'
                fontSize={50} 
                onClick={() => setFhoto(value => value + 1)}
              />
            </button>
          </ButtonRight>
      </ContainerFhoto>
      <ContainerFhotos>
        <HeaderGrid />
        <ContentGrid>
          <GridFhotos fhoto={fhoto} fhotos={fhotos} onclickImg={setFhoto}/>
        </ContentGrid>
        <FooterGrid />
      </ContainerFhotos>
    </Container>
  );
}