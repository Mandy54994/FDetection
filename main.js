function runDot() {
    console.log('running');
    setTimeout(function () {
        $('div span:nth-child(1)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 1000);
    setTimeout(function () {
        $('div span:nth-child(2)').css("background-color", "#6c63ff");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 2000);
    setTimeout(function () {
        $('div span:nth-child(3)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
    }, 3000);
}

function runDiv() {
    setTimeout(function () {
        $('.rectangle10').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 1000);
    setTimeout(function () {
        $('.rectangle11').css("background-color", "#6c63ff");
        $('.rectangle10').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 2000);
    setTimeout(function () {
        $('.rectangle12').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle10').css("background-color", "#e5e5e5");
    }, 3000);
}
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     //var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     //   for (i = 0; i < slides.length; i++) {
//     //     slides[i].style.display = "none";  
//     //   }
//     //   slideIndex++;
//     //   if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     //   slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// document.addEventListener("DOMContentLoaded", () => {
//     var rect10 = document.querySelector('#rect1');
//     var rect11 = document.querySelector('.rectangle11');
//     var rect12 = document.querySelector('.rectangle12');
// });
$(document).ready(function () {
    console.log("Ready!");
    runDot();
    runDiv();
    var myDOt = setInterval("runDot()", 3000);
    var myDiv = setInterval("runDiv()", 3000);
    $('.vom').click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('div span:nth-child(1)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 1000);
        setTimeout(function () {
            $('div span:nth-child(2)').css("background-color", "#6c63ff");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 2000);
        setTimeout(function () {
            $('div span:nth-child(3)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        }, 3000);

    });
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");
});