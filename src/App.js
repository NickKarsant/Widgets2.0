import {items, options} from './database.ts'
import {Accordion} from './Accordion'

export const App = () => {




  return (
    <div className="app">
      <Accordion items={items}/>
    </div>
  );
}

 export default App;

