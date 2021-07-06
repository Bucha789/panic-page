//elementos del menu mobile
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const menuMobile = document.querySelector("#menu-mobile-items");
//elementos del overlay
const workItems = document.querySelectorAll(".work .item");
let workItemsCount = workItems.length; //para saber cuantos elementos debes de tener en la pasarela
let currentIndex = 0; //para incrementar o decrementar el valor y así mostrar el debido
const closeOverlay = document.querySelector(".close");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const screen = document.querySelector("#screen");
const detailsContainer = document.querySelector("#details-container");
const detailsItem = document.querySelectorAll(".item.item-hide");
//mostrar/ocultar menu mobile
hamburguerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("menu-mobile-closed");
});
//mandar a llamar al overlay
workItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = parseInt(item.getAttribute("data-id"));
    detailsItem.forEach((item) => {
      if (detailsItem[currentIndex] === item) {
        item.classList.remove("item-hide");
      }
    });
    screen.style["animation-name"] = "fade-in";
    setTimeout(() => {
      detailsContainer.style["display"] = "block";
    }, 1000);
  });
});
// cerrar el overlay con animación y todo
closeOverlay.addEventListener("click", (e) => {
  e.preventDefault();
  screen.style["animation-name"] = "fade-in";
  setTimeout(() => {
    detailsContainer.style["display"] = "none";
  }, 1000);
});
//reiniciar animacion mejor jajaj
screen.addEventListener("animationend", () => {
  screen.style = ""; //para reiniciar la animación
});

//navegar por el overlay de detalles
prevButton.addEventListener("click", (e) => {
  if (currentIndex - 1 < 0) {
    currentIndex = workItems.length;
  }
  currentIndex--; //funciona así porque el length le aumenta uno de mas entonce siempre se mostrará
  loadGallery(currentIndex);
});
nextButton.addEventListener("click", (e) => {
  if (currentIndex + 1 >= workItems.length) {
    currentIndex = 0;
    loadGallery(currentIndex);
  } else {
    currentIndex++;
    loadGallery(currentIndex);
  }
});
function loadGallery(index) {
  detailsItem.forEach(item => {
    item.classList.add('item-hide');
  })
  detailsItem[index].classList.remove('item-hide');
}
