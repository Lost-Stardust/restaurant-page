const pageLoad = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.classList.add("header");
  heading.textContent = "Fries n' Thighs";
  content.appendChild(heading);
};

export { pageLoad };
