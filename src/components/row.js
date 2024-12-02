class Row extends HTMLElement {
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
            .row{
                display: flex;
                gap: 1rem;
                margin: 0 2%;
            }
        </style>
  
        <div class="row"> 
            <slot></slot> 
        </div>
        `
    }
  }
  
  customElements.define('row-component', Row)