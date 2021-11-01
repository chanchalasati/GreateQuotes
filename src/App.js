import {Switch,Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuote';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/qoutes' exact>
         <AllQuotes/>
        </Route>
        <Route path='/quotes/:quotesId'>
        <QuotesDetail/>
        </Route>
        <Route path='/new-quote'>
        <NewQuotes/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
