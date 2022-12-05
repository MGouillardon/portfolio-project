import {routes} from "./routes";
import Navbar from "../components/Navbar";

const APP = document.getElementById('app');

const ROUTER = async () => {
    let hash = location.hash.split("#")[1] || '/';

    APP.innerHTML = await routes[hash].render();
    APP.innerHTML += await Navbar.render(); 
    await routes[hash].after_render();
    await Navbar.after_render();
}

window.addEventListener('hashchange', async () => {
    await ROUTER();
});

export default ROUTER;
