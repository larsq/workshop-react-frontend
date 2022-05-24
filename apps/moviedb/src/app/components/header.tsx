export function AppHeader() {
  return <header className="navigation">
    <section className="logo">
      <img src="https://via.placeholder.com/400x100?text=Logo" alt="logotype"></img>
    </section>
    <div className="support__h-gap"></div>
    <section className="navigation__searchbar">
      <form>
        <div className="searchbar__component">
          <input type="search" className="searchbar__field" name="search" placeholder="Search for title"></input>
        </div>
      </form>
    </section>
  </header>
}
