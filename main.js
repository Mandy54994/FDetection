function runDot() {
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
// var txt = '{"employees":[' +
//     '{"firstName":"John","lastName":"Doe" },' +
//     '{"firstName":"Anna","lastName":"Smith" },' +
//     '{"firstName":"Peter","lastName":"Jones" }]}';

// // $.parseJSON will parse the txt (JSON) and convert it to an
// // JavaScript object. After its call, it gets the employees property
// // and sets it to the employees variable
// var employees = $.parseJSON(txt).employees;

// var $table = $("<table></table>");

var indices = [1, 2];

$(document).ready(function () {
    $('.collapsible').collapsible();
    runDot();
    runDiv();
    var myDOt = setInterval("runDot()", 4500);
    var myDiv = setInterval("runDiv()", 4500);

    var mongodbdata = '{"mongoDbData":[' +
        '{"holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}]}';

    var txt = '{"employees":[' +
        '{"date":"08/10/03","desc":"Previous Balance", "withdrawl":"", "deposit":"", "balance":"0.55" },' +
        '{"date":"14/10/03","desc":"Payroll Deposit - HOTEL", "withdrawl":"", "deposit":"694.81", "balance":"695.36" },' +
        '{"date":"14/10/03","desc":"Web Bill Payment", "withdrawl":"200", "deposit":"", "balance":"495.36" },' +
        '{"date":"16/10/03","desc":"ATM Withdrawl", "withdrawl":"21.25", "deposit":"", "balance":"474.11" },' +
        '{"date":"16/10/03","desc":"Fees", "withdrawl":"1.50", "deposit":"", "balance":"472.61" }]}';

    // $.parseJSON will parse the txt (JSON) and convert it to an
    // JavaScript object. After its call, it gets the employees property
    // and sets it to the employees variable
    var employees = $.parseJSON(txt).employees;

    var $table = $("<table class='pdfTable tables' id ='table1'></table>");

    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        var $line = $("<tr></tr>");
        $line.append($("<td class='date'></td>").html(emp.date));
        $line.append($("<td class='description'></td>").html(emp.desc));
        $line.append($("<td class='withdrawl'></td>").html(emp.withdrawl));
        $line.append($("<td class='deposit'></td>").html(emp.deposit));
        $line.append($("<td class='balance'></td>").html(emp.balance));
        $table.append($line);
    }
    $table.appendTo($("#myDiv"));
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");

    var txt1 = '{"employees1":[' +
        '{"date":"08/10/03","desc":"Previous Balance", "withdrawl":"", "deposit":"", "balance":"0.55" },' +
        '{"date":"14/10/03","desc":"Payroll Deposit - HOTEL", "withdrawl":"", "deposit":"794.81", "balance":"795.36" },' +
        '{"date":"14/10/03","desc":"Web Bill Payment", "withdrawl":"300", "deposit":"", "balance":"495.36" },' +
        '{"date":"16/10/03","desc":"ATM Withdrawl", "withdrawl":"21.25", "deposit":"", "balance":"474.11" },' +
        '{"date":"16/10/03","desc":"Fees", "withdrawl":"1.50", "deposit":"", "balance":"472.61" }]}';

    // $.parseJSON will parse the txt (JSON) and convert it to an
    // JavaScript object. After its call, it gets the employees property
    // and sets it to the employees variable
    var employees1 = $.parseJSON(txt1).employees1;

    var $table1 = $("<table class='mongodbTable tables' id='table2'></table>");

    for (var i = 0; i < employees1.length; i++) {
        var emp1 = employees1[i];
        var $line1 = $("<tr></tr>");
        $line1.append($("<td class='date'></td>").html(emp1.date));
        $line1.append($("<td class='description'></td>").html(emp1.desc));
        $line1.append($("<td class='withdrawl'></td>").html(emp1.withdrawl));
        $line1.append($("<td class='deposit'></td>").html(emp1.deposit));
        $line1.append($("<td class='balance'></td>").html(emp1.balance));
        $table1.append($line1);
    }
    $table1.appendTo($("#myDiv1"));

    var table1 = document.getElementById('table1');
    var table2 = document.getElementById('table2');
    for (var i = 0; i < indices.length; i++) {
        table1.rows[indices[i]].style.background = "#E3242B";
        table1.rows[indices[i]].style.color = table2.rows[indices[i]].style.color = "#FFFFFF";
        table2.rows[indices[i]].style.background = "#508030";
    }

    var pdfdata = '{"pdfname":"Abc.pdf","holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

    var pdfObject = $.parseJSON(pdfdata);

    var $table3 = $("<table id='table3' style='top:50px;'></table>");
    var $line3 = $("<tr style='border: unset'></tr>");
    var $line4 = $("<tr style='border: unset'></tr>");
    var $line5 = $("<tr style='border: unset'></tr>");
    $line3.html(pdfObject.pdfname);
    $line4.html(pdfObject.holder);
    $line5.html(pdfObject.accountNo);
    $table3.append($line3);
    $table3.append($line4);
    $table3.append($line5);
    $table3.appendTo($("#dataPDF"));
    // var $pdf1 = $("<div></div>");
    // var pdfObject = $.parseJSON(pdfdata).pdfObject;

});