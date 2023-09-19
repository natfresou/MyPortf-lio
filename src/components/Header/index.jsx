import "./style.css";
import { Button } from "../Button";
import portfolio from "../../assets/portfolio.png";

export const Header = () => {

  return (
    <header>
      <img src={portfolio} />
      <div>
      <a class="navLink" href={"#aboutMeSection"}>
            <p>Sobre</p>
        </a>
        <a class="navLink" href={"#techSection"}>
            <p>Tecnologias</p>
        </a>
        <a class="navLink" href={"#projectSection"}>
            <p>Projetos</p>
        </a>
        < a class="navLink" href={"#contatoFooter"}>
            <p>Contato</p>
        </a>
     
        </div>
    </header>
  );
};


  