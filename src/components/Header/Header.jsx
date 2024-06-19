import { formatData } from '../../helpers/formatData'
import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
        <h1 className={s.title}>News</h1>
        <p className={s.date}>{formatData(new Date())}</p>
    </header>
  )
}
