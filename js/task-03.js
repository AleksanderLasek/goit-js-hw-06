const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const $gallery = document.querySelector("ul");
console.log($gallery);

for (const image of images) {
  $gallery.insertAdjacentHTML(
    "beforeend",
    `<li><img src=${image.url} alt="${image.alt}" width=700px /></li>`
  );
}

$gallery.style.listStyleType = "none";
$gallery.style.display = "flex";
$gallery.style.boxSizing = "border-box";
$gallery.style.flexDirection = "column";
$gallery.style.margin = "0";
$gallery.style.padding = "0";
$gallery.style.width = "100%";
$gallery.style.height = "1600px";
$gallery.style.justifyContent = "space-between";
$gallery.style.alignItems = "center";
