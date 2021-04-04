import botanique from "./images/image_botanique.jpg";
import hallway from './images/image_hallway.jpg'
import fountain from './images/image_fountain.jpg'

export const Images = () => {
    return (
        <div>
            <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
                <img className={'TopImage'} rel="noreferrer" src={hallway} alt={''}></img>
            </a>
            <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
                <img className={'TopImage'} rel="noreferrer" src={botanique} alt={''}></img>
            </a>
            <a href={'https://hubs.mozilla.com/VfZdc5z/gaesteliste'}>
                <img className={'TopImage'} rel="noreferrer" src={fountain} alt={''}></img>
            </a>
        </div>
    )
}