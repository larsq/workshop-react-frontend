import '../styles/narrative-list.scss'
import '../styles/support.scss'
import {useState} from "react";
import {NarrativeListElement} from "./narrative-list-element";
import {NarrativeListResult} from "./narrative-list-result";

export interface NarrativeListProps {
  titles: string[]
}

export interface NarrativeListStateProps {
  selectedTitle?: string
}

export function NarrativeList(props: NarrativeListProps) {
  const [state, setState] = useState<NarrativeListStateProps>({})

  return <aside className="search-result">
    {props.titles.map(title => <NarrativeListElement title={title} key={title} isSelected={title === state.selectedTitle}/>)}
    <div className="support__v-gap"></div>
    <NarrativeListResult matches={props.titles.length}/>
  </aside>
}
