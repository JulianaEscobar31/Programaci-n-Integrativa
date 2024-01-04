// Componente de Encabezado
class MyHeader extends HTMLElement {
  constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de encabezado
      this.shadowRoot.innerHTML = `
          <style>
              header {
                  color: #fff;
                  padding: 20px;
                  text-align: center;
              }

              h1 {
                  font-family: 'Arial', sans-serif;
                  font-size: 36px;
                  margin: 0;
              }

              h2 {
                  font-family: 'Arial', sans-serif;
                  font-size: 24px;
                  margin: 10px 0 0;
                  font-weight: normal;
              }
          </style>

          <header>
              <h1>FITNESS TRACKER 360</h1>
          </header>
      `;
  }
}

// Registrar el componente de encabezado
customElements.define('my-header', MyHeader);
