import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import s from "./Main.module.css";
import { fetchNews } from "../API/apiNews";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";


export const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const { news } = await fetchNews();
        setNews(news);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  return (
    <main className={s.main}>
      {news.length > 0 && !loading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner"/>
      )}

        
        { !loading ? <NewsList news={news} /> : <Skeleton count={10} type="item"/>}
    </main>
  );
};
