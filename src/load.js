const pageLoad = () => {
  const body = document.querySelector("body");

  const content = document.querySelector("#content");
  console.log(content);

  //   create and append header to body
  const header = document.createElement("header");
  body.insertBefore(header, content);
};

export { pageLoad };
