import AboutMeComponent from './components/about';
import './App.css';
import IntroComponent from './components/intro';
import ToolsComponent from './components/tools';
import AboutVTComponent from './components/aboutVT';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Visual Regression Testing with Playwright
        </h1>
        <h2>What? Why? Where? When? Who?</h2>
        <p>https://wtm-scotland-workshop.netlify.app</p>
        <img src={require('./qr.png')} alt="qr code" width="150" height="150" />
        <p>by Kat Kmiotek</p>
        </header>

        <IntroComponent/>
        <AboutMeComponent/>
        <AboutVTComponent/>
        <ToolsComponent/>
    </div>
  );
}

export default App;
