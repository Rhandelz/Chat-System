import "./scss/style.scss";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://message-133e3-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const mssgDTB = ref(database, "message");

export function messaged(val) {
  push(mssgDTB, val);
}

//APPENDING
let ulistChats = document.getElementById("chats");

export function appending() {
  onValue(mssgDTB, function (snapshot) {
    let itemsArray = Object.values(snapshot.val());

    let placeholder = "";

    for (let i = 0; i < itemsArray.length; i++) {
      //append(itemsArray[i]);
      placeholder += `
      <li class="listC">${itemsArray[i]}</li>
      `;
    }

    append(placeholder);
  });

  function clearShoppingListEl() {
    ulistChats.innerHTML = "";
  }

  function append(values) {
    ulistChats.innerHTML = values;
    /*  let li = document.createElement("li");
    li.textContent = values;
    li.classList.add("listC");
    ulistChats.appendChild(li); */
  }

  let list = document.querySelectorAll(".listC");

  /*  for (let i = 0; i < list.length; i++) {
    if (i % 2 == 0) {
      list[i].classList.add("left");
      console.log(list[i]);
    } else {
      list[i].classList.add("right");
      console.log(list[i]);
    }
  } */
}
