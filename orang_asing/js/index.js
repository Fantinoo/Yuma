const title = document.querySelector(".title");
const text = `I’m proud of you, Yuma You’ve made it this  far.`.split("");

// Create container for better responsive layout
title.style.display = "flex";
title.style.flexWrap = "wrap";
title.style.justifyContent = "center";
title.style.gap = "0.0rem";

for (let index = 0; index < text.length; index++) {
  if (text[index] !== " ") {
    title.innerHTML += `<span>${text[index]}</span>`;
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`;
  }
}

const textElements = document.querySelectorAll(".title span");
textElements.forEach((element) => {
  const randomDelay = Math.random() * 2;
  element.style.animationDelay = `${randomDelay}s`;
});
