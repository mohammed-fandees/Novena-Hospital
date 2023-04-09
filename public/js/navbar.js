let get = (el) => document.querySelector(`${el}`);

class Navbar {
  constructor(navbar, submenu) {
    this.nav = navbar;
    this.sub = submenu;
  }

  showNavbar() {
    this.nav.classList.toggle("show");
  }

  showSubmenu() {
    this.sub.classList.toggle("clicked-menu");
    get(".menu").classList.toggle("visible");
  }
}

let navbar = new Navbar(get("#navbar"), get(".menu ul"));

get("#button").addEventListener("click", () => navbar.showNavbar());
get(".menu").addEventListener("click", () => navbar.showSubmenu());
