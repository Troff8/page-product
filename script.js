// counter
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

// кнопки в описании
let buttonMenu = document.querySelectorAll(".button-menu");
for (let i = 0; i < buttonMenu.length; i++) {
  buttonMenu[i].addEventListener("click", (e) => {
    buttonMenu.forEach((el) => el.classList.remove("button-menu_active"));
    e.currentTarget.classList.toggle("button-menu_active");
  });
}

let colorsArray = document.querySelector(".list-colors").children;
let sizesArray = document.querySelector(".list-sizes").children;
for (let i = 0; i < colorsArray.length; i++) {
  colorsArray[i].addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("list-color_active");
  });
}
for (let i = 0; i < sizesArray.length; i++) {
  sizesArray[i].addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("list-color_active");
  });
}

// slider
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

  var splide = new Splide("#main-carousel", {
    pagination: false,
  });

  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go(index);
    });
  }

  splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });

  splide.mount();
});
