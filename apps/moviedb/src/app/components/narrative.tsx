import '../styles/narrative.scss'
import '../styles/support.scss'
import {NarrativeCountries} from "./narrative-countries";
import {NarrativeActors} from "./narrative-actors";
import {useSearchState} from "./search-service";

export function Narrative() {
  const searchState = useSearchState()

  if (searchState.selectedNarrative === undefined) {
    return <article className="narrative">
      <i>No narrative selected, please select one</i>
    </article>
  }

  return <article className="narrative">
    <h1 className="narrative__title">{searchState.selectedNarrative.title}</h1>
    <p className="narrative__plot">{searchState.selectedNarrative.plot}</p>
    <section className="narrative__director">
      <h2>Director</h2>
      <span>{searchState.selectedNarrative.director}</span>
    </section>
    <section className="narrative__release-year">
      <h2>Released</h2>
      <span>{searchState.selectedNarrative.released}</span>
    </section>
    <NarrativeCountries countries={searchState.selectedNarrative.countries}></NarrativeCountries>
    <NarrativeActors actors={searchState.selectedNarrative.cast}></NarrativeActors>
    {searchState.selectedNarrative.labels.map(label => <footer className="narrative__labels" key={label}>
      <div className="narrative__label">{label}</div>
    </footer>)}
  </article>
}
