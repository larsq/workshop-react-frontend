import '../styles/narrative.scss'
import '../styles/support.scss'
import {NarrativeCountries} from "./narrative-countries";
import {NarrativeActors} from "./narrative-actors";

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
    <NarrativeCountries></NarrativeCountries>
    <NarrativeActors></NarrativeActors>
    <footer className="narrative__labels">
      <div className="narrative__label">Comedies</div>
    </footer>
  </article>
}
