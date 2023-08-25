// import Icon from "./burger.png";
const loadHome = () => {
  const body = document.querySelector("body");

  const content = document.querySelector("#content");
  console.log(content);

  content.classList.remove("menu");
  content.classList.remove("contact");
  content.replaceChildren();

  // image in content
  const img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img.className = "content-img";
  content.appendChild(img);
  const imgBorder = document.createElement("div");
  imgBorder.className = "img-border";
  content.appendChild(imgBorder);

  // paragraph about the restaurant
  const descContainer = document.createElement("div");
  descContainer.className = "desc-container";
  content.appendChild(descContainer);

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = "The Ultimate Burger Destination";
  descContainer.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent =
    "Welcome to Sizzle Joint, the ultimate burger destination. Our menu offers a wide range of mouthwatering burgers made with the finest ingredients. From classic cheeseburgers to gourmet creations, there's something for everyone. Pair your burger with crispy fries or indulge in hand-spun milkshakes. Each burger is made with the finest ingredients, ensuring a delicious and flavorful experience with every bite. Whether you prefer a traditional beef patty or something more adventurous like a chicken or veggie option, Sizzle Joint has something for everyone. Visit us today and experience the sizzling goodness of Sizzle Joint!";
  descContainer.appendChild(desc);
  desc.className = "desc";

  //create customer review
  const reviewBox = document.createElement("div");
  reviewBox.className = "review-box";
  content.appendChild(reviewBox);

  const reviewer = document.createElement("h4");
  reviewer.className = "reviewer";
  reviewer.textContent = "Burger King -";
  reviewBox.appendChild(reviewer);

  const review = document.createElement("p");
  review.className = "review";
  review.textContent =
    '"Impressed by Sizzle Joint! Delicious burgers, great service. Highly recommended for burger lovers."';
  reviewBox.appendChild(review);

  // footer
  const footer = document.createElement("footer");
  content.appendChild(footer);

  const imgLink = document.createElement("a");
  imgLink.href =
    "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  imgLink.textContent = "Image";
  footer.appendChild(imgLink);

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright @TheOdinProject2023";
  footer.appendChild(footerText);

  const iconLink = document.createElement("a");
  iconLink.href = "https://www.flaticon.com/free-icons/burger";
  iconLink.textContent = "Logo";
  footer.appendChild(iconLink);
};

export { loadHome };
