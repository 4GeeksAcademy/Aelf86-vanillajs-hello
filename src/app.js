/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = [];
  excuse.push(who[Math.floor(Math.random() * who.length)]);
  excuse.push(action[Math.floor(Math.random() * action.length)]);
  excuse.push(what[Math.floor(Math.random() * what.length)]);
  excuse.push(when[Math.floor(Math.random() * when.length)]);
  //console.log(excuse);
  let text = excuse.join(" ");
  document.getElementById("excuse").innerHTML = text;
  //console.log("Hello Rigo from the console!");
};
