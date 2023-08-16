const loadMenu = () => {
  // empty out content
  const content = document.querySelector("#content");
  content.replaceChildren();

  // Add a class to content for changing grid layout
  content.className = "menu";

  // create divs for menu items
  const items = [];
  let n = 0;
  for (let i = 0; i < 8; i++) {
    items[i] = document.createElement("div");
    items[i].className = "item" + ++n;
    console.log(items);
    content.appendChild(items[i]);
    let img = document.createElement("img");
    items[i].appendChild(img);
  }
};
export { loadMenu };
