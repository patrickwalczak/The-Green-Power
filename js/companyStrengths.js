class CompanyStrengths {
  strengthsSection = document.querySelector(".strengths__section");
  strengthsCards = document.querySelectorAll(".strength__card");
  strengthsSectionObserver;

  constructor() {
    this.strengthsSectionObserver = new IntersectionObserver(
      this.strengthsActions.bind(this),
      {
        root: null,
        threshold: [0.2, 0.7],
      }
    );

    this.strengthsSectionObserver.observe(this.strengthsCards[0]);
    this.strengthsSectionObserver.observe(this.strengthsSection);
  }

  strengthsActions(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio < 0.3 && entry.isIntersecting) {
        this.strengthsSection.classList.remove("section--hidden");
        observer.unobserve(this.strengthsSection);
      }
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        this.strengthsCards.forEach((card) => {
          card.classList.add("fadeinAnimation");
        });
        observer.unobserve(this.strengthsCards[0]);
      }
    });
  }
}

export default new CompanyStrengths();
