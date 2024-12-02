const cursor = document.getElementById("cursor");
const team = document.getElementById("team");

team.addEventListener("mouseover", () => {
  cursor.style.display = "flex";
  document.addEventListener("mousemove", onMouseMove);
});

team.addEventListener("mouseout", () => {
  cursor.style.display = "none";
  document.removeEventListener("mousemove", onMouseMove);
});

function onMouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
}
