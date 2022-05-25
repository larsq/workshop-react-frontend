import '../styles/narrative-actors.scss'
import {Actor} from "../model/actor";

export interface NarrativeActorsElementProps {
  actor: Actor
}

export function NarrativeActorsElement(props: NarrativeActorsElementProps) {
  return <div className="narrative__cast">{props.actor.name}</div>
}
