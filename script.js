// Global Variables

let imgContainer = document.querySelector('.imgContainer');    //Select HTML element with class imgContainer

  // Function to scroll images to the left
function scrollImagesLeft() {
    imgContainer.scrollLeft -= 50;   //Scroll the element to the left by 50 pixels
  }

  // Function to scroll images to the right
  function scrollImagesRight() {
    imgContainer.scrollLeft += 20; // Scroll the element to the right
  }

  document.getElementById('right').addEventListener('click', scrollImagesRight);
  document.getElementById('left').addEventListener('click', scrollImagesLeft);