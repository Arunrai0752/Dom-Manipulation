function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value.trim());
  const height = parseFloat(document.getElementById("height").value.trim());
  const result = document.getElementById("result");

  result.innerHTML = "";

  if (height === "" || weight === "" || isNaN(weight) || isNaN(height)) {
    alert("Fill a valid details");
    return;
  }

  
 const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  
  if (bmi <= 18.6) {
    result.innerHTML = "<h1>You are Under Weight<h1/>";
  } else if (bmi > 18.6 && bmi <= 24.9) {
    result.innerHTML = "<h1>You are in  normal Weight</h1>";
  } else {
    result.innerHTML = "<h1>You are over Weight</h1>";
  }
}
