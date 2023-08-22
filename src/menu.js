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
    itemDesc.className = "item-desc";

    div.appendChild(infoContainer);
    infoContainer.appendChild(itemName);
    infoContainer.appendChild(itemDesc);
  });

  // Array that will store the textContent for each itemName and itemDesc in items
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

  const itemDescContents = [
    "The Cheddar BLT Burger is a mouthwatering twist on the classic BLT. This juicy burger patty is topped with crispy bacon, lettuce, and tomato, and finished off with a generous layer of melted cheddar cheese. Perfect for satisfying cravings for both burgers and BLTs at once!",
    "Delight your taste buds with the Ginger-Sesame Pork Burger. Made with succulent pork infused with ginger and sesame flavors, this burger offers a unique and savory experience. Served on a toasted bun with your choice of toppings, it's a delicious and satisfying option for burger enthusiasts looking for something a little different.",
    "Experience the bold flavors of the Japanese-Style Chili Burger. This burger takes inspiration from Japanese cuisine, combining a juicy beef patty with a tangy and slightly spicy chili sauce infused with traditional Japanese spices. Topped with fresh lettuce and served on a toasted bun, it's a fusion of flavors that will leave your taste buds craving more.",
    "The Cheddar-and-Onion Burger is a classic burger with a twist. This mouthwatering burger features a juicy patty topped with caramelized onions and a generous layer of melted cheddar cheese, creating a delectable flavor combination that is sure to please. Served on a toasted bun and customizable with your preferred toppings.",
    "Indulge in the exquisite Minetta Burger, a true culinary masterpiece. This legendary burger is crafted with prime dry-aged beef, resulting in a juicy and flavorful patty that is full of character. Topped with caramelized onions, melted American cheese, and served on a toasted bun. The Minetta Burger is a must-try for burger connoisseurs.",
    "Get ready to take your taste buds on a fiesta with Nacho Burgers. These flavor-packed creations combine juicy beef patties with zesty nacho cheese sauce, crunchy tortilla chips, and tangy salsa, creating a burger with a Mexican twist. Each bite is a burst of deliciousness that will make you feel like you're enjoying a plate of loaded nachos in burger form.",
    "Savor the rich flavor of the Umami Burger, a burger that takes taste to the next level. The Umami Burger features a juicy beef patty, topped with a variety of umami-rich ingredients such as sautéed mushrooms, caramelized onions, melted provolone cheese, and a savory umami sauce. This unique blend of flavors creates a burger experience that transcends the traditional and evokes a sense of culinary adventure.",
    "Caprese Burger is a gourmet take on the classic Italian Caprese salad. This mouthwatering burger features a juicy beef patty topped with fresh tomato, creamy mozzarella cheese, basil leaves, and balsamic glaze, creating a refreshing and flavorful Mediterranean-inspired experience.",
  ];

  // loop that will affix the entries of itemNameContents to each itemName in order
  const itemNames = document.querySelectorAll(".item-name");
  const itemDescs = document.querySelectorAll(".item-desc");

  for (let i = 0; i < itemNames.length; i++) {
    itemNames[i].textContent = itemNameContents[i];
    itemDescs[i].textContent = itemDescContents[i];
  }
};
export { loadMenu };
