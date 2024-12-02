class AdBanner extends HTMLElement {
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

        :host{
          width: ${this.getAttribute('width')};
        }

        img{
          width: 100%;
          object-fit: cover;
        }

        .ad-banner{
          width: 100%;
        }

        </style>
  
        <div class="ad-banner">
          <img src="${this.getAttribute('image')}">
        </div>
        `
    }
  }
  
  customElements.define('ad-banner-component', AdBanner)