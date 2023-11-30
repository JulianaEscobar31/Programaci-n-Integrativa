// Componente Contenedor
class MyContainer extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente contenedor con slots
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    width: 90%;
                    max-width: 100%;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                    margin: 0 auto;
                    display: grid;
                    grid-template-rows: 30% 60% 30%;
                    height: 97vh; 
                    font-family: 'Comic Sans MS', 'Comic Sans', cursive; 
                }

                slot[name="header"], slot[name="content"], slot[name="footer"] {
                    display: block;
                    padding: 20px;
                    text-align: center;
                    border: 1px solid #ddd;
                }

                slot[name="header"] {
                    background-color: #3498db;
                    color: #fff;
                    border-radius: 8px 8px 0 0;
                    border-bottom: none; 
                    font-weight: bold; 
                    font-size: 11px; 
                    text-decoration: underline; 
                }

                slot[name="footer"] {
                    background-color: #3498db;
                    color: #fff;
                    border-radius: 0 0 8px 8px;
                    font-weight: bold; 
                    font-size: 20px; 
                }

                slot[name="content"] {
                    background-color: white;
                    color: #000;
                    border-radius: 8px 8px 0 0;
                    border-bottom: none; 
                    font-weight: bold; 
                    font-size: 20px; 
                }
            </style>

            <div>
                <slot name="header"></slot>
                <slot name="content"></slot>
                <slot name="form"></slot>
                <slot name="footer"></slot>
            </div>
        `;
    }
}

// Registrar el componente contenedor
customElements.define('my-container', MyContainer);
