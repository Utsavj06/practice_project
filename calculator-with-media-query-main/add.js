var c = document.getElementById("b1").innerText;
var d = document.getElementById("b2").innerText;
var e = document.getElementById("b3").innerText;
var f = document.getElementById("b+").innerText;
var g = document.getElementById("b4").innerText;
var h = document.getElementById("b5").innerText;
var i = document.getElementById("b6").innerText;
var j = document.getElementById("b-").innerText;
var k = document.getElementById("b7").innerText;
var l = document.getElementById("b8").innerText;
var m = document.getElementById("b9").innerText;
var n = document.getElementById("b*").innerText;
var o = document.getElementById("b=").innerText;
var p = document.getElementById("b0").innerText;
var q = document.getElementById("b/").innerText;

function getValue1() {
  space.value += document.getElementById("space").value = c;
}

function getValue2() {
  space.value += document.getElementById("space").value = d;
}

function getValue3() {
  space.value += document.getElementById("space").value = e;
}

function getValuep() {
  space.value += document.getElementById("space").value = f;
}

function getValue4() {
  space.value += document.getElementById("space").value = g;
}

function getValue5() {
  space.value += document.getElementById("space").value = h;
}

function getValue6() {
  space.value += document.getElementById("space").value = i;
}

function getValuem() {
  space.value += document.getElementById("space").value = j;
}

function getValue7() {
  space.value += document.getElementById("space").value = k;
}

function getValue8() {
  space.value += document.getElementById("space").value = l;
}

function getValue9() {
  space.value += document.getElementById("space").value = m;
}

function getValuemu() {
  space.value += document.getElementById("space").value = n;
}

function getValuezero() {
  space.value += document.getElementById("space").value = p;
}

function getValued() {
  space.value += document.getElementById("space").value = q;
}

function getValuee() {
  var ab = document.getElementById("space").value;
  var result = eval(ab);

  document.getElementById("space").value = result;

  if (ab == "") {
    document.getElementById("space").value = "Enter Value";
  }
}

function iclick() {
  document.getElementById("space").value = "";
}
