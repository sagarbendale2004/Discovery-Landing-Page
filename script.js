//Swiper JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Change Title

var changeTitle = (t1, t2) => {
  var title1 = document.querySelector("#title-1");
  var title2 = document.querySelector("#title-2");
  var desc = document.querySelector(".desc");
  title1.innerHTML = `<h1>${t1}</h1>`;
  title2.innerHTML = `<h1>${t2}</h1>`;
  desc.innerHTML = `<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Reprehenderit nostrum earum ipsum odio pariatur neque nobis facere
  excepturi, consequatur fugit quisquam suscipit, aliquam
  voluptatibus error molestiae molestias accusantium tenetur
  incidunt.
</div>`;
};
