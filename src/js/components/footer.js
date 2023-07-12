import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterElement extends LitElement {
  static styles = css`
    p {
      text-align: center;
      font-size: 1.2rem;
      margin: 0 auto;
    }
    a {
      color: #000000;
      text-decoration: none;
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <p>
        ${msg(`Copyright © 2023`)}
        <a href="https://github.com/takasicode" target="_blank" rel="noopener noreferrer">
          Story Apps
        </a>
      </p>
    `;
  }
}

customElements.define('footer-element', FooterElement);
