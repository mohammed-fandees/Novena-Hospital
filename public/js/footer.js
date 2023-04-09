class Year {
  constructor(span) {
    this.span = span;
  }

  update() {
    let year = new Date().getFullYear();
    this.span.textContent = year;
  }
}

new Year(document.querySelector("#year")).update();
