
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          padding: 16px 5% 16px 5%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        #menu-mobile {
          display: none;
        }

        header nav {
          padding: 24px 0 24px 0;
        }

        header nav a {
          font-size: 16px;
          font-weight: 400;
          padding: 24px;
          text-decoration: none;
          color: var(--text-color);
        }

        header nav a:hover {
          color: var(--link-color);
          border-bottom: 1px solid var(--link-color);
        }

        header nav .link-portfolio {
          color: var(--link-color);
        }
      </style>
      <header id="#home">
        <h3>Romoufer</h3>

        <button aria-label="Abrir menu"  aria-controls="menu" aria-haspopup="true" aria-expanded="false"
        id="menu-mobile"><span id="hamburger"></span></button>

        <nav id="nav" role="menu">
            <a role="menuitem" href="#home">Home</a>
            <a role="menuitem" href="#section-about">Sobre</a>
            <a role="menuitem" href="#social-medias">Contato</a>
            <a role="menuitem" href="portfolio.html" class="link-portfolio">Portfólio</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
      