var images = document.querySelectorAll(".slideshow figure");
for(i=0; i < images.length; i++) {
  images[i].addEventListener('click',
  function(){
    this.classList.toggle("expanded");
    quad.classList.toggle("full")
  });
}
