export interface NarrativeListElementProps {
  title: string,
  isSelected: boolean
}

export function NarrativeListElement(props: NarrativeListElementProps) {
  const classes = `search-result__item ${props.isSelected ? 'search-result__item--selected' : ''}`

  return <article className={classes}>{props.title}</article>
}
