const profieImage = document.querySelector("#profieImage");
const firstnameSpan = document.querySelector("#firstname")
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isSure = confirm("are u sure?");

if(isSure === true){
    console.log("Welcome to Kosta!");
}
else {
    profieImage.src = "images/promes.jpg";
    firstnameSpan.innerHTML = "Quincy Promes";
    ageSpan.innerHTML = "32";
    statusSpan.innerHTML = "Footballer";
}

btnUpdateProfile.addEventListener("click", () => {
    profieImage.src = "images/r9.jpg";
    firstnameSpan.innerHTML = "Ronaldo Nazario";
    ageSpan.innerHTML = "48";
    statusSpan.innerHTML = "Retired Footballer";
});