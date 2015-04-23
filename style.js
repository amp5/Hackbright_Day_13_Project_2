
var myImage = document.getElementById("coffee_image");
var myRevenueMessage = document.getElementById("revenue");

myImage.setAttribute('src', "static/coffee_beans.jpg");

myImage.addEventListener('click', function () {
    return makeCoffee("brew");
});

function makeCoffee() {
     myImage.src = "static/coffee_machine.jpg";
     setTimeout(function() { myImage.setAttribute('src', "static/coffee_mug.jpg"); }, 500);
     setTimeout(function() { myImage.setAttribute('src', "static/coffee_beans.jpg"); }, 1500);
}
