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
          <a href="https://www.linkedin.com/in/nat%C3%A1lia-freitas-8bb51426b/" target="blank">
            <p>Linkedin</p>
          </a>
          <a href="https://github.com/natfresou" target="blank">
          <p>Github</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
