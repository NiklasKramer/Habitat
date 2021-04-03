import './App.css';
import {Youtube} from "./Youtube.component";

function App() {
  return (
    <div className="App">
        <div className='Heading'>{`Welcome To Habitat`}</div>
        <div>Please make sure to run this on a Mac or Windows device. Supported browsers are Firefox and Chrome.</div>
            <a target="_blank" href="https://hubs.mozilla.com/VfZdc5z/gaesteliste">Enter</a>
      <div className={'Element'}><Youtube/></div>
    </div>
  );
}

export default App;
