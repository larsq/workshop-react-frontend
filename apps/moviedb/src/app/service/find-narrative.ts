import {Narrative} from "../model/narrative";
import {convert, NarrativeModel} from "../model/narrative-model";

export function findNarrative(substring: string): Promise<Narrative[]> {
  return fetch('http://localhost:8080/', {
    method: 'POST', body: JSON.stringify({
      part: substring
    }), headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    return resp.json()
  }).then((data: { items: NarrativeModel[] }) => {
    return data.items.map(model => convert(model))
  })
}
