export interface NarrativeListResultProps {
  matches: number
}

export function NarrativeListResult(props: NarrativeListResultProps) {
  return <footer className="search-result__footer">{props.matches} matches</footer>
}
