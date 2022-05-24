import '../styles/support.scss'
import '../styles/header-search.scss'

export function HeaderSearch() {
  return <section className="navigation__searchbar">
    <form>
      <div className="searchbar__component">
        <input type="search" className="searchbar__field" name="search" placeholder="Search for title"></input>
      </div>
    </form>
  </section>
}
