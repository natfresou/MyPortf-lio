import style from "./style.module.css";
import { username } from "../../data/user";
import { Button } from "../Button";
import banner from "../../assets/tech 05.jpg";

import { Texto } from "../Texto";

export const BannerSection = () => {
  return (
    <section className={style.section}>
      <div>
        <span>{username}</span>
        <h1>Bem vindo ao meu portfólio</h1>
        <Texto text="Sou uma desenvolvedora Web Full Stack que se encantou pela programação e decidiu fazer uma transição de carreira. Iniciei minha jornada pelo FrontEnd e agora estou explorando o BackEnd. Vou adorar compartilhar conhecimento com quem tiver interesse e estou aberta a propostas de job ;)" />
        < a  href={"#contatoFooter"}>
            <p>Saiba Mais</p>
        </a>
      </div>
      <img src={banner} />
    </section>
  );
};
