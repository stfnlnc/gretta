const menuContact = document.querySelector("#menu-contact");
const menuBurger = document.querySelector("#menu-burger");
const closeContact = document.querySelector("#close-contact");
const contact = document.querySelector("#contact");

menuContact.addEventListener("click", () => {
  contact.style.top = "0";
  document.querySelector("body").classList.add("overflow-hidden");
});

menuBurger.addEventListener("click", () => {
  contact.style.top = "0";
  document.querySelector("body").classList.add("overflow-hidden");
});

closeContact.addEventListener("click", () => {
  contact.style.top = "-100lvh";
  document.querySelector("body").classList.remove("overflow-hidden");
});
