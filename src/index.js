import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import Icon from "./burger.png";

const body = document.querySelector("body");

const content = document.querySelector("#content");
console.log(content);

//   create and append header to body
const header = document.createElement("header");
body.insertBefore(header, content);

// logo container
const logoContainer = document.createElement("div");
logoContainer.className = "logo-container";
header.appendChild(logoContainer);

// Icon
const myIcon = new Image();
myIcon.src = Icon;
myIcon.className = "icon";
logoContainer.appendChild(myIcon);

// logo
let logo = document.createElement("h2");
logo.textContent = "Sizzle joint";
logo.className = "logo";
logoContainer.appendChild(logo);

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
let tabs = [tab1, tab2, tab3];
for (let i = 0; i < tabs.length; i++) {
  tabs[i].className = "tab";
}

//Load into home page by default
loadHome();

// functions for switching tabs
function Home() {
  loadHome();
}
function Menu() {
  loadMenu();
}
function Contact() {
  loadContact();
}

tab1.classList.add("active");

// home tab
tab1.addEventListener("click", () => {
  if (!tab1.classList.contains("active")) {
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab1.classList.add("active");
    Home();
  }
});

// menu tab
tab2.addEventListener("click", () => {
  if (!tab2.classList.contains("active")) {
    tab1.classList.remove("active");
    tab3.classList.remove("active");
    tab2.classList.add("active");
    Menu();
  }
});

// contact tab
tab3.addEventListener("click", () => {
  if (!tab3.classList.contains("active")) {
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.add("active");
    Contact();
  }
});
