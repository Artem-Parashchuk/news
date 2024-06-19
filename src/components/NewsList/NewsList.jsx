import { NewsItem } from '../NewsItem/NewsItem'
import s from './NewsList.module.css'
export const NewsList = ({news}) => {
    console.log(news)
  return (
    <ul className={s.list}>
        {news.map(item => (
            <NewsItem key={item.id} {...item}/>
        ))}
    </ul>
  )
}
