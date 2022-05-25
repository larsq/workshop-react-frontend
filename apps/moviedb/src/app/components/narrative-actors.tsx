import '../styles/narrative-actors.scss'
import {Actor} from "../model/actor";
import {NarrativeActorsElement} from "./narrative-actors-element";

export interface NarrativeActorsProps {
  actors: Actor[]
}

export function NarrativeActors(props: NarrativeActorsProps) {
  return <section className="narrative__cast-list">
    <h2 className="narrative__cast-title">Cast</h2>
    {props.actors.map(actor => {
      return <NarrativeActorsElement actor={actor} key={actor.name}/>
    })}
  </section>
}
