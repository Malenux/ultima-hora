class News extends HTMLElement {
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
            width: 70%;
          }

          .news{
            width: 100%;
          }
        </style>
  
        <div class="news"> 
            <slot></slot> 
        </div>
        `
    }
  }
  
  customElements.define('news-component', News)