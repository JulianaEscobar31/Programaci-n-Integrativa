class GalleryComponent extends HTMLElement {
  constructor() {
    super();

    this.images = [
      "imagenes/image1.jpg",
      "imagenes/image2.jpeg",
      "imagenes/image3.jpg",
      "imagenes/image4.jpg",
      "imagenes/image5.jpg",
      "imagenes/image6.jpg",
      "imagenes/image7.jpg",
    ];

    this.currentIndex = 0;

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>

    .gallery-container {
      text-align: center;
    }

    .imagenPrincipal {
      width: 1100px; 
      height: 500px; 
      object-fit: cover; 
      margin-bottom: 10px;
      border: double 10px;
    }

    .navigation-buttons {
      margin-bottom: 10px;
    }

    #anteriorBtn, #siguienteBtn {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #78B8F8;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    #anteriorBtn:hover, #siguienteBtn:hover {
      background-color: #557EA7;
    }

    .miniatura-container {
      display: flex;
      justify-content: center;
    }

    .miniatura {
      width: 50px;
      height: auto;
      margin: 0 5px;
      cursor: pointer;
    }
  </style>
      <div class="gallery-container">
        <img src="${this.images[this.currentIndex]}" class="imagenPrincipal" alt="Imagen">
        <div class="navigation-buttons">
          <button id="anteriorBtn">Anterior</button>
          <button id="siguienteBtn">Siguiente</button>
        </div>
        <div class="miniatura-container">
          ${this.images.map((image, index) => `<img src="${image}" class="miniatura" data-index="${index}" alt="miniatura">`).join('')}
        </div>
      </div>
    `;
  }


  addEventListeners() {
    const anteriorBtn = this.shadowRoot.getElementById('anteriorBtn');
    const siguienteBtn = this.shadowRoot.getElementById('siguienteBtn');
    const miniatura = this.shadowRoot.querySelectorAll('.miniatura');

    anteriorBtn.addEventListener('click', () => this.mostrarImagenAnterior());
    siguienteBtn.addEventListener('click', () => this.mostrarImagenSiguiente());

    miniatura.forEach(miniatura => {
      miniatura.addEventListener('click', () => {
        const index = parseInt(miniatura.getAttribute('data-index'));
        this.mostrarImagen(index);
      });
    });
  }

  mostrarImagenAnterior() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.actualizarImagen();
  }

  mostrarImagenSiguiente() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.actualizarImagen();
  }

  mostrarImagen(index) {
    this.currentIndex = index;
    this.actualizarImagen();
  }

  actualizarImagen() {
    const imagenPrincipal = this.shadowRoot.querySelector('.imagenPrincipal');
    imagenPrincipal.src = this.images[this.currentIndex];
  }
}

customElements.define('gallery-component', GalleryComponent);
