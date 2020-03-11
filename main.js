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
var txt = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

// $.parseJSON will parse the txt (JSON) and convert it to an
// JavaScript object. After its call, it gets the employees property
// and sets it to the employees variable
var employees = $.parseJSON(txt).employees;

var $table = $("<table></table>");

var indices = [1, 3];

for (var i = 0; i < employees.length; i++) {
    var emp = employees[i];
    var $line = $("<tr class='pdfTable'></tr>");
    $line.append($("<td class='pdfTable'></td>").html(emp.firstName));
    $line.append($("<td class='pdfTable'></td>").html(emp.lastName));
    $table.append($line);
}
$table.appendTo($("#myDiv"));

$(document).ready(function () {
    $('.collapsible').collapsible();
    console.log("Ready!");
    runDot();
    runDiv();
    var myDOt = setInterval("runDot()", 4500);
    var myDiv = setInterval("runDiv()", 4500);

    var txt = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe", "age":"10", "age1":"10", "age2":"10" },' +
        '{"firstName":"Anna","lastName":"Smith", "age":"10", "age1":"10", "age2":"10" },' +
        '{"firstName":"Mike","lastName":"Blake", "age":"10", "age1":"10", "age2":"10" },' +
        '{"firstName":"Peter","lastName":"Jones", "age":"10", "age1":"10", "age2":"10" }]}';

    // $.parseJSON will parse the txt (JSON) and convert it to an
    // JavaScript object. After its call, it gets the employees property
    // and sets it to the employees variable
    var employees = $.parseJSON(txt).employees;

    var $table = $("<table class='pdfTable' style='margin-top:50px;' id ='table1'></table>");

    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        var $line = $("<tr></tr>");
        $line.append($("<td class='date'></td>").html(emp.firstName));
        $line.append($("<td class='description'></td>").html(emp.lastName));
        $line.append($("<td class='withdrawl'></td>").html(emp.age));
        $line.append($("<td class='deposit'></td>").html(emp.age1));
        $line.append($("<td class='balance'></td>").html(emp.age2));
        $table.append($line);
    }
    $table.appendTo($("#myDiv"));
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");

    var txt1 = '{"employees1":[' +
        '{"firstName":"John","lastName":"Doe", "age":"10", "age1":"10", "age2":"10" },' +
        '{"firstName":"Anna","lastName":"Smith", "age":"10", "age1":"15", "age2":"15" },' +
        '{"firstName":"Mike","lastName":"Blake", "age":"10", "age1":"10", "age2":"10" },' +
        '{"firstName":"Peter","lastName":"Jones", "age":"10", "age1":"10", "age2":"15" }]}';

    // $.parseJSON will parse the txt (JSON) and convert it to an
    // JavaScript object. After its call, it gets the employees property
    // and sets it to the employees variable
    var employees1 = $.parseJSON(txt1).employees1;

    var $table1 = $("<table class='mongodbTable' style='margin-top:50px;' id='table2'></table>");

    for (var i = 0; i < employees1.length; i++) {
        var emp1 = employees1[i];
        var $line1 = $("<tr></tr>");
        $line1.append($("<td class='date'></td>").html(emp1.firstName));
        $line1.append($("<td class='description'></td>").html(emp1.lastName));
        $line1.append($("<td class='withdrawl'></td>").html(emp1.age));
        $line1.append($("<td class='deposit'></td>").html(emp1.age1));
        $line1.append($("<td class='balance'></td>").html(emp1.age2));
        $table1.append($line1);
    }
    $table1.appendTo($("#myDiv1"));

    var table1 = document.getElementById('table1');
    var table2 = document.getElementById('table2');
    for (var i = 0; i < indices.length; i++) {
        table1.rows[indices[i]].style.background = "#E3242B";
        table2.rows[indices[i]].style.background = "#508030";
    }
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");
});