import style from "./style.module.css";
import git from "../../assets/git-icon.png";

export const ProjectCard = ({ name, descricao,pLink }) => {
  return (
    <li className={style.card}>
      <div>
        <h3>{name}</h3>
        <img src={git} alt="imagem git" />
        <p>{descricao}</p>
        <a id="projectLink" href={pLink}>Saiba mais</a>
      </div>
    </li>
  );
};
