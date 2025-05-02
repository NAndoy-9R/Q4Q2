function calculateAverage() {
  const science = parseFloat(document.getElementById("science").value);
  const math = parseFloat(document.getElementById("math").value);
  const english = parseFloat(document.getElementById("english").value);

  if (isNaN(science) || isNaN(math) || isNaN(english)) {
    alert("Please enter all three grades.");
    return;
  }

  const avg = (science + math + english) / 3;
  let rating = "";

  if (avg >= 94) {
    rating = "Excellent";
  } else if (avg >= 87) {
    rating = "Above Satisfactory";
  } else if (avg >= 80) {
    rating = "Satisfactory";
  } else if (avg >= 75) {
    rating = "Needs Improvement";
  } else {
    rating = "Poor";
  }

  alert(`Your average is ${avg.toFixed(2)} - ${rating}`);
}

