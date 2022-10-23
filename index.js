let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let imageGallery = document.getElementsByClassName("images-gallery")[0];
let images = imageGallery.getElementsByTagName("img");

let galleryDivs = document.querySelectorAll(".gallery .image");

let index = 0;

rightArrow.addEventListener("click", () => {
    index++;
    imageGallery.style.transform = `translateX(${-index * imageGallery.clientWidth}px)`;
    galleryDivs.forEach((div) => div.classList.remove("target-image"));
    if (index > images.length - 1) {
        index = 0;
        imageGallery.style.transform = `translateX(0px)`
        galleryDivs[index].classList.add("target-image");
    } else {
        galleryDivs[index].classList.add("target-image");
    }
})


leftArrow.addEventListener("click", () => {
    index--;
    imageGallery.style.transform = `translateX(${-index * imageGallery.clientWidth}px)`;
    galleryDivs.forEach((div) => div.classList.remove("target-image"));
    if (index < 0) {
        index = images.length - 1;
        imageGallery.style.transform = `translateX(${-index * imageGallery.clientWidth}px)`;
        galleryDivs[index].classList.add("target-image");
    } else {
        galleryDivs[index].classList.add("target-image");
    }

})


