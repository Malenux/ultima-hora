class FeaturedNews extends HTMLElement {
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
          a {
            text-decoration: none;
            color: inherit;
          }

          ul{
            list-style: none;
            padding: 0;
          }

          .featured-news ul{
            align-items: center;
            display: flex;
            gap: 0.5rem;
            justify-content: space-between;
        }
          
          .featured-news ul li{
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: .75rem;
          }
          
          .featured-news ul li:not(:first-child):not(:last-child)::after {
            padding-left: .25rem;
            content: "-";
          }
          
          .featured-news ul li:first-child{
            text-transform: uppercase;
            color: hsl(0, 100%, 50%);
            font-weight: 700;
          }
          
          .featured-news ul li:first-child::after{
            content: ":";
          }
        </style>
  
        <div class="featured-news">
          <ul>
            <li>hoy es noticia</li>
            <li><a href="">Sueldos de los funcionarios</a></li>
            <li><a href="">Desalojo en palma</a></li>
            <li><a href="">Agostina Rubini</a></li>
          </ul>
        </div>
        `
    }
  }
  
  customElements.define('featured-news-component', FeaturedNews)