const pageLoad = () => {
  // Create content div
  // create and append header to content
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.classList.add("header");

  content.appendChild(header);

  // Create and append restaurant description
  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.textContent =
    " The first thing people notice about French fries is the way it looks. There is lots of sizes of it. It could be long and thick for some restaurant, and there’s a small and thin size, but everything is cooked precisely and delicious. The smell of French fries is getting your attention. A really good French fries when it’s cooked fresh, some of them is putting a spicy seasoning to make it smell like spicy.";
  content.appendChild(desc);

  // create and append heading 2 (for dishes div)
  const heading2 = document.createElement("h2");
  heading2.textContent = "Popular dishes";
  content.appendChild(heading2);

  // Create and append dishes div to content
  const dishes = document.createElement("div");
  dishes.classList.add("dishes");
  content.appendChild(dishes);

  // Create and append dish item divs to dishes div
  const dish0 = document.createElement("div");
  const dish1 = document.createElement("div");
  const dish2 = document.createElement("div");
  dish0.classList.add("0");
  dish1.classList.add("1");
  dish2.classList.add("2");
  dishes.appendChild(dish0);
  dishes.appendChild(dish1);
  dishes.appendChild(dish2);

  // Create divs to contain imgs of the dish items
  // Append the img divs to dish item divs
  const img0 = document.createElement("div");
  img0.classList.add("img0");
  dish0.appendChild(img0);
  const img1 = document.createElement("div");
  img1.classList.add("img1");
  dish1.appendChild(img1);
  const img2 = document.createElement("div");
  img2.classList.add("img2");
  dish2.appendChild(img2);

  // Create links that will state dish name
  // append them to each dish item
  const link0 = document.createElement("a");
  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  link0.textContent = "Chili Cheese Fries";
  link1.textContent = "Mexican loaded Fries";
  link2.textContent = "Pizza Fries";
  link0.href = "https://belleofthekitchen.com/chili-cheese-fries-recipe/";
  link1.href = "https://sweetcaramelsunday.com/mexican-fries/";
  link2.href =
    "https://www.kitchensanctuary.com/pizza-fries/?utm_source=pinterest&utm_medium=social&utm_campaign=social-pug";
  dish0.appendChild(link0);
  dish1.appendChild(link1);
  dish2.appendChild(link2);

  // Add an eventListener to each img div
  img0.addEventListener("click", () => {
    window.open("https://belleofthekitchen.com/chili-cheese-fries-recipe/");
  });
  img1.addEventListener("click", () => {
    window.open("https://sweetcaramelsunday.com/mexican-fries/");
  });
  img2.addEventListener("click", () => {
    window.open(
      "https://www.kitchensanctuary.com/pizza-fries/?utm_source=pinterest&utm_medium=social&utm_campaign=social-pug"
    );
  });

  // Create nav
  const nav = document.createElement("nav");
  header.appendChild(nav);

  const nav0 = document.createElement("p");
  const nav1 = document.createElement("p");
  const nav2 = document.createElement("p");

  nav0.textContent = "Home";
  nav1.textContent = "Menu";
  nav2.textContent = "Contact us";

  nav0.classList.add("nav0");
  nav1.classList.add("nav1");
  nav2.classList.add("nav2");

  nav.appendChild(nav0);
  nav.appendChild(nav1);
  nav.appendChild(nav2);
};

export { pageLoad };
