import style from "./style.module.css";

export const ProjectCard = ({ name, descricao, pLink, techs, vLink }) => {
  return (
    <li className={style.card}>
      <div className="div_projectCard">
        <h3>{name}</h3>
        <h4>{techs}</h4>
        {/* <img src={git} alt="imagem git" /> */}
        <p>{descricao}</p>
        <div className="project_links">
          <a class="projectLink_codigo" href={pLink} target="blank">
            Acesse o Código
          </a>
          <div>
          {vLink ? (
            <a class="projectLink_vercel" href={vLink} target="blank">
              Experimente
            </a>
          ) : null}
          </div>
        </div>
      </div>
    </li>
  );
};
