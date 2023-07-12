import { html } from 'lit';
import { allLocales } from '../../../generated/locale-codes';
import LitWithoutShadowDom from '../base/lit-without-shadow-dom';
import { updateWhenLocaleChanges } from '@lit/localize';
import { getLocale, localeNames, setLocaleFromUrl } from '../../lit-localization';

class NavLocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-translate"></i>
          ${getLocale()}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          ${allLocales.map((locale) => {
            return html`
              <li>
                <a class="dropdown-item" @click=${() => this._setLocale(locale)}
                  >${localeNames[locale]}</a
                >
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }

  _setLocale(newLocale) {
    if (newLocale !== getLocale()) {
      localStorage.setItem('selected-locale', newLocale);

      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define('nav-locale-picker', NavLocalePicker);
