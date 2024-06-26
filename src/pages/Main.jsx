import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import s from "./Main.module.css";
import { fetchCategory, fetchNews } from "../API/apiNews";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Pagination } from "../components/Pagination/Pagination";
import { Categories } from "../components/Categories/Categories";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state
        const { news } = await fetchNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategory === "All" ? null : selectedCategory,
        });
        setNews(news);
      } catch (error) {
        setError("Failed to fetch news. Please try again later.");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        setError(null); // Reset error state
        const {data} = await fetchCategory();
        setCategory(["All", ...data.categories]);
      } catch (error) {
        setError("Failed to fetch categories. Please try again later.");
      }
    };
    getCategory();
  }, []);



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
      <Categories
        categories={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

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
