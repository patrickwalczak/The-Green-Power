class FollowingTitleView {
  images = document.querySelectorAll('.artImg');
  sectionContainer = document.querySelector('.articles__section');
  sectionObserver;

  constructor() {
    this.sectionObserver = new IntersectionObserver(
      this.addImagesActions.bind(this),
      {
        root: null,
        threshold: 0.1,
        rootMargin: '150px',
      }
    ).observe(this.sectionContainer);
  }

  addImagesActions(entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      this.images.forEach((img) => img.classList.add('loaded'));
      observer.unobserve(this.sectionContainer);
    }
  }
}

export default new FollowingTitleView();
