class HeroView {
  leftHeroImage = document.querySelector('.hero__business_image');
  rightHeroImage = document.querySelector('.hero__nature_image');
  leftHeroButton = document.querySelector('.hero__left_button');
  rightHeroButton = document.querySelector('.hero__right_button');
  heroHeader = document.querySelector('.hero__heading');

  hero__leftButtonLinesContainer = document.querySelector(
    '#hero__left_button_lines'
  );

  hero__rightButtonLinesContainer = document.querySelector(
    '#hero__right_button_lines'
  );

  hero__leftContentWrapper = document.querySelector(
    '#hero__business_image_content'
  );

  hero__rightContentWrapper = document.querySelector(
    '#hero__nature_image_content'
  );

  hero__rightContentWords = document.querySelectorAll('.word__H');

  hero__leftContentWords = document.querySelectorAll('.word__L');

  constructor() {
    this.leftHeroButton.addEventListener(
      'click',
      this.handleClickHeroButton.bind(
        this,
        this.leftHeroButton,
        'active',
        'unactive',
        this.hero__leftButtonLinesContainer,
        this.hero__leftContentWrapper,
        this.hero__leftContentWords
      )
    );
    this.rightHeroButton.addEventListener(
      'click',
      this.handleClickHeroButton.bind(
        this,
        this.rightHeroButton,
        'unactive',
        'active',
        this.hero__rightButtonLinesContainer,
        this.hero__rightContentWrapper,
        this.hero__rightContentWords
      )
    );
    this.rightHeroImage.addEventListener(
      'mouseenter',
      this.mouseenterHeroImgHandler.bind(
        this,
        this.leftHeroImage,
        this.leftHeroButton,
        this.hero__leftButtonLinesContainer,
        this.hero__leftContentWrapper,
        this.hero__leftContentWords
      )
    );
    this.leftHeroImage.addEventListener(
      'mouseenter',
      this.mouseenterHeroImgHandler.bind(
        this,
        this.rightHeroImage,
        this.rightHeroButton,
        this.hero__rightButtonLinesContainer,
        this.hero__rightContentWrapper,
        this.hero__rightContentWords
      )
    );
    this.leftHeroImage.addEventListener(
      'mouseleave',
      this.resetHero.bind(this)
    );
    this.rightHeroImage.addEventListener(
      'mouseleave',
      this.resetHero.bind(this)
    );
  }

  resetHero() {
    // Reset left side
    this.mouseenterHeroImgHandler(
      this.leftHeroImage,
      this.leftHeroButton,
      this.hero__leftButtonLinesContainer,
      this.hero__leftContentWrapper,
      this.hero__leftContentWords
    );
    // Reset right side
    this.mouseenterHeroImgHandler(
      this.rightHeroImage,
      this.rightHeroButton,
      this.hero__rightButtonLinesContainer,
      this.hero__rightContentWrapper,
      this.hero__rightContentWords
    );
  }

  mouseenterHeroImgHandler(
    oppositeImg,
    btn,
    linesContainer,
    contentWrapper,
    contentWords
  ) {
    this.leftHeroImage.style.clipPath = 'var(--left--normal)';
    this.rightHeroImage.style.clipPath = 'var(--right--normal)';

    this.heroHeader.classList.remove('hideVisibility');

    linesContainer.style.bottom = '-15%';
    linesContainer.style.left = '-8%';

    btn.classList.remove('isHovered');

    oppositeImg.classList.remove('imageIsHovered');

    contentWrapper.classList.remove('displayContent');

    contentWords.forEach((word) => {
      word.classList.remove('wordHeroRight');
    });
  }

  handleClickHeroButton(
    btn,
    leftState,
    rightState,
    linesContainer,
    contentWrapper,
    contentWords
  ) {
    if (btn.classList.contains('isHovered')) return this.resetHero();

    this.leftHeroImage.style.clipPath = `var(--left--${leftState})`;

    this.rightHeroImage.style.clipPath = `var(--right--${rightState})`;

    this.heroHeader.classList.add('hideVisibility');

    linesContainer.style.bottom = '0%';
    linesContainer.style.left = '0%';

    btn.classList.add('isHovered');

    if (leftState === 'active') {
      this.leftHeroImage.classList.add('imageIsHovered');
    } else {
      this.rightHeroImage.classList.add('imageIsHovered');
    }
    contentWrapper.classList.add('displayContent');

    contentWords.forEach((word) => {
      word.classList.add('wordHeroRight');
    });
  }
}

export default new HeroView();
