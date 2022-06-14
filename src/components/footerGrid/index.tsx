import { Footergrid } from './style';
import { AiFillGithub } from 'react-icons/all';


export function FooterGrid() {
  return (
    <Footergrid>
      <a href="https://github.com/rogeriosouz" target="_blank">
        <AiFillGithub href='/' fontSize={25}/>
      </a>

      <a href="https://github.com/rogeriosouz" target="_blank">
        <p>feito por rogerio</p>
      </a>
    </Footergrid>
  );
}