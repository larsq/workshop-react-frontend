export interface NarrativeListElementProps {
  title: string,
  isSelected: boolean,
  handleSelectionCallback: (val: string) => void
}

export function NarrativeListElement(props: NarrativeListElementProps) {
  const classes = `search-result__item ${props.isSelected ? 'search-result__item--selected' : ''}`

  return <article className={classes}
                  onClick={() => props.handleSelectionCallback(props.title)}>{props.title}</article>
}
