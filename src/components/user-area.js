class UserArea extends HTMLElement {
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
          .user-area {
            display: flex;
            gap: 1rem;
          }

          .login button{
            align-items: center;
            display: flex;
            gap: 0.2rem;
            background-color: hwb(0 82% 18%);
            border-color: hwb(0 82% 18%);
            border-width: 0.5rem;
            border-style: dashed;
            border-radius: 0.3rem;
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 0.9rem;
            font-weight: 400;
          }

          .login svg {
              width: 1rem;
          }

          .signin button{
            gap: 0.2rem;
            background-color: #FFC700;
            border-color: #FFC700;
            border-width: 0.5rem;
            border-style: dashed;
            border-radius: 0.3rem;
            font-family: 'Times New Roman';
            font-style: italic;
            font-size: 16px;
            font-weight: 700;
          }
        </style>
  
        <div class="user-area">
          <div class="login"> 
            <button>
              <span>Iniciar sesión</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-multiple-plus</title><path d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M8 10H5V7H3V10H0V12H3V15H5V12H8Z" ></path></svg>
            </button>
          </div>
          <div class="signin">
            <button>Suscribirse</button>
          </div>
        </div>
        `
    }
  }
  
  customElements.define('user-area-component', UserArea)