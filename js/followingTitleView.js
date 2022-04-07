class FollowingTitleView {
  contentEl = document.querySelector(".content__block");
  imageOne = document.querySelector(".article__image__2");
  imageTwo = document.querySelector(".article__image__3");
  imageThree = document.querySelector(".article__image__4");

  fstTitle = `<h4 class="block__text">Biology <br/> Topics</h4>`;
  sdTitle = `<h4 class="block__text">Environmental Protection Topics</h4>`;
  thTitle = `<h4 class="block__text">Environmental technology Topics</h4>`;

  constructor() {
    [
      [this.imageOne, "one", this.fstTitle],
      [this.imageTwo, "two", this.sdTitle],
      [this.imageThree, "three", this.thTitle],
    ].forEach((arr) =>
      arr[0].addEventListener(
        "mouseenter",
        this.generateMarkUp.bind(this, arr[1], arr[2])
      )
    );
  }

  generateMarkUp(id, content) {
    this.contentEl.style.transform = `translateY(var(--translate-block-${id}))`;
    this.contentEl.style.backgroundColor = `var(--block-${id}-color)`;
    this.contentEl.innerHTML = content;
  }
}

export default new FollowingTitleView();
