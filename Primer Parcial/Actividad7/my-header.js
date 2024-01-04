class MyHeader extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente de encabezado
    this.shadowRoot.innerHTML = `
      <header>
      <h1>UNIVERSIDAD DE LAS FUERZAS ARMADAS "ESPE"</h1>
      <h2>Actividad 7: Componente Contador.</h2>
      <br>
      <h2 style="text-align: left; font-size: 11px;">Integrantes:</h2>
      <ul>
        <li style="text-align: left; font-size: 11px;">Juliana Escobar</li>
        <li style="text-align: left; font-size: 11px;">Marco Espin</li>
      </ul>
    </header>
      `;
  }
}
// Registrar el componente de encabezado
customElements.define('my-header', MyHeader);
