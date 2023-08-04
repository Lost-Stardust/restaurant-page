const pageLoad = () => {
  const body = document.querySelector("body");

  const content = document.querySelector("#content");
  console.log(content);

  //   create and append header to body
  const header = document.createElement("header");
  body.insertBefore(header, content);

  // logo
  let logo = document.createElement("h2");
  logo.textContent = "Sizzle joint";
  logo.className = "logo";
  header.appendChild(logo);
};

export { pageLoad };
