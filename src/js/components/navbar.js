import { html } from 'lit';
import LitWithoutShadowDom from './base/lit-without-shadow-dom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavbarElement extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
    name: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
    updateWhenLocaleChanges(this);
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
    if (!this.hasAttribute('name')) {
      throw new Error(`Atribut "name" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });

    return html`
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">${this.brandName}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${this.brandName}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 gap-3 align-items-center pe-3">
                <nav-link to="/" content="${msg(`Home`)}"></nav-link>
                <nav-link to="/user/dashboard.html" content="${msg(`Dashboard`)}"></nav-link>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-nowrap"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <div class="d-inline-block">
                      <span>${this.name}</span>
                      <img
                        id="imgUserLogged"
                        style="width: 40px;height: 40px"
                        class="img-fluid rounded-circle object-fit-cover"
                        src="https://github.com/takasicode.png"
                        alt="${this.name}"
                      />
                    </div>
                    <span id="nameUserLogged"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <a class="dropdown-item" id="userProfile" @click=${this._userProfile}>
                      ${msg(`Your Profile`)}
                    </a>
                    <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}>
                      ${msg(`Sign Out`)}
                    </a>
                  </ul>
                </li>
                <nav-locale-picker class="nav-item"></nav-locale-picker>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-element', NavbarElement);
