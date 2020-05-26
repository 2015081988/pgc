const tiles = document.querySelectorAll(".right-tile");
const description = document.querySelector(".center");
tiles.forEach((tile, index) => {
    tile.addEventListener("click", (event) => {
        description.innerHTML = tile.firstElementChild.innerHTML;
    });
})
