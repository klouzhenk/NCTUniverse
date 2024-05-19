const btnToTop = document.querySelector('.button-to-top');

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnToTop.classList.add('show');
  } else {
    btnToTop.classList.remove('show');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

btnToTop.addEventListener('click', topFunction);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};