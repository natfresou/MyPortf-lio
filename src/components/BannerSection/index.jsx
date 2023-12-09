import style from "./style.module.css";
import banner from "../../assets/tech 05.jpg";



export const BannerSection = () => {
  return (
    <section className={style.section}>
      <div>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Meu nome é <span>Natália Freitas</span> e sou uma desenvolvedora Web Full Stack que se encantou pela programação e decidiu fazer uma transição de carreira. Vou adorar compartilhar conhecimento com quem tiver interesse e estou aberta a propostas de job.</p>
        < a  href={"#contatoFooter"}>
            <p>Vamos conversar?</p>
        </a>
      </div>
      <img src={banner} />
    </section>
  );
};
