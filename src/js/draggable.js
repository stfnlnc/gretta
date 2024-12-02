import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(Draggable, InertiaPlugin);

const draggable = document.getElementById("draggable");

Draggable.create(draggable, {
  type: "x",
  bounds: "#team",
  dragResistance: 0.3,
  inertia: true,
  cursor: "none",
});
