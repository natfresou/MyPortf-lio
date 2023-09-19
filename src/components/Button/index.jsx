import style from "./style.module.css";

export const Button = ({children}) => {
  return <button className={style.button}>{children}</button>;
};
