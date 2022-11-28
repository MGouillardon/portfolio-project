import '/src/styles/main.scss'
// import '/src/scripts/locomotive.js'
import ROUTER from "./src/router/router";

window.addEventListener('load', async () => {
    await ROUTER();
});