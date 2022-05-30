import {Narrative} from "../model/narrative";
import React, {useContext, useState} from "react";
import {SearchContext, MutateSearchState, SearchState} from "../context/search-service.context";

export interface SearchServiceProps {
  children: React.ReactElement[] | React.ReactElement
}

export function SearchService(props: SearchServiceProps) {
  const [selectedNarrative, setSelectedNarrative] = useState<Narrative | undefined>(undefined)
  const [narratives, setNarratives] = useState<Narrative[]>([])

  const context: MutateSearchState & SearchState = {
    select: (selectedNarrative) => setSelectedNarrative(selectedNarrative),
    updateNarratives: (narratives) => setNarratives(narratives),
    selectedNarrative,
    narratives
  }

  return <SearchContext.Provider value={context}>{props.children}</SearchContext.Provider>
}

export function useSearchState(): SearchState {
  return useContext(SearchContext)
}

export function useSearchStateUpdate(): MutateSearchState {
  return useContext(SearchContext)
}



