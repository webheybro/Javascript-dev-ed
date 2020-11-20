class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle) {
    if (this.selector.classList.contains("fadeOut-active")) {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(0px, 0px)`;
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fadeOut-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(0px, 100px)`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fadeOut-active");
    }
  }
}

const intro = new Animator("h1");
const button = document.querySelector("button");

//intro.fadeOut(1);
button.addEventListener("click", () => {
  intro.fadeOut(1);
});
