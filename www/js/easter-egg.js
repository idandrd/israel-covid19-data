(() => {
  const imageUrl = "img/ducks.jpg";
  let easterEggCounter = 0;
  const header = document.getElementsByClassName("masthead")[0];
  header.onclick = onEasterClick;

  function onEasterClick() {
    if (++easterEggCounter == 3) {
      easterEgg();
    }
    preLoadImage();
  }

  function preLoadImage() {
    if (easterEggCounter == 1) {
      const img = new Image();
      img.src = imageUrl;
    }
  }

  function easterEgg() {
    header.style.backgroundImage = `url('${imageUrl}')`;
  }
})();
