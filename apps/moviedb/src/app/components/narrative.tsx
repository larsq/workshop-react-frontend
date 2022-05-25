import '../styles/narrative.scss'
import '../styles/support.scss'
import {NarrativeCountries} from "./narrative-countries";
import {NarrativeActors} from "./narrative-actors";
import {Narrative as NarrativeModel} from "../model/narrative";

export interface NarrativeProps {
  narrative?: NarrativeModel
}

export function Narrative(props: NarrativeProps) {
  if (props.narrative === undefined) {
    return <div/>
  }

  return <article className="narrative">
    <h1 className="narrative__title">{props.narrative.title}</h1>
    <p className="narrative__plot">{props.narrative.plot}</p>
    <section className="narrative__director">
      <h2>Director</h2>
      <span>{props.narrative.director}</span>
    </section>
    <section className="narrative__release-year">
      <h2>Released</h2>
      <span>{props.narrative.released}</span>
    </section>
    <NarrativeCountries countries={props.narrative.countries}></NarrativeCountries>
    <NarrativeActors actors={props.narrative.cast}></NarrativeActors>
    {props.narrative.labels.map(label => <footer className="narrative__labels" key={label}>
      <div className="narrative__label">{label}</div>
    </footer>)}
  </article>
}
