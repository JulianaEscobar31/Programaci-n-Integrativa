// Componente de Contenido
class MyContent extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente de contenido
    this.shadowRoot.innerHTML = `
      <section><slot name="form"></slot></section>
    `;
  }
}
// Registrar el componente de contenido
customElements.define('my-content', MyContent);