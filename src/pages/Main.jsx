import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import s from "./Main.module.css";
import { fetchNews } from "../API/apiNews";
import { NewsList } from "../components/NewsList/NewsList";
export const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const { news } = await fetchNews();
        setNews(news);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNews();
  }, []);

  return (
    <main className={s.main}>
      {news.length > 0 ? (
        <NewsBanner item={news[0]} />
      ) : (
        <div className={s.noNews}>No news available</div>
      )}
      <NewsList news={news} />
    </main>
  );
};
