console.log("Welcome");

import Bootstrap from "bootstrap";
import fancybox from "@fancyapps/ui";
import jQuery from "jquery";
import Swiper from "swiper";

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});