const pageLoad = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.classList.add("header");
  heading.textContent = "Fries n' Thighs";
  content.appendChild(heading);

  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.textContent =
    " The first thing people notice about French fries is the way it looks. There is lots of sizes of it. It could be long and thick for some restaurant, and there’s a small and thin size, but everything is cooked precisely and delicious. The smell of French fries is getting your attention. A really good French fries when it’s cooked fresh, some of them is putting a spicy seasoning to make it smell like spicy.";
  content.appendChild(desc);

  const heading2 = document.createElement("h2");
  heading2.textContent = "Popular dishes";
  content.appendChild(heading2);

  const dishes = document.createElement("div");
  dishes.classList.add("dishes");
  content.appendChild(dishes);

  const dish0 = document.createElement("div");
  const dish1 = document.createElement("div");
  const dish2 = document.createElement("div");
  dish0.classList.add("0");
  dish1.classList.add("1");
  dish2.classList.add("2");
  dishes.appendChild(dish0);
  dishes.appendChild(dish1);
  dishes.appendChild(dish2);

  const img0 = document.createElement("div");
  img0.classList.add("img0");
  dish0.appendChild(img0);
  const img1 = document.createElement("div");
  img1.classList.add("img1");
  dish1.appendChild(img1);
  const img2 = document.createElement("div");
  img2.classList.add("img2");
  dish2.appendChild(img2);

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

  const nav = document.createElement("nav");
  content.appendChild(nav);

  const nav0 = document.createElement("button");
  const nav1 = document.createElement("button");
  const nav2 = document.createElement("button");

  nav0.textContent = "Home";
  nav1.textContent = "Menu";
  nav2.textContent = "Contact us";

  nav.appendChild(nav0);
  nav.appendChild(nav1);
  nav.appendChild(nav2);
};

export { pageLoad };
