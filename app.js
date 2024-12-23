/* Created by Tivotal */

let menuBtn = document.querySelector(".menu-btn");
let header = document.querySelector(".header");
let btns = document.querySelectorAll(".nav-item");
let videos = document.querySelectorAll("video");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });

    videos.forEach((video) => {
      video.classList.remove("active");
    });

    videos[i].classList.add("active");
    btn.classList.add("active");
  });
});



// contact
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// projects gallery


function filterGallery(category) {
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
      const isVisible = category === 'all' || photo.classList.contains(category);
      photo.style.display = isVisible ? '' : 'none';
  });
}

document.querySelectorAll('.photo img').forEach(img => {
  img.addEventListener('click', function() {
      const modal = document.getElementById('myModal');
      const modalImg = document.getElementById('img01');
      const captionText = document.getElementById('caption');
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.nextElementSibling.innerHTML;
  });
});

const closeButton = document.querySelector('.close');
closeButton.onclick = function() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      const modal = document.getElementById('myModal');
      if (modal.style.display === 'block') {
          modal.style.display = 'none';
      }
  }
});