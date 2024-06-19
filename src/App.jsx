import s from './App.module.css';
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Main />
      </div>
    </>
  );
}

export default App;
