import './App.css';
import {Youtube} from "./Youtube.component";
import {introductions} from "./content";
import title from './images/title.svg'
import {Images} from "./Images";
import logo from './images/LEAVINGvenndiagram.png'

function App() {
    return (
        <div className="App">
            <img alt={'header'} className={'Heading'} src={title} />
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
            <img alt={'logo'} className={'Logo'} src={logo} />

        </div>
    );
}

export default App;
