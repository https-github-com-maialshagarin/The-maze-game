var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// var egg = new Egg();

// var instructions = "up,up,down,down";
// var easterEggName = "Random Name";

// var action = function () {
//     console.log("Triggered");
// };

// egg.addCode(instructions, action , easterEggName)
//    .addHook(function () {
//         console.log("Hook called for: " + this.activeEgg.keys);
//         // Name of the easter egg
//         console.log(this.activeEgg.metadata);
//    }).listen();
// cheet('i d d q d', function () {
//   alert('god mode enabled');
// });
// cheet('f1', function () {
//   console.log('Cheats activated');

//   // This will only work if the f1 key is pressed first
//   cheet('d t w', function () {
//       alert('Destroying world');
//   });
// });
cheet('o n c e', function () {
  console.log('This will only fire once.');
  cheet.disable('o n c e');
});