import '../styles/narrative-list.scss'
import '../styles/support.scss'
import {useCallback, useEffect, useMemo} from "react";
import {NarrativeListElement} from "./narrative-list-element";
import {NarrativeListResult} from "./narrative-list-result";
import {useSearchState, useSearchStateUpdate} from "./search-service";
import {SearchState} from "../context/search-service.context";
import {Narrative} from "../model/narrative";

function includesSelection(searchState: SearchState) {
  return searchState.narratives.find(narrative => narrative.title === searchState.selectedNarrative?.title) !== undefined;
}

function shouldUnselectIfAvailableNarrativesAreCleared(searchState: SearchState) {
  return searchState.narratives.length === 0 && searchState.selectedNarrative !== undefined;
}

function shouldAutoselectOnlyAvailableNarrative(searchState: SearchState) {
  return searchState.narratives.length === 1 && searchState.selectedNarrative?.title !== searchState.narratives[0].title;
}

export interface NarrativeListProps {
  maxNumberOfHits: number
}

export function NarrativeList(props: NarrativeListProps) {
  const searchState = useSearchState();
  const updateSearchState = useSearchStateUpdate();

  // triggers when list of narratives change
  useEffect(() => {
    // unselect if there is no narrative to select
    if (shouldUnselectIfAvailableNarrativesAreCleared(searchState)) {
      console.log('narratives cleared, unselecting current one')
      updateSearchState.select(undefined);
      return;
    }

    // auto-select if there is only a single narrative to display
    if (shouldAutoselectOnlyAvailableNarrative(searchState)) {
      console.log('auto-select narrative', searchState.narratives[0])
      updateSearchState.select(searchState.narratives[0])
      return;
    }

    // if title is select that is not present any longer, unselect it
    if (searchState.selectedNarrative !== undefined && !includesSelection(searchState)) {
      console.log('selected narrative not part of available ones')
      updateSearchState.select(undefined);
      return;
    }

  }, [searchState.narratives, searchState.selectedNarrative, searchState, updateSearchState])

  const handleSelection = useCallback((val: string) => {

    const selected = searchState.narratives.find(narrative => narrative.title === val)
    updateSearchState.select(selected)

  }, [searchState.narratives, updateSearchState])

  const cappedList: Narrative[] = useMemo(() => {
    return searchState.narratives.length > props.maxNumberOfHits ? searchState.narratives.slice(0, props.maxNumberOfHits) : searchState.narratives
  }, [props.maxNumberOfHits, searchState.narratives])

  const reachMaximumSize: boolean = useMemo(() => {
    return searchState.narratives.length > props.maxNumberOfHits
  }, [props.maxNumberOfHits, searchState.narratives])

  return <aside className="search-result">
    {cappedList.map(narrative => <NarrativeListElement title={narrative.title} key={narrative.title}
                                                       isSelected={narrative.title === searchState.selectedNarrative?.title}
                                                       handleSelectionCallback={handleSelection}/>)}
    <div className="support__v-gap"></div>
    <NarrativeListResult matches={cappedList.length} reachMaximumSize={reachMaximumSize}/>
  </aside>
}
