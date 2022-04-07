class SliderSectionView {
  sectionSlider = document.querySelector(".slider");
  rArrow = document.querySelector(".rightArrow");
  lArrow = document.querySelector(".leftArrow");
  dots = document.querySelectorAll(".dot");
  images = document.querySelectorAll(".slide__image");
  descriptionContainer = document.querySelector(".img__descrip__container");
  firstSlide = `<h3 class="img__descrip__text">
    <span class="first_part typing-class"> With You we planted </span>
    <br />
    <span class="emphasize__num second_part typing-class">5</span>
    <span class="third_part typing-class"> million </span>
    <br />
    <span class="fourth_part typing-class"
      >trees around the world
    </span>
    </h3>`;
  currSlide = 1;
  maxSlide = this.images.length;
  sliderSectionObserver;

  constructor() {
    this.sliderSectionObserver = new IntersectionObserver(
      this.initTypingClass.bind(this),
      {
        root: null,
        threshold: [0.2, 0.7],
      }
    ).observe(this.sectionSlider);

    this.rArrow.addEventListener("click", this.rightArrowActions.bind(this));

    this.lArrow.addEventListener("click", this.leftArrowActions.bind(this));

    this.dots.forEach((dot) => {
      dot.addEventListener("click", this.dotActions.bind(this, dot));
    });
  }

  dotActions(dot) {
    this.currSlide = Number(dot.dataset.id);

    this.controlDots(this.currSlide);

    this.controlDescription(this.currSlide);
  }

  initTypingClass(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5 && entry.isIntersecting) {
        document.querySelector(".img__descrip__container").innerHTML =
          this.firstSlide;
      } else {
        this.sectionSlider.classList.remove("section--hidden");
      }
    });
  }

  rightArrowActions() {
    if (this.currSlide === this.maxSlide) this.currSlide = 1;
    else {
      this.currSlide++;
    }

    this.controlDots(this.currSlide);

    this.controlDescription(this.currSlide);
  }

  leftArrowActions() {
    if (this.currSlide === 1) this.currSlide = 3;
    else {
      this.currSlide--;
    }

    this.controlDots(this.currSlide);

    this.controlDescription(this.currSlide);
  }

  controlDescription() {
    if (this.currSlide === 1) {
      this.descriptionContainer.innerHTML = this.firstSlide;
    }

    if (this.currSlide === 2) {
      this.descriptionContainer.innerHTML = `

  <h3 class="img__descrip__text">
        <span class="first_part_2 typing-class"> The Ocean Clean-Up </span>
        <br />
        <span class="second_part_2 typing-class">Project allows to remove</span>
        <br />
        <span class="third_part_2 typing-class emphasize__num">100</span>
        <span class="fourth_part_2 typing-class">tons of plastic </span>
      </h3>

    `;
    }

    if (this.currSlide === 3) {
      this.descriptionContainer.innerHTML = `

  <h3 class="img__descrip__text">
        <span class="first_part_3 typing-class">We collected about</span> <span class="second_part_3 typing-class emphasize__num">50</span>
        <br />
        <span class="third_part_3 typing-class">million dollars for different</span>
        <br />
        <span class="fourth_part_3 typing-class">Animal Charities</span>
      </h3>
    `;
    }
  }

  controlDots() {
    this.dots.forEach((dot) => {
      dot.classList.remove("dot__active");
    });

    this.images.forEach((img) => {
      img.classList.add("hidden");
    });

    this.dots[this.currSlide - 1].classList.add("dot__active");
    this.images[this.currSlide - 1].classList.remove("hidden");

    const classArr = new Array(...this.sectionSlider.classList);
    this.sectionSlider.classList.remove(classArr[1]);
    this.sectionSlider.classList.add(`slider__BG__${this.currSlide}`);
  }
}

export default new SliderSectionView();
