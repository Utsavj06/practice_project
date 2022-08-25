let number = Math.trunc(Math.random() * 10 + 1);
console.log(number);
let n1;

let abc = 10;

document.querySelector("#start").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 10 + 1);
  console.log(number);
  document.querySelector("#input").value = "";
  document.querySelector("#a").innerText = "Start Guessing";
  abc = 10;
  document.querySelector("h2").innerText = "You have chance :" + abc;
  document.querySelector("#b1").innerText = "?";
});

document.querySelector("#bt1").addEventListener("click", function () {
  var a = Number(document.querySelector("#input").value);

  if (!a) {
    document.querySelector("#a").innerText = "Please Enter the Valid Number";
  } else if (a > number) {
    document.querySelector("#a").innerText = "Too high";
    abc -= 1;
    document.querySelector("h2").innerText = "You have chance :" + abc;
    if (abc > 0) {
    } else {
      window.alert("You Lost");
    }
    if (a > 10) {
      document.querySelector("#a").innerText =
        "Please Enter Number less than or Equal to 10";
    }
  } else if (a < number) {
    document.querySelector("#a").innerText = "Too low";
    if (a > 10) {
      document.querySelector("#a").innerText =
        "Please Enter Number less than or Equal to 10";
    }
    abc -= 1;
    document.querySelector("h2").innerText = "You have chance :" + abc;
    if (abc > 0) {
    } else {
      window.alert("You Lost. You have to Start Again");
    }
  } else if ((a = number)) {
    document.querySelector("#a").innerText =
      "Congratulation You have got Match";
    abc -= 1;
    document.querySelector("h2").innerText = "Score :" + abc;
    document.querySelector("#b1").innerText = number;
  }
});
