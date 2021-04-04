import './App.css';
import {Youtube} from "./Youtube.component";
import {introductions} from "./content";
import title from './images/title.svg'
import {Images} from "./Images";

function App() {
    return (
        <div className="App">
            <img alt={''} className={'Heading'} src={title}></img>
            <Images/>
            <div className={'text'}>
                <div>{introductions}</div>
            </div>
            <div className={'Button'}>
            <a className="MyButton" target="_blank" rel="noreferrer"
               href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>E N T E R</a>
            </div>
            <div className={'Element'}>
                <Youtube/>
            </div>

        </div>
    );
}

export default App;
