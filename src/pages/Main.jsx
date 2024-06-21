import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import s from "./Main.module.css";
import { fetchNews } from "../API/apiNews";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Pagination } from "../components/Pagination/Pagination";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state
        const { news } = await fetchNews(currentPage, pageSize);
        setNews(news);
      } catch (error) {
        setError("Failed to fetch news. Please try again later.");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <main className={s.main}>
      {error && <div className={s.error}>{error}</div>}

      {news.length > 0 && !loading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton
          count={1}
          type="banner"
        />
      )}

      {!loading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton
          count={10}
          type="item"
        />
      )}

      <Pagination
        totalPage={totalPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </main>
  );
};
