import Tweet from './components/Tweet'
import {nanoid} from 'nanoid'

function App() {
  return (
    <div className="App">
      <Tweet
        id={nanoid()}
        username="Matthew Sidaway"
      />
    </div>
  );
}

export default App;
