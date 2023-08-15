const loadMenu = () => {
  // empty out content
  const content = document.querySelector("#content");
  content.replaceChildren();

  // create divs for menu items
  const items = [];
  let n = 0;
  for (let i = 0; i < 8; i++) {
    items[i] = document.createElement("div");
    items[i].className = "item" + ++n;
    console.log(items);
  }
};
export { loadMenu };
