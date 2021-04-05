import './App.css';
import {Youtube} from "./Youtube.component";
import {introduction2, introductions, url, welcome} from "./content";
import title from './images/title.svg'
import {Images} from "./Images";
import logo from './images/LEAVINGvenndiagram.png'

function App() {
    return (
        <div className="App">
            <img alt={'header'} className={'Heading'} src={title}/>
            <Images/>
            <div className={'text'}>
                <div>{welcome}</div>
                <p></p>
                <div>{introductions}</div>
                <p></p>
                <div>{introduction2}</div>
            </div>
            <div className={'Button'}>
                <a className="MyButton" target="_blank" rel="noreferrer"
                   href={url}>E N T E R</a>
            </div>
            <div className={'Element'}>
                <Youtube/>
            </div>
            <div>
                <a href={'https://leavingrecords.lnk.to/Habitat'}>
                    <img alt={'album'} className={'Heading'} src={'https://f4.bcbits.com/img/a1918663319_10.jpg'}/>
                </a>
            </div>
            <div>
                <img alt={'logo'} className={'Logo'} src={logo}/>
            </div>

        </div>
    );
}

export default App;
