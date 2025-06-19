const name = document.getElementById("name");
const age = document.getElementById("age");
const country = document.getElementById("country");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zipcode");
const phone = document.getElementById("phone");
const phone1 = document.getElementsByClassName("phone");

name.innerText = "DevXArun";
name.style.backgroundColor = "green";
name.style.color = "black";
age.innerText = "23";
age.style.backgroundColor = "red";
age.style.color = "white";
country.innerText = "India";
country.style.backgroundColor = "blue";
country.style.color = "white";
city.innerText = "Bhopal";
city.style.backgroundColor = "yellow";
city.style.color = "black";
state.innerText = "Madhya Pradesh";
state.style.backgroundColor = "purple";
state.style.color = "white";
zip.innerText = "462023";
zip.style.backgroundColor = "orange";
zip.style.color = "black";
phone.innerText = "9098209835";
phone.style.backgroundColor = "pink";
phone.style.color = "black";



phone1[0].setAttribute("id", "phone1");
const phonenum = document.getElementById("phone1");
phonenum.innerText = "8085814807";


