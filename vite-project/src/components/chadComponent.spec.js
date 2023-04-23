import { test, expect } from 'vitest';
import { ChadComponent } from './chadComponent.js';

test('cree un botón con el texto "Cambiar fondo"', () => {
    const component = new ChadComponent();
    const button = component.shadowRoot.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Cambiar fondo');
  });
  
  test('al hacer clic en el botón cambie el color de fondo', () => {
    const component = new ChadComponent();
    const button = component.shadowRoot.querySelector('button');
    const oldColor = document.body.style.backgroundColor;
    button.dispatchEvent(new MouseEvent('click'));
    expect(document.body.style.backgroundColor).not.toBe(oldColor);
  });

