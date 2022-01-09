import { generateRandomID } from "./helpers";
import "./styles.css";

const randomID = document.querySelector(".random-id");
const buttonGenerateID = document.querySelector(".btn");

if (process.env.NODE_ENV !== "production") {
  console.log("in development mode");
}

buttonGenerateID.addEventListener("click", function (e) {
  const id = generateRandomID();
  randomID.textContent = id;
});
