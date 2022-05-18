import './styles.css'

export function App() {
  return (
  <div className="support__wrapper">
    <header className="navigation">
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
    <div className="support__filler"></div>
    <main className="content">
      <aside className="search-result">
        <article className="search-result__item search-result__item--selected">Fun with Dick & Jane</article>
        <article className="search-result__item">The Mitchells vs. The Machines</article>
        <div className="support__v-gap"></div>
        <footer className="search-result__footer">2 matches</footer>
      </aside>
      <article className="narrative">
        <h1 className="narrative__title">Fun with Dick & Jane</h1>
        <p className="narrative__plot">After losing their high-paying corporate jobs, an upwardly mobile couple turns to robbing
          banks to maintain their standard of living.</p>
        <section className="narrative__director">
          <h2>Director</h2>
          <span>John Doe</span>
        </section>
        <section className="narrative__release-year">
          <h2>Released</h2>
          <span>1997</span>
        </section>
        <section className="narrative__countries">
          <div className="narrative__country"><img src="https://flagcdn.com/64x48/us.png" alt="United States"></img></div>
        </section>
        <section className="narrative__cast-list">
          <h2 className="narrative__cast-title">Cast</h2>
          <div className="narrative__cast">Jim Carrey</div>
          <div className="narrative__cast">Téa Leoni</div>
          <div className="narrative__cast">Alec Baldwin</div>
          <div className="narrative__cast">Richard Jenkins</div>
          <div className="narrative__cast">Angie Harmon</div>
          <div className="narrative__cast">John Michael Higgins</div>
          <div className="narrative__cast">Richard Burgi</div>
          <div className="narrative__cast">Carlos Jacott</div>
          <div className="narrative__cast">Aaron Michael Drozin</div>
          <div className="narrative__cast">Gloria Garayua</div>
        </section>
        <footer className="narrative__labels">
          <div className="narrative__label">Comedies</div>
        </footer>
      </article>
    </main>
  </div>
  );
}

export default App;
