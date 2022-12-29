import { Level1a } from "./components/level1a";
import { Level1b } from "./components/level1b";
import { levelContext } from "./components/levelcontext";

function App() {
  return (
    <div className="App">
        <levelContext.Provider>
          <Level1a/>
          <Level1b/>
        </levelContext.Provider>
    </div>
  );
}

export default App;
