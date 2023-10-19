let counter = document.getElementById("counter");

document.getElementById("counter__reduce").addEventListener("click", () => {
  if (counter.value > 1) counter.value = +counter.value - 1;
});
document.getElementById("counter__add").addEventListener("click", () => {
  counter.value = +counter.value + 1;
});

// Избранное
let heart = document.getElementById("favorites-icon");
heart.addEventListener("click", () => {
  heart.classList.toggle("_active");
});

let buttonMenu = document.querySelectorAll(".button-menu");


for (let i = 0; i < buttonMenu.length; i++) {
  buttonMenu[i].addEventListener(
    "click",
    (e) => {
      buttonMenu.forEach(el=> el.classList.remove("button-menu_active"))
      e.currentTarget.classList.toggle('button-menu_active');
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide-1", {
    perPage: 4,
    gap: "2rem",
    breakpoints: {
      480: {
        perPage: 2,
        gap: "200px",
        height: "350px",
      },
    },
  });

  splide.mount();

  var splide2 = new Splide("#splide-2", {
    perPage: 4,
    gap: "2rem",
    breakpoints: {
      480: {
        perPage: 2,
        gap: "200px",
        height: "350px",
      },
    },
  });

  splide2.mount();

  const splide3 = new Splide("#splide-mobile", {
    type: "loop",
    height: "14rem",
    perPage: 2,
    perMove: 1,
    grid: {
      // You can define rows/cols instead of dimensions.
      dimensions: [
        [1, 1],
        [2, 2],
        [2, 1],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      gap: {
        row: "6px",
        col: "6px",
      },
    },
    breakpoints: {
      640: {
        height: "8rem",
        perPage: 1,
        grid: {
          dimensions: [
            [2, 2],
            [1, 1],
            [2, 1],
            [1, 2],
            [2, 2],
          ],
        },
      },
    },
  });
  splide3.mount();
});
