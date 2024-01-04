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
                    max-width: 800px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    overflow: hidden;
                    margin: 50px auto;
                    display: grid;
                    grid-template-rows: 1fr 2fr 1fr;
                    height: 90vh; /* Cambiado a 90vh */
                    font-family: 'Arial', sans-serif;
                    transition: transform 0.3s ease-in-out;
                }

                div:hover {
                    transform: scale(1.02);
                }

                slot[name="header"], slot[name="content"], slot[name="footer"] {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    border: 1px solid #ddd;
                    overflow: hidden;
                }

                slot[name="header"] {
                    background-color: #522633;
                    color: #fff;
                    border-radius: 8px 8px 0 0;
                    font-weight: bold;
                    font-size: 24px;
                    transition: background-color 0.3s;
                }

                slot[name="header"]:hover {
                    background-color: #333;
                }

                slot[name="footer"] {
                    background-color: #522633;
                    color: #fff;
                    border-radius: 0 0 8px 8px;
                    font-weight: bold;
                    font-size: 24px;
                    transition: background-color 0.3s;
                }

                slot[name="footer"]:hover {
                    background-color: #333;
                }

                slot[name="content"] {
                    background-color: #f8f9fa;
                    color: #333;
                    border-radius: 0 0 8px 8px;
                    font-weight: bold;
                    font-size: 20px;
                    position: relative;
                    padding: 50px 20px;
                }

                slot[name="content"] img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }

                slot[name="content"] img:hover {
                    transform: scale(1.1);
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

