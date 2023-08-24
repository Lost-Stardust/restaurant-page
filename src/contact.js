const loadContact = () => {
  // empty out content
  const content = document.querySelector("#content");
  content.replaceChildren();

  content.className = "contact";

  const heading = document.createElement("h1");
  heading.className = "contact-heading";
  heading.textContent = "Contact us";
  content.appendChild(heading);
};
export { loadContact };
