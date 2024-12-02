class Main extends HTMLElement {
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
            width: 100%;
          }

          main{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 0 20%;
          }
        </style>
  
        <main> 
          <slot></slot> 
        </main>
        `
    }
  }
  
  customElements.define('main-component', Main)