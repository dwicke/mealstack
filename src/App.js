// import logo from './logo.svg';
import HomepageImage from './components/HomepageImage'
import PrimarySearchAppBar from './components/MyAppBar';
import './App.css';
import AutoGrid from './components/RecipesPage';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <header className="App-header">
        <HomepageImage />
        <AutoGrid />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
