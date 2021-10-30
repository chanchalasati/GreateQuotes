import {Switch,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/quotes'>
        
        </Route>
        <Route path='/quotes/:quotesId'>

        </Route>
        <Route path='/new-quotes'>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
