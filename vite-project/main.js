import './style.css'
import { setupCounter } from './counter.js'
import { ChadComponent } from './src/components/chadComponent.js';

customElements.define('chad-component', ChadComponent);

document.querySelector('#app').innerHTML = `
    <h1>Webcomponent con vite</h1>
`

setupCounter(document.querySelector('#counter'))

