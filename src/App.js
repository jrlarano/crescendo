import './App.css';
import HeadNav from './components/headnav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Test1 from './components/test1'
import Test2 from './components/test2'
import AddRecipe from './components/addrecipe'
import DisplayRecipe from './components/displayrecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <HeadNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test1/addrecipe" exact component={AddRecipe} />
          <Route path="/test1/:recipeId" component={DisplayRecipe} />
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
