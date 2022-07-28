let input = document.getElementById("password");
let tpasswd = document.getElementById("show-passwd");
let toggleImg = document.querySelector("#show-passwd img");

tpasswd.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
  tpasswd.classList.toggle("hide-passwd");
  if (tpasswd.classList.contains("hide-passwd")) {
    toggleImg.src =
      "https://raw.githubusercontent.com/TylerPottsDev/yt-js-reveal-password/b677bab226bf2b0112c4422d0b86920159db787a/eye_closed.svg";
  } else {
    toggleImg.src =
      "https://raw.githubusercontent.com/TylerPottsDev/yt-js-reveal-password/b677bab226bf2b0112c4422d0b86920159db787a/eye_open.svg";
  }
});
