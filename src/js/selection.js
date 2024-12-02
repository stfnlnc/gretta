const living = document.getElementById("living");
const room = document.getElementById("room");
const kitchen = document.getElementById("kitchen");
const bathroom = document.getElementById("bathroom");
const show = document.getElementById("show");
const selections = document.querySelectorAll(".selection");
const separators = document.querySelectorAll(".separator");

selections.forEach((selection, key) => {
  selection.addEventListener("mouseover", () => {
    separators.forEach((separator) => {
      separator.classList.remove("bg-black");
      separator.classList.add("bg-neutral-200");
    });
    separators[key].classList.add("bg-black");
    separators[key].classList.remove("bg-neutral-200");
    separators[key + 1].classList.add("bg-black");
    separators[key + 1].classList.remove("bg-neutral-200");
  });
});

const showImage = (item, path, target) => {
  item.addEventListener("mouseover", () => {
    selections.forEach((selection) => {
      selection.classList.add("text-neutral-200");
      selection.classList.remove("text-black");
      selection.classList.add("-z-10");
      selection.classList.remove("z-20");
      selection.classList.add("border-neutral-200");
      selection.classList.remove("border-black");
    });
    target.style.backgroundImage = "url(" + path + ")";
    item.classList.remove("text-neutral-200");
    item.classList.add("text-black");
    item.classList.remove("-z-10");
    item.classList.add("z-20");
    item.classList.remove("border-neutral-200");
    item.classList.add("border-black");
  });
};

showImage(living, "/images/gretta/webp/piece-de-vie.webp", show);
showImage(room, "/images/gretta/webp/chambres.webp", show);
showImage(kitchen, "/images/gretta/webp/cuisines.webp", show);
showImage(bathroom, "/images/gretta/webp/salles-d-eau.webp", show);
