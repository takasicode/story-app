import { html } from 'lit';
import LitWithoutShadowDom from '../base/lit-without-shadow-dom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FormTitleAddStory extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html` <h5 class="text-center mt-5">${msg(`Send Your Story on`)} Story Apps!</h5> `;
  }
}

customElements.define('form-title-add-story', FormTitleAddStory);
