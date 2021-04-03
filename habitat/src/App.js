import './App.css';
import {Youtube} from "./Youtube.component";
import {introductions} from "./content";
import image2 from './image1.png'
import title from './title.svg'

function App() {
  return (
    <div className="App">
        <img src={title}></img>
        <img className={'TopImage'} alt={''} src={image2}></img>
        <div>{introductions}</div>
            <a className="MyButton" target="_blank" rel="noreferrer" href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>Enter</a>
      <div className={'Element'}>
          <Youtube/>
      </div>
    </div>
  );
}

export default App;
