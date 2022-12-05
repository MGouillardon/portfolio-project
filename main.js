import '/src/styles/main.scss'
import ROUTER from "./src/router/router";

window.addEventListener('load', async () => {
    await ROUTER();
});