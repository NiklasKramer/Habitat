import image1 from "./images/image1.jpg";
import image3 from './images/image3.jpg'
import {url} from "./content";

export const Images = () => {
    return (
        <div>
            <a href={url}>
                <img className={'TopImage'} rel="noreferrer" src={image1} alt={''}></img>
            </a>
            <a href={url}>
                <img className={'TopImage'} rel="noreferrer" src={image3} alt={''}></img>
            </a>
        </div>
    )
}