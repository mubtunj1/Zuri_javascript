let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

document.
  getElementById('carousel_btn_next')
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document.
  getElementById('carousel_btn_prev')
  .addEventListener("click", function () {
    moveToPrevSlide();
  });


document.
 addEventListener("mouseover", function () {
  document.getElementById("carousel_btn_prev").hidden = false;
  document.getElementById("carousel_btn_next").hidden = false;
})

document
  .addEventListener('mouseout', function () {
    document.getElementById("carousel_btn_prev").hidden = true;
    document.getElementById("carousel_btn_next").hidden = true;
  })

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('visible');
    slide.classList.add('carousel-item-hidden')
  }

  slides[slidePosition].classList.add("visible")
}

function moveToNextSlide() {
  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition()
  console.log(slidePosition);

};



function moveToPrevSlide() {
  if (slidePosition == 0) {
    slidePosition = 5;
  } else {
    slidePosition--;
  }
  updateSlidePosition()
  console.log(slidePosition);
};


