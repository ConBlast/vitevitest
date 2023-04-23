export class ChadComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const button = document.createElement('button');
      button.innerText = 'Cambiar fondo';
      button.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
  
      const style = document.createElement('style');
      style.textContent = `
        button {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `;
  
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(button);
    }
  }