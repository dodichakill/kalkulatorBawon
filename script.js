function more() {
  const bg = document.querySelector(".bg");

  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  bg.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}

function c() {
  document.form.textview.value = "  ";
}

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}
function bawon(hasil) {
  document.form.textview.value = Math.round(
    document.form.textview.value / hasil
  );
}