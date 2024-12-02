class New extends HTMLElement {
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

          img{
            width: 100%;
            object-fit: cover;
          }

          ul{
            list-style: none;
            padding: 0;
          }

          .new{
            width: 100%;
          } 

          .new-category{
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 0.8rem;
          }

          .new-title{
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 11px;
            font-weight: 100;
          }

          .new-description{
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 1rem;
          }

          .new-list{
            font-size: 12px;
          }

          .new-author h4{
            color: #3d3d3d;
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 12px;
            font-weight: 500;
          }
        </style>
        
        <div class="new">
        </div> 
      `

      const newElement = this.shadow.querySelector('.new')

      if (this.getAttribute('image')){
        const newImageElement = document.createElement('div')
        newImageElement.classList.add('new-image')
        newElement.appendChild(newImageElement)
  
        const img = document.createElement('img')
        img.src = this.getAttribute('image')
        newImageElement.appendChild(img)  
      }

      if(this.getAttribute('category')){
        const newCategoryElement = document.createElement('div')
        newCategoryElement.classList.add('new-category')
        newElement.appendChild(newCategoryElement)
  
        const newCategoryTitle = document.createElement('h3')
        newCategoryTitle.textContent = this.getAttribute('category')
        newCategoryElement.appendChild(newCategoryTitle)
      }

      if(this.getAttribute('title')){
        const newTitleElement = document.createElement('div')
        newTitleElement.classList.add('new-title')
        newElement.appendChild(newTitleElement)
  
        const newTitle = document.createElement('h2')
        newTitle.textContent = this.getAttribute('title')
        newTitleElement.appendChild(newTitle)
      }
      
      if(this.getAttribute('description')){
        const newDescriptionElement = document.createElement('div')
        newDescriptionElement.classList.add('new-description')
        newElement.appendChild(newDescriptionElement)

        const newDescription = document.createElement('p')
        newDescription.textContent = this.getAttribute('description')
        newDescriptionElement.appendChild(newDescription)
      }
      
      if(this.getAttribute('author')){
        const newAuthorElement = document.createElement ('div')
        newAuthorElement.classList.add('new-author')
        newElement.appendChild(newAuthorElement)

        const newAuthor = document.createElement('h4')
        newAuthor.textContent = this.getAttribute('author')
        newAuthorElement.appendChild(newAuthor)
      }

    }
  }
  
  customElements.define('new-component', New)