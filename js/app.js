const menu = document.getElementById("menu");
const navigation = document.getElementById("ul");
const buttons = document.querySelectorAll("#a");
const logo = document.getElementById("logo");
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
menu.addEventListener("click", show);
