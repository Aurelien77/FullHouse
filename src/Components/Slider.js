import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Colis from "./Pages/Colis";
import Cafe from "./Pages/Cafe";
import Jeux from "./Pages/Jeux";
import Achats from "./Pages/Achats";
import Repos from "./Pages/Repos";

const Slider = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: -200, // Aucun espace entre les cartes
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      
        clickable: true,
      },
      loop: false, // Ne pas faire boucler
      on: {
        init: function () {
          console.log("Swiper initialized");
          this.slideTo(2, 0); // Position initiale de la diapositive
        },
        slideChange: function () {
          const slides = document.querySelectorAll(".swiper-slide");
          slides.forEach((slide, index) => {
            slide.classList.remove("swiper-slide-next", "swiper-slide-prev", "swiper-slide-next-next", "swiper-slide-prev-prev");

            const slideIndex = this.realIndex;

            if (index === slideIndex + 1) {
              slide.classList.add("swiper-slide-next");
            } else if (index === slideIndex - 1) {
              slide.classList.add("swiper-slide-prev");
            } else if (index === slideIndex + 2) {
              slide.classList.add("swiper-slide-next-next");
            } else if (index === slideIndex - 2) {
              slide.classList.add("swiper-slide-prev-prev");
            }
          });
        }
      }
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="slider">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Repos />
          </div>
          <div className="swiper-slide">
            <Cafe />
          </div>
          <div className="swiper-slide">
            <Jeux />
          </div>
          <div className="swiper-slide">
            <Achats />
          </div>
          <div className="swiper-slide">
            <Colis />
          </div>
        </div>

        {/* Pagination and Navigation */}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev" onClick={goToPreviousSlide}></div>
        <div className="swiper-button-next" onClick={goToNextSlide}></div>
      </div>
    </div>
  );
};

export default Slider;
