import './styles.scss'
import './styles/support.scss'
import {AppHeader} from './components/header'
import {Narrative} from "./components/narrative";
import {NarrativeList} from "./components/narrative-list";
import {SearchService} from "./components/search-service";

export function App() {
  return (
    <SearchService>
      <div className="support__wrapper">
        <AppHeader></AppHeader>
        <div className="support__filler"></div>
        <main className="content">
          <NarrativeList></NarrativeList>
          <Narrative></Narrative>
        </main>
      </div>
    </SearchService>
  );
}

export default App;
