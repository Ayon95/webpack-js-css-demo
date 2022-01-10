import logo from "./assets/images/webpack-logo.svg";

function webpackLogo() {
  const logoContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = logo;
  img.alt = "Webpack logo";
  logoContainer.appendChild(img);
  return logoContainer;
}

export default webpackLogo;
