import './styles.scss'
import './styles/support.scss'
import {AppHeader} from './components/header'
import {Narrative} from "./components/narrative";
import {NarrativeList} from "./components/narrative-list";

export function App() {
  return (
  <div className="support__wrapper">
    <AppHeader></AppHeader>
    <div className="support__filler"></div>
    <main className="content">
      <NarrativeList></NarrativeList>
      <Narrative></Narrative>
    </main>
  </div>
  );
}

export default App;
