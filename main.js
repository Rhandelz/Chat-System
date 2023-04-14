import "./scss/style.scss";
import { messaged, appending } from "./addAppend";

let msgs = document.getElementById("sms");
let btn = document.querySelector("button");

let btnStart = document.getElementById("started");
let mainChat = document.querySelector(".main_app");

let sep = document.querySelector("#logo");

let ulistChats = document.getElementById("chats");

btn.addEventListener("click", () => {
  let sms = msgs.value;

  if (sms) {
    messaged(sms);
    msgs.value = "";
  }
});

appending();

btnStart.addEventListener("click", () => {
  if (mainChat.className.includes("gone")) {
    mainChat.classList.remove("gone");
    sep.style.transform = "translateX(-100px)";
    btnStart.textContent = "get started";
  } else {
    mainChat.classList.add("gone");
    sep.style.transform = "translateX(0px)";

    btnStart.textContent = "close";
  }
});
