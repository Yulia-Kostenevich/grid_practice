"use strict";

document.querySelectorAll(".card").forEach((card) => {
  const stars = card.querySelectorAll(".star-rating");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      stars.forEach((s) => s.classList.remove("active"));
      for (let starIndex = 0; starIndex <= index; starIndex++) {
        stars[starIndex].classList.add("active");
      }
    });
  });
});
