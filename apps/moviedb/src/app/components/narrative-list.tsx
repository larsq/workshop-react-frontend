import '../styles/narrative-list.scss'
import '../styles/support.scss'
import {useCallback, useEffect, useState} from "react";
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

  useEffect(() => {
    if (props.titles.length === 0) {
      setState({selectedTitle: undefined})
      return;
    }

    if (props.titles.length === 1) {
      setState({selectedTitle: props.titles[0]})
      return;
    }

    if (state.selectedTitle !== undefined && !props.titles.includes(state.selectedTitle)) {
      setState({selectedTitle: undefined})
      return;
    }
  }, [props.titles, state.selectedTitle])

  const handleSelection = useCallback((val: string) => {
    if (props.titles.includes(val)) {
      setState({selectedTitle: val})
    } else {
      setState({selectedTitle: undefined})
    }
  }, [props.titles])

  return <aside className="search-result">
    {props.titles.map(title => <NarrativeListElement title={title} key={title} isSelected={title === state.selectedTitle}
                                                     handleSelectionCallback={handleSelection}/>)}
    <div className="support__v-gap"></div>
    <NarrativeListResult matches={props.titles.length}/>
  </aside>
}
