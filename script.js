const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true
});

swiper.slideTo(1, false, false);

//animation

window.addEventListener(
  "load",
  (event) => {
    createObserver();

    const generator = document.querySelector("#plant-generator");
    generator.addEventListener("change", function (event) {
      console.log("event.target.value", event.target.value);
      switch (event.target.value) {
        case "Cinerea":
          console.log(document.querySelector("#generator-farbe"));
          break;
        case "Salix":
        default:
          break;
      }
    });
  },
  false
);

function createObserver() {
  let observer;

  observer = new IntersectionObserver(handleIntersect);
  document
    .querySelectorAll(
      "#boxleft, #boxright, #picleft, #picright, #symbox, #plant4, #dreieckanimation"
    )
    .forEach((element) => {
      observer.observe(element);
    });
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "boxleft":
        case "picleft":
          entry.target.classList.add("left-right-animation");
          break;

        case "symbox":
        case "dreieckanimation":
          entry.target.classList.add("left-right-todo-animation");
          break;
        case "boxright":
        case "picright":
          entry.target.classList.add("right-left-animation");
          break;
        case "plant4":
          entry.target.classList.add("right-left-todo-animation");
          break;
        default:
          break;
      }
    } else {
      switch (entry.target.id) {
        case "boxleft":
        case "picleft":
          entry.target.classList.remove("left-right-animation");
          break;
        case "symbox":
        case "dreieckanimation":
          entry.target.classList.remove("left-right-todo-animation");
          break;
        case "boxright":
        case "picright":
          entry.target.classList.remove("right-left-animation");
          break;
        case "plant4":
          entry.target.classList.remove("right-left-todo-animation");
          break;
        default:
          break;
      }
    }
  });
}

function updateGenerator() {
  const art = document.getElementById("generator-art").value;
  const groesse = document.getElementById("generator-groesse").value;
  const farbe = document.getElementById("generator-farbe").value;
  const bildName = `${art}-${groesse}-${farbe}.png`;
  document.querySelector(".platzhalter").style.backgroundColor = "unset";
  document.querySelector(
    ".platzhalter"
  ).style.backgroundImage = `url(./pic/${bildName})`;
}

// chinera - blau weiß
// salix - grün lila
