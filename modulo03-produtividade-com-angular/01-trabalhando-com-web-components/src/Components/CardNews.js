class CardNews extends HTMLElement {
  // Método construtor
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método build
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // div card__left: imagem
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const newsImage = document.createElement("img");
    // img
    newsImage.src = this.getAttribute("photo") || "assests/photo-default.jpg";
    newsImage.alt = "Foto da Notícia";
    cardLeft.appendChild(newsImage);

    // Div autor, título e notícia.
    const autorNoticia = document.createElement("span");
    autorNoticia.textContent =
      "By " + (this.getAttribute("autorNoticia") || "Anonymous");

    // Url
    const linkTitle = document.createElement("a");
    linkTitle.textContent = " " + this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    // Parágrafo
    const paragrafoNoticia = document.createElement("p");
    paragrafoNoticia.textContent = this.getAttribute("content"); 

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    cardRight.appendChild(autorNoticia);
    cardRight.appendChild(linkTitle);
    cardRight.appendChild(paragrafoNoticia);    

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  //Método estilo
  styles() {
    const style = document.createElement("style");

    style.textContent = `

    .card {
      width: 100%;
      box-shadow: 10px 10px 5px -5px rgba(131,247,165,0.75);
      -webkit-box-shadow: 10px 10px 5px -5px rgba(131,247,165,0.75);
      -moz-box-shadow: 10px 10px 5px -5px rgba(131,247,165,0.75); /* sombra em volta da caixa */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 0 30px 0;
      padding: 0 0 5px 0;
    }
    
    .card__left img {
      width: 550px;
      height: 200px;
      align-items: left;
      margin-left: 5px;
    }
    
    .card__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding-right: 10px;
      margin: 0 10px;
    }
    
    .card__left {
      display: flex;
      align-items: center;
      padding-left: 0;
      padding-right: 20px;
    }
    
    .card__right > a {
      margin: 10px 5px 5px 10px;
      font-size: 15px;
      padding: 5px;      
      text-decoration: none;
      color: #A99877;
    }
    
    .card__right > span,
    .card__right > p {
      margin: 10px 5px 0 10px;
      padding: 10px 5px; 
      color: #A99877;
    }
    
    .card__right > span {
      font-weight: 400;
    }
    
    .card__right > p {
      color: #A99877;
    }

  `;

    return style;
  }
}
customElements.define("card-news", CardNews);
