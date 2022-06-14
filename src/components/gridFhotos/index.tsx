import { Dispatch, SetStateAction } from 'react';
import { Gridfhotos, Img } from './style';

type Props = {
  fhotos: string[];
  fhoto: number;
  onclickImg: Dispatch<SetStateAction<number>>;
  onClick?: any;
}

export function GridFhotos(props: Props) {
  return (
    <Gridfhotos>
      {props.fhotos.map((foto, index) => {
        if(foto === props.fhotos[props.fhoto]) {
          return (
            <div key={foto} onClick={() => props.onClick()}>
              <Img 
                src={foto} 
                Fundo='#6c6c6c' 
                onClick={() => props.onclickImg(index)}
              />
            </div>
          )
        } else {
          return (
            <div key={foto} onClick={() => props.onClick()}>
                <Img 
                  src={foto} 
                  Fundo='transparent'
                  onClick={() => props.onclickImg(index)}
                />
            </div>
          )
        }
      })}
    </Gridfhotos>
  )
}