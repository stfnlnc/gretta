import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const highlightText = document.querySelector("#highlight-text");

const highlightLines = new SplitText(highlightText, { type: "lines" });

highlightLines.lines.forEach((line) => {
  gsap.to(line, {
    color: "black",
    scrollTrigger: {
      trigger: line,
      start: "top 65%",
      end: "bottom 65%",
      scrub: 1,
      markers: false,
    },
  });
});
