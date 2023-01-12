import { useState } from "react";
import { Level1a } from "./components/level1a";
import { Level1b } from "./components/level1b";
import {Level1aChange} from './components/level2a'
import { levelContext } from "./components/levelcontext";

function App() {
  const [color,setColor] = useState({
    left: 'aqua',
    right: 'red'
  })
  return (
    <div className="App">
        <levelContext.Provider value={{data: color, setData: setColor}}>
          <Level1a/>
          <Level1b/>
        </levelContext.Provider>
    </div>
  );
}

export default App;
