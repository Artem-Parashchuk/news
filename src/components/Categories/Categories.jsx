import s from "./Categories.module.css";

export const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className={s.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? s.active : s.item}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
