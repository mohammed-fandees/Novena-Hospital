class Counter {
  constructor(array) {
    this.array = array;
  }

  increment() {
    this.array.forEach((el) => {
      let value = parseInt(el.getAttribute("data-val"));
      let delay = Math.floor(4000 / value);
      let start = 1;
      let counter = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= value) clearInterval(counter);
      }, delay);
    });
  }
}

let array = document.querySelectorAll(".counter");
let started = false;

onscroll = function () {
  if (this.document.querySelector(".about").offsetTop <= scrollY) {
    if(!started) {
      new Counter(array).increment();    
      started = true;
    }
  }
};
