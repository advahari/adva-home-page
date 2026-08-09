const imageFiles = [
  'ai-course-for-educators.jpeg',
  'graphic-designers-lecture.JPEG',
  'meetup-for-business-owners.jpg',
  'oracle-ai-days-conference-lecture.JPEG',
  'seminar-ai-based-assistants.png',
  'workshop-for-rafael-scholars.JPEG'
];

const slidesEl = document.getElementById('slides');
const dotsEl = document.getElementById('dots');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');

let currentIndex = 0;

function getAltText(fileName) {
  return fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function renderSlides() {
  slidesEl.innerHTML = imageFiles
    .map(
      (fileName, index) => `
        <figure class="slide ${index === currentIndex ? 'active' : ''}">
          <img src="images/${fileName}" alt="${getAltText(fileName)}" />
        </figure>
      `
    )
    .join('');

  dotsEl.innerHTML = imageFiles
    .map(
      (_, index) => `
        <button
          class="dot ${index === currentIndex ? 'active' : ''}"
          type="button"
          aria-label="Show slide ${index + 1}"
          data-index="${index}"
        ></button>
      `
    )
    .join('');

  document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = Number(dot.dataset.index);
      renderSlides();
      resetAutoRotate();
    });
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % imageFiles.length;
  renderSlides();
}

function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
  renderSlides();
}

let autoRotateId;

function resetAutoRotate() {
  clearInterval(autoRotateId);
  autoRotateId = setInterval(showNextSlide, 4000);
}

prevButton.addEventListener('click', () => {
  showPreviousSlide();
  resetAutoRotate();
});

nextButton.addEventListener('click', () => {
  showNextSlide();
  resetAutoRotate();
});

renderSlides();
resetAutoRotate();
