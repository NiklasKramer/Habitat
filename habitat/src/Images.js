import image1 from "./images/image1.jpg";
import image3 from './images/image3.jpg'

export const Images = () => {
    return (
        <div>
            <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
                <img className={'TopImage'} rel="noreferrer" src={image1} alt={''}></img>
            </a>
            <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
                <img className={'TopImage'} rel="noreferrer" src={image3} alt={''}></img>
            </a>
        </div>
    )
}