class navbarDatacloud extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/assets/logoIcon.png" width="30" class="ms-lg-4 ms-sm-2">
                <img src="/assets/logoLetras.png" width="180" class="ms-1">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <div class="d-flex">
                        <ul class="navbar-nav me-4 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="../inicio/inicio.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="../servicios/servicios.html">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

        .nav-link {
            color: #003857;
            font-family: 'Rubik', sans-serif;
            display: inline-block;
            position: relative;
            line-height: normal;
            text-decoration: none;
            transition: all 0.2s ease;
            border-bottom: 2px solid transparent;
            margin-inline: 10px;
            cursor: pointer;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: #003857;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.2s ease-in-out;
        }

        .nav-link:hover::after {
            transform-origin: left;
            transform: scaleX(1);
        }
    </style>`;
  }
}

window.customElements.define("navbar-datacloud", navbarDatacloud);
