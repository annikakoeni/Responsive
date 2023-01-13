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



window.addEventListener("load", (event) => {

  createObserver();
}, false);

function createObserver() {
  let observer;

 


  observer = new IntersectionObserver(handleIntersect);
  document.querySelectorAll("#boxleft, #boxright, #picleft, #picright, #symbox, #plant4").forEach(element => {
    observer.observe(element);
    console.log(element);
  })

}


function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry)

    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case 'boxleft':
          case 'picleft':
          entry.target.classList.add('left-right-animation');
          break;
        
        case 'symbox':
          entry.target.classList.add('left-right-todo-animation');
          break;
        case 'boxright':
        case 'picright':
          entry.target.classList.add('right-left-animation');
          break;
        case 'plant4':
          entry.target.classList.add('right-left-todo-animation');
          break;
        default:
          break;
      }
    } else {
      switch (entry.target.id) {
        case 'boxleft':
        case 'picleft':
          entry.target.classList.remove('left-right-animation');
          break;
        case 'symbox':
          entry.target.classList.remove('left-right-todo-animation');
          break;
        case 'boxright':
        case 'picright':
          entry.target.classList.remove('right-left-animation');
          break;
        case 'plant4':
          entry.target.classList.remove('right-left-todo-animation');
          break;
        default:
          break;
      }
    }
  });

}

function updateGenerator(type) {
  switch (type) {
    case "farbe":
      document.querySelector(".platzhalter").getElementsByClassName.backgroundImage= "url('pic/k1.png')"
      
      break;
  
    default:
      break;
  }

}


