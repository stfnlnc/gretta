import gsap from "gsap";

const loading = document.querySelector("#loading");
const preloader = document.querySelector("#preloader");
const reveals = document.querySelectorAll(".reveal");

window.onload = function () {
  loading.style.width = "100%";
  setTimeout(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
    preloader.style.top = "-100lvh";
    setTimeout(() => {
      reveals.forEach((reveal) => {
        gsap.fromTo(
          reveal,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.6,
            ease: "power4.inOut",
          },
        );
      });
    }, 400);
  }, 2200);
};
