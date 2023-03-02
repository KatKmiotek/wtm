import AboutMeComponent from './components/about';
import './App.css';
import IntroComponent from './components/intro';
import ToolsComponent from './components/tools';
import AboutVTComponent from './components/aboutVT';
import WorkshopComponent from './components/workshop';
import PlaywrightComponent from './components/playwright';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Visual Regression Testing with Playwright
        </h1>
        <p>https://wtm-scotland-workshop.netlify.app</p>
        <img src={require('./qr.png')} alt="qr code" width="150" height="150" />
        <p>by Kat Kmiotek</p>
        </header>
        <div className='tag'>#WTMDareToBe</div>

        <IntroComponent/>
        <AboutMeComponent/>
        <AboutVTComponent/>
        <ToolsComponent/>
        <PlaywrightComponent/>
        <WorkshopComponent/>
    </div>
  );
}

export default App;
