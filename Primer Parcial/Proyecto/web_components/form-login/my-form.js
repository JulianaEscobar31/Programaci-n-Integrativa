// Componente de Formulario
class MyForm extends HTMLElement {
  constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de formulario
      this.shadowRoot.innerHTML = `
          <style>
              :host {
                  display: block;
                  margin: 20px auto;
                  max-width: 400px;
              }

              form {
                  background-color: #f8f9fa;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  padding: 20px;
                  border: 1px solid #ddd;
              }

              label {
                  display: block;
                  margin-bottom: 8px;
                  font-weight: bold;
                  color: #333;
              }

              input {
                  width: calc(100% - 20px);
                  padding: 10px;
                  margin-bottom: 16px;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                  box-sizing: border-box;
              }

              button {
                  background-color: #800000;
                  color: #fff;
                  padding: 10px 20px;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  transition: background-color 0.3s;
              }

              button:hover {
                  background-color: #550000;
              }
          </style>

          <form>
              <br><br><br><br>
              <label for="name">Nombre de Usuario:</label>
              <input type="text" id="name" name="name" required>

              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required>

              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required>

              <button type="submit">Enviar</button>
              <br><br><br><br>

          </form>
      `;
  }
}

// Registrar el componente de formulario
customElements.define('my-form', MyForm);
