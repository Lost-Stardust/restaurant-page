const pageLoad = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Ichiraku Ramen";
  content.appendChild(heading);
};

export { pageLoad };
