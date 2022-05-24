import '../styles/support.scss'
import '../styles/header.scss'
import {HeaderSearch} from "./header-search";

export function AppHeader() {
  return <header className="navigation">
    <section className="logo">
      <img src="https://via.placeholder.com/400x100?text=Logo" alt="logotype"></img>
    </section>
    <div className="support__h-gap"></div>
    <HeaderSearch></HeaderSearch>
  </header>
}
