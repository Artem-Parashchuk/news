import s from "./Skeleton.module.css";

export const Skeleton = ({ count = 1, type = "banner" }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={s.list}>
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={type === "banner" ? s.banner : s.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <div className={type === "banner" ? s.banner : s.item}></div>
      )}
    </>
  );
};
