import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./NewsBanner.module.css";

export const NewsBanner = ({ item }) => {
  
  return (
    <div className={s.wrapper_banner}>
      <div className={s.wrapper_img}>
        <img
          src={item.image}
          alt={item.title}
        />
      </div>
      <h3 className={s.title}>
        {item.title}
      </h3>
      <p className={s.date}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};