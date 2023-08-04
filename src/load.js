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

  // tab container
  const tabContainer = document.createElement("div");
  tabContainer.className = "tab-container";
  header.appendChild(tabContainer);

  // tabs
  const tab1 = document.createElement("p");
  const tab2 = document.createElement("p");
  const tab3 = document.createElement("p");
  tabContainer.appendChild(tab1);
  tabContainer.appendChild(tab2);
  tabContainer.appendChild(tab3);
  tab1.textContent = "Home";
  tab2.textContent = "Menu";
  tab3.textContent = "Contact";
};

export { pageLoad };
