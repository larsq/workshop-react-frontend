import './styles.scss'
import './styles/support.scss'
import {AppHeader} from './components/header'
import {Narrative} from "./components/narrative";
import {NarrativeList} from "./components/narrative-list";
import {Narrative as NarrativeModel} from './model/narrative'
import {useState} from "react";

export interface AppState {
  narrative: NarrativeModel[],
  selected?: NarrativeModel
}

export function App() {
  const [state, setState] = useState<AppState>({
    narrative: []
  })


  return (
    <div className="support__wrapper">
      <AppHeader></AppHeader>
      <div className="support__filler"></div>
      <main className="content">
        <NarrativeList titles={state.narrative.map(narrative => narrative.title)}></NarrativeList>
        <Narrative narrative={state.selected}></Narrative>
      </main>
    </div>
  );
}

export default App;
