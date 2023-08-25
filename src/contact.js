const loadContact = () => {
  // empty out content
  const content = document.querySelector("#content");
  content.replaceChildren();

  content.className = "contact";

  const heading = document.createElement("h1");
  heading.className = "contact-heading";
  heading.textContent = "Contact us";
  content.appendChild(heading);

  const info = document.createElement("div");
  info.className = "info";
  content.appendChild(info);

  const num = document.createElement("p");
  num.textContent = "Phone number: 725-235-5574";
  const email = document.createElement("p");
  email.textContent = "Email: SizzleJoint@gmail.com";

  info.appendChild(num);
  info.appendChild(email);
};
export { loadContact };
