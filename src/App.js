import AboutComponent from './components/about';
import './App.css';
import IntroComponent from './components/intro';
import ToolsComponent from './components/tools';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Visual Regression Testing with Playwright
        </h1>
        <h2>What? Why? Where? When? Who?</h2>
        <p>https://wtm-scotland-workshop.netlify.app</p>
        <p>by Kat Kmiotek</p>
        </header>

        <IntroComponent/>
        <AboutComponent/>
        <ToolsComponent/>
    </div>
  );
}

export default App;
