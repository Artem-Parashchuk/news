import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./NewsItem.module.css";

export const NewsItem = ({ title, published, author, image }) => {
  return (
    <li className={s.item}>
      <div className={s.item_content}>
        <div className={s.img_block}>
          <img
            src={image}
            alt={`Image ${title}`}
          />
        </div>
        <div className={s.item_description}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.date}>
            {formatTimeAgo(published)} by {author}
          </p>
        </div>
      </div>
    </li>
  );
};
