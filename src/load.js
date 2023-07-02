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

  const footer = document.createElement("footer");
  content.appendChild(footer);

  const dishes = document.createElement("div");
  dishes.classList.add("dishes");
  content.appendChild(dishes);
};

export { pageLoad };
