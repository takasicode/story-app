import { html } from 'lit';
import LitWithoutShadowDom from './base/lit-without-shadow-dom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class ActionElement extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="d-flex justify-content-between align-items-center mt-5">
        <h5>${msg(`Posted Story`)}</h5>
        <a class="btn btn-light" href="/user/add-story.html">
          <i class="bi bi-plus-lg me-1"></i>
          ${msg(`Add Story`)}
        </a>
      </div>
    `;
  }
}

customElements.define('action-element', ActionElement);
