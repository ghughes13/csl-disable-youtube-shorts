function hideShorts() {
  const shortsShelf = document.querySelectorAll("ytd-rich-shelf-renderer");
  console.log(shortsShelf);

  shortsShelf.forEach((shelf) => {
    if (shelf.hasAttribute("is-shorts")) shelf.style = "display: none";
  });
}

const resizeObserver = new ResizeObserver(() => {
  hideShorts();
});

window.addEventListener("load", function () {
  hideShorts();
});

resizeObserver.observe(document.body);
