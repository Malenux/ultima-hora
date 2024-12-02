class Header extends HTMLElement {
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
           .top-head{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                background-color: #E6E6E6;
                padding: 0 20%;
            }

            .main-head{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #CD0000;
                padding: 1.5rem 20%;
            }

            .bottom-head{
                padding: 0 20%;
                background-color: #E6E6E6;     
            }
        </style>
  
        <header>
            <div class="top-head"> 
                <slot name="top-head"></slot> 
            </div>
            <div class="main-head">
                <slot name="main-head"></slot> 
            </div>
            <div class="bottom-head">
                <slot name="bottom-head"></slot> 
            </div>
        </header>
        `
    }
  }
  
  customElements.define('header-component', Header)