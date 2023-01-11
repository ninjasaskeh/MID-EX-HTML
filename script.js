function check() {
  let studentid = document.getElementById("studentid").value;
  let scores = document.getElementsById("scores").value;

  if (!isNaN(studentid) && !isNaN(scores)) {
    if (scores > 100) {
      alert("Input correct scores");
    }
  } else {
    alert("Input not is number");
  }
}
