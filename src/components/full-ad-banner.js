class FullAdBanner extends HTMLElement {
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
        .full-ad-banner{
            width: 100%;
        }
        </style>
  
        <div class="full-ad-banner">
        <img src="./images/fulladbanner.webp" alt="fulladbanner">
        </div>
        `
    }
  }
  
  customElements.define('full-ad-banner-component', FullAdBanner)