class CardNews extends HTMLElement {
  //Metódo construtor
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  //Metódo build
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    //div card__right: Autor, titulo e noticia.
    const autorNoticia = document.createElement("span");
    autorNoticia.textContent =
      "By " + (this.getAttribute("autorNoticia") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");

    const paragrafoNoticia = document.createElement("p");
    paragrafoNoticia.textContent = this.getAttribute("content");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    cardRight.appendChild(autorNoticia);
    cardRight.appendChild(linkTitle);
    cardRight.appendChild(paragrafoNoticia);

    //div card__left: imagem
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const newImage = document.createElement("img");
    cardLeft.appendChild(newImage);

    componentRoot.appendChild(cardRight);
    componentRoot.appendChild(cardLeft);

    return componentRoot;
  }

  //Metódo estilos
  styles() {}
}
customElements.define("card-news", CardNews);
