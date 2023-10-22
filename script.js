const basket = {};

// counter
let counter = document.getElementById("counter");
document.getElementById("counter__reduce").addEventListener("click", () => {
  if (counter.value > 1) counter.value = +counter.value - 1;
});
document.getElementById("counter__add").addEventListener("click", () => {
  if (counter.value < 10) counter.value = +counter.value + 1;
});

// Избранное
let heart = document.getElementById("favorites-icon");
heart.addEventListener("click", () => {
  heart.classList.toggle("_heart-active");
});

// кнопки в описании
let buttonMenu = document.querySelectorAll(".button-menu");
for (let i = 0; i < buttonMenu.length; i++) {
  buttonMenu[i].addEventListener("click", (e) => {
    buttonMenu.forEach((el) => el.classList.remove("button-menu_active"));
    e.currentTarget.classList.toggle("button-menu_active");
    if (e.currentTarget.id === "button-description") {
      document.querySelector(".text-description").classList.add("_text-active");
      document.querySelector(".text-buy").classList.remove("_text-active");
      document.querySelector(".text-methods").classList.remove("_text-active");
    }
    if (e.currentTarget.id === "button-buy") {
      document.querySelector(".text-buy").classList.add("_text-active");
      document
        .querySelector(".text-description")
        .classList.remove("_text-active");
      document.querySelector(".text-methods").classList.remove("_text-active");
    }
    if (e.currentTarget.id === "button-methods") {
      document.querySelector(".text-methods").classList.add("_text-active");
      document.querySelector(".text-buy").classList.remove("_text-active");
      document
        .querySelector(".text-description")
        .classList.remove("_text-active");
    }
  });
}

// Таблица
// Сейчас цвета для квадратиков заданы статично в css, планируется что при подгрузке цветов у них уже будет содержаться цвет
let colorsArray = document.querySelectorAll(".column-table__color");
let sizesArray = document.querySelectorAll(".column-table__sizes");
for (let i = 0; i < colorsArray.length; i++) {
  colorsArray[i].addEventListener("click", (e) => {
    for (let i = 0; i < colorsArray.length; i++) {
      colorsArray[i].classList.remove("square-active");
    }
    e.currentTarget.classList.add("square-active");
  });
}


for (let i = 0; i < sizesArray.length; i++) {
  for (let j = 0; j < sizesArray[i].children.length; j++) {
    sizesArray[i].children[j].addEventListener("click", (e) => {
      // Здесь смотрим на currentColor === sizesArray[i].children.id 
      if (true) {
        for (let i = 0; i < sizesArray.length; i++) {
          for (let j = 0; j < sizesArray[i].children.length; j++) {
            sizesArray[i].children[j].classList.remove("square-active");
          }
        }

        e.currentTarget.classList.add("square-active");
      }
    });
  }
}

// Кнопка добавить в корзину - собираем всю инфу о заказе и кидаем в баскет
const buttonBasket = document
  .getElementById("button-basket")
  .addEventListener("click", () => {
    basket.product = document.getElementById("product-title").textContent;
    basket.price = document.getElementById("price").textContent;
    basket.count = document.getElementById("counter").value;
    console.log(basket);
  });

// Слайдеры
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
      650: {
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
      650: {
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

// Картинки на фул скрин - сейчас просто вешается класс,в проекте уже думаю есть модалка и можно будет использовать ее
const images = document.querySelectorAll(".product__image");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    images[i].classList.toggle("_image-fullscreen");
  });
}
