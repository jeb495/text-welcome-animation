// Wrap every letter in a span
var textWrapper = document.querySelector('.opentext ');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.opentext .letter',
    translateY: [-1500,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.opentext',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 20000000
  });
 
 