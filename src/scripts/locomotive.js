import '../styles/main.scss'
import LocomotiveScroll from 'locomotive-scroll';


export default async () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}
