import style from "./style.module.css";

export const TechCard = ({ name, img }) => {
  return (
    <li className={style.card}>
      <img src={img} alt={`É uma imagem da tecnologia ${name}`} />
      <span>{name}</span>
    </li>
  );
};
