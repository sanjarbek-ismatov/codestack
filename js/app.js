const menu = document.getElementById("menu");
const navigation = document.getElementById("ul");
const buttons = document.querySelectorAll("#a");
const logo = document.getElementById("logo");

const interval = setInterval(clock, 1000);

const data = document.querySelector("#copyright");
function clock() {
  const date = new Date();
  data.innerHTML = `${date.toDateString()} <br> ${date.toLocaleTimeString()} <br> Sanjarbek Ismatov ${date.getFullYear()} &copy`;
}

const show = () => {
  if (navigation.className === "nav-ul") {
    navigation.className += " responsive";
    logo.className += " logo-image-top";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "a";
    }
  } else {
    logo.className = "logo-image";
    navigation.className = "nav-ul";
    for (let d = 0; d < buttons.length; d++) {
      buttons[d].className = "";
    }
  }
};
const media = window.matchMedia("(min-width: 1000px)");
const mediaFunction = () => {
  if (media.matches) {
    navigation.className = "nav-ul not-responsive";
    logo.className = "logo-image";
  } else {
    navigation.className = "nav-ul";
  }
};
media.addListener(mediaFunction);
menu.addEventListener("click", show);
