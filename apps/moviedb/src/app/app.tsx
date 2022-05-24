import './styles.scss'
import './styles/support.scss'
import {AppHeader} from './components/header'
import {Narrative} from "./components/narrative";

export function App() {
  return (
  <div className="support__wrapper">
    <AppHeader></AppHeader>
    <div className="support__filler"></div>
    <main className="content">
      <aside className="search-result">
        <article className="search-result__item search-result__item--selected">Fun with Dick & Jane</article>
        <article className="search-result__item">The Mitchells vs. The Machines</article>
        <div className="support__v-gap"></div>
        <footer className="search-result__footer">2 matches</footer>
      </aside>
      <Narrative></Narrative>
    </main>
  </div>
  );
}

export default App;
