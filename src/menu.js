const loadMenu = () => {
  // empty out content
  const content = document.querySelector("#content");
  content.replaceChildren();

  // Add a class to content for changing grid layout
  content.className = "menu";

  const heading = document.createElement("h1");
  heading.className = "heading";
  heading.textContent = "Menu items";
  content.appendChild(heading);

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

  // Add a heading and description for each dish
  items.forEach((div) => {
    let infoContainer = document.createElement("div");
    let itemName = document.createElement("h2");
    let itemDesc = document.createElement("p");

    infoContainer.className = "info-container";
    itemName.className = "item-name";

    div.appendChild(infoContainer);
    infoContainer.appendChild(itemName);
    infoContainer.appendChild(itemDesc);
  });

  // Array that will store the textContent for each itemName in items
  const itemNameContents = [
    "Cheddar BLT Burger",
    "Ginger-Sesame Pork Burger",
    "Japanese-Style Chili Burger",
    "Cheddar-and-Onion Burger",
    "Minetta Burger",
    "Nacho Burgers",
    "Umami Burger",
    "Caprese Burger",
  ];

  // loop that will affix the entries of itemNameContents to each itemName in order
  const itemNames = document.querySelectorAll(".item-name");

  for (let i = 0; i < itemNames.length; i++) {
    itemNames[i].textContent = itemNameContents[i];
  }
};
export { loadMenu };
