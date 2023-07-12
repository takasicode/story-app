import { html } from 'lit';
import LitWithoutShadowDom from '../base/lit-without-shadow-dom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CardStoryDashboard extends LitWithoutShadowDom {
  static properties = {
    image: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
    updateWhenLocaleChanges(this);
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('image')) {
      throw new Error(`Atribut "image" harus diterapkan pada elemen ${this.localName}`);
    }
    if (!this.hasAttribute('name')) {
      throw new Error(`Atribut "name" harus diterapkan pada elemen ${this.localName}`);
    }
    if (!this.hasAttribute('description')) {
      throw new Error(`Atribut "description" harus diterapkan pada elemen ${this.localName}`);
    }
    if (!this.hasAttribute('date')) {
      throw new Error(`Atribut "date" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="card shadow">
        <img src="${this.image}" class="card-img-top" alt="${this.name}" />
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${this.date}</h6>
          <p
            class="card-text"
            style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
          >
            ${this.description}
          </p>
        </div>
        <div class="card-footer d-flex flex-column flex-sm-row gap-2 justify-center" id="card-crud">
          <a
            href="/user/edit-story.html?id=${this.id}"
            title="${msg(`Edit Story`)}"
            class="btn btn-warning"
          >
            <i class="bi bi-pencil-square"></i>
          </a>
          <button title="${msg(`Delete Story`)}" class="btn btn-danger" id="delete-story">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story-dashboard', CardStoryDashboard);
