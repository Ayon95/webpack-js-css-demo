import { generateRandomID } from "./helpers";
import "./styles.css";
import webpackLogo from "./webpackLogo";

const randomID = document.querySelector(".random-id");
const buttonGenerateID = document.querySelector(".btn");

if (process.env.NODE_ENV !== "production") {
  console.log("in development mode");
}

// adding the webpackLogo component before randomID element
randomID.before(webpackLogo());

buttonGenerateID.addEventListener("click", function (e) {
  const id = generateRandomID();
  randomID.textContent = id;
});
