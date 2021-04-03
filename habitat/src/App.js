import './App.css';
import {Youtube} from "./Youtube.component";
import {introductions} from "./content";
import image2 from './image1.png'
import title from './title.svg'

function App() {
  return (
    <div className="App">
            <img alt={''} className={'Heading'} src={title}></img>
        <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
        <img className={'TopImage'}  rel="noreferrer"  src={image2} alt={''}></img>
        </a>
        <div>{introductions}</div>
            <a className="MyButton" target="_blank" rel="noreferrer" href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>Enter</a>
      <div className={'Element'}>
          <Youtube/>
      </div>
    </div>
  );
}

export default App;
