import React from "react";
import {Narrative} from "../model/narrative";

export interface MutateSearchState {
  updateNarratives: (narratives: Narrative[]) => void
  select: (narrative: Narrative | undefined) => void
}

export interface SearchState {
  narratives: Narrative[],
  selectedNarrative: Narrative | undefined
}

const defaultSearchContext: MutateSearchState & SearchState = {
  updateNarratives: () => {
    // explicit empty
  },
  select: () => {
    // explicit empty
  },
  selectedNarrative: undefined,
  narratives: []
}

export const SearchContext = React.createContext<MutateSearchState & SearchState>(defaultSearchContext)
