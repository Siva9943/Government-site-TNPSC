
  document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector(".up");
    const links = marquee.querySelectorAll("li");

    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        marquee.stop(); 
      });

      link.addEventListener("mouseout", () => {
        marquee.start(); 
      });
    });
  });



 document.addEventListener("DOMContentLoaded", function () {
  const scrollBox = document.getElementById("scrollBox");
  const ul = scrollBox.querySelector("ul");
  let scrollSpeed = 2; 
  let paused = false;

  ul.innerHTML += ul.innerHTML;

  let scrollTop = 0;
  function scrollContent() {
    if (!paused) {
      scrollTop += scrollSpeed;
      if (scrollTop >= ul.scrollHeight / 2) {
        scrollTop = 0; 
      }
      ul.style.transform = `translateY(-${scrollTop}px)`;
    }
    requestAnimationFrame(scrollContent);
  }

  scrollBox.addEventListener("mouseover", () => paused = true);
  scrollBox.addEventListener("mouseout", () => paused = false);

  scrollContent();
});

// image slider

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const progress = document.getElementById("progress");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const slider = document.getElementById("slider");

  let index = 0;
  const delay = 8000; 
  let interval, progressInterval;

  function showSlide(i) {
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  }

 function startProgress() {
    progress.style.transition = "none";
    progress.style.width = "0%";
    setTimeout(() => {
      progress.style.transition = `width ${delay}ms linear`;
      progress.style.width = "100%";
    }, 1000);
  }
   

  function startSlider() {
    startProgress();
    interval = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
      startProgress();
    }, delay);
  }

  function stopSlider() {
    clearInterval(interval);
    clearInterval(progressInterval);
  }

  // Next/Prev Buttons
  nextBtn.addEventListener("click", () => {
    stopSlider();
    index = (index + 1) % slides.length;
    showSlide(index);
    startSlider();
  });

  prevBtn.addEventListener("click", () => {
    stopSlider();
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    startSlider();
  });

  // Pause on hover
  slider.addEventListener("mouseover", stopSlider);
  slider.addEventListener("mouseout", startSlider);

  // Initialize
  showSlide(index);
  startSlider();
});

