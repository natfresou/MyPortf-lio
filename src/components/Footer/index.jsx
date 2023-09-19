import style from "./style.module.css";
import { user } from "../../data/user";
import whatsapp from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";
import { Texto } from "../Texto";
import { Title } from "../Title";

export const Footer = () => {
  return (
    <footer id="contatoFooter">
      <div className={style.rodape1}>
        <Title text="Contato" />
        <div>
          <a href="https://www.linkedin.com/in/nat%C3%A1lia-freitas-8bb51426b/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/natfresou">
          <img src={github} alt="github" />
          </a>
          {/* <img src={linkedin} alt="linkedin" />
          <img src={github} alt="" /> */}
        </div>
      </div>
      <div className={style.rodape2}>
        <Texto text="Todos os direitos reservados - " />
        <Texto text={user} />
      </div>
    </footer>
  );
};
