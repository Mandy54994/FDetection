function runDot() {
    console.log('running');
    setTimeout(function () {
        $('div span:nth-child(1)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 1500);
    setTimeout(function () {
        $('div span:nth-child(2)').css("background-color", "#6c63ff");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 3000);
    setTimeout(function () {
        $('div span:nth-child(3)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
    }, 4500);
}

function runDiv() {
    setTimeout(function () {
        $('.rectangle10').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 1500);
    setTimeout(function () {
        $('.rectangle11').css("background-color", "#6c63ff");
        $('.rectangle10').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 3000);
    setTimeout(function () {
        $('.rectangle12').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle10').css("background-color", "#e5e5e5");
    }, 4500);
}
$(document).ready(function () {
    $('.collapsible').collapsible();
    console.log("Ready!");
    runDot();
    runDiv();
    var myDOt = setInterval("runDot()", 4500);
    var myDiv = setInterval("runDiv()", 4500);
    $('.vom').click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('div span:nth-child(1)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 1500);
        setTimeout(function () {
            $('div span:nth-child(2)').css("background-color", "#6c63ff");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 3000);
        setTimeout(function () {
            $('div span:nth-child(3)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        }, 4500);

    });
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");
});