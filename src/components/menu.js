class Menu extends HTMLElement {
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
          .menu ul{
              align-items: center;
              display: flex;
              justify-content: space-between;
              margin: 0.3rem 0;
          }
          ul{
            list-style: none;
            padding: 0;
          }
          .menu ul li{
              font-family: "Roboto Condensed", sans-serif;
              font-weight: 700;
          }

          .menu ul li svg{
              width: 2rem;
          }
        </style>
  
        <div class="menu"> 
          <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l8 7.77-1.5 1.46-6.5-6.3-6.49 6.3L4 11.77 12 4zM6.29 19v-4.98L12 8.61l5.71 5.4V19h-4.08v-4.53h-3.26V19H6.29z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </li>
            <li>Noticias</li>
            <li>Sucesos</li>
            <li>Deportes</li>
            <li>Opinión</li>
            <li>Xaloc</li>
            <li>Participa</li>
            <li>Ocio</li>
            <li>Vips</li>
            <li>Guía útil</li>
            <li>Siurells club valores</li>
            <li>Monográficos</li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
            </li>
          </ul>
        </div>
        `
    }
  }
  
  customElements.define('menu-component', Menu)