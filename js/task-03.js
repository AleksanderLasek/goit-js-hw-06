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

for (const image of images) {
  $gallery.insertAdjacentHTML(
    "beforeend",
    `<li><img src=${image.url} alt="${image.alt}" /></li>`
  );
}

const $galleryPhotos = document.querySelectorAll("img");
const galleryPhotosArray = Array.from($galleryPhotos);

for (const photo of galleryPhotosArray) {
  photo.classList.add("photo");
}

//stworzylem klase .photo w pliku istniejacym juz pliku
//common.css
//wczesniej uzywalem $gallery.style, ale chyba nie o to chodzilo
//teraz style sa zrobione za pomoca klas .gallery i .photo
