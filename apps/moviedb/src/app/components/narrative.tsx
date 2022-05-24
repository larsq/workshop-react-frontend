import '../styles/narrative.scss'
import '../styles/support.scss'

export function Narrative() {
  return <article className="narrative">
    <h1 className="narrative__title">Fun with Dick & Jane</h1>
    <p className="narrative__plot">After losing their high-paying corporate jobs, an upwardly mobile couple turns to
      robbing
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
}
