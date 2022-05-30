import {useMemo} from "react";

export interface NarrativeListResultProps {
  matches: number,
  reachMaximumSize: boolean
}

export function NarrativeListResult(props: NarrativeListResultProps) {
  const message = useMemo(
    () => props.reachMaximumSize ?
      `${props.matches}+ matches, refine your search` :
      `${props.matches} matches`, [props.reachMaximumSize, props.matches])

  return <footer className="search-result__footer">{message}</footer>
}
