import '../styles/narrative-list.scss'
import '../styles/support.scss'

export function NarrativeList() {
  return <aside className="search-result">
    <article className="search-result__item search-result__item--selected">Fun with Dick & Jane</article>
    <article className="search-result__item">The Mitchells vs. The Machines</article>
    <div className="support__v-gap"></div>
    <footer className="search-result__footer">2 matches</footer>
  </aside>
}
