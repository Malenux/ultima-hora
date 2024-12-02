class Editions extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes () {}

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /*html*/`
      <style>
        ul{
          list-style: none;
          padding: 0;
        }

        .editions ul{
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }

        .editions ul li{
              font-family: "Roboto", sans-serif;
              text-transform: uppercase;
        }

        .editions ul li:not(:last-child)::after{
          content: "|";
          padding-left: 0.5rem;
        }
      </style>

      <div class="editions">
        <ul>
          <li>Mallorca</li>
          <li>Menorca</li>
          <li>Ibiza y Formentera</li>
        </ul>
      </div>
      `
  }
}

customElements.define('editions-component', Editions)