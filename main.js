var size, name;

function runDot() {
  setTimeout(function () {
    $("div span:nth-child(1)").css("background-color", "#6c63ff");
    $("div span:nth-child(2)").css("background-color", "#e5e5e5");
    $("div span:nth-child(3)").css("background-color", "#e5e5e5");
  }, 1500);
  setTimeout(function () {
    $("div span:nth-child(2)").css("background-color", "#6c63ff");
    $("div span:nth-child(1)").css("background-color", "#e5e5e5");
    $("div span:nth-child(3)").css("background-color", "#e5e5e5");
  }, 3000);
  setTimeout(function () {
    $("div span:nth-child(3)").css("background-color", "#6c63ff");
    $("div span:nth-child(2)").css("background-color", "#e5e5e5");
    $("div span:nth-child(1)").css("background-color", "#e5e5e5");
  }, 4500);
}

function runDiv() {
  setTimeout(function () {
    $(".rectangle10").css("background-color", "#6c63ff");
    $(".rectangle11").css("background-color", "#e5e5e5");
    $(".rectangle12").css("background-color", "#e5e5e5");
  }, 1500);
  setTimeout(function () {
    $(".rectangle11").css("background-color", "#6c63ff");
    $(".rectangle10").css("background-color", "#e5e5e5");
    $(".rectangle12").css("background-color", "#e5e5e5");
  }, 3000);
  setTimeout(function () {
    $(".rectangle12").css("background-color", "#6c63ff");
    $(".rectangle11").css("background-color", "#e5e5e5");
    $(".rectangle10").css("background-color", "#e5e5e5");
  }, 4500);
}

function myFunction() {
  var x = document.getElementById("myFile");
  size = (x.files[0].size / 1024).toFixed(2);
  name = x.files[0].name;
  var demoP = document.getElementById("demo");
  demoP.innerHTML = name + "<br>(" + size + " KB)";
  document.getElementById('comp').disabled = false;
  document.getElementById('fromDate').disabled = false;
  document.getElementById('toDate').disabled = false;

}

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

function readfiles(files) {
  for (var i = 0; i < files.length; i++) {
    name = files[i].name;
    size = files[i].size;
    reader = new FileReader();
    reader.onload = function (event) {};
    reader.readAsDataURL(files[i]);
  }
}

function checkForm(form) {
  if (!form.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    form.terms.focus();
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
  var holder = document.getElementById("holder");
  holder.ondragover = function () {
    this.className = "hover";
    return false;
  };
  holder.ondragend = function () {
    this.className = "";
    return false;
  };
  holder.ondrop = function (e) {
    this.style.display = "none";
    var done = document.getElementById('pdfUploaded');
    done.style.display = "unset";
    e.preventDefault();
    readfiles(e.dataTransfer.files);
    var demoP = document.getElementById("demo");
    demoP.innerHTML = name + "<br>(" + size + " KB)";
    document.getElementById('comp').disabled = false;
    document.getElementById('fromDate').disabled = false;
    document.getElementById('toDate').disabled = false;
  };
  var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");
});
var indices = [1, 2];

$(document).ready(function () {
  $(".collapsible").collapsible();
  runDot();
  runDiv();
  var myDOt = setInterval("runDot()", 4500);
  var myDiv = setInterval("runDiv()", 4500);

  var mongodbdata =
    '{"mongoDbData":[' + '{"holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}]}';

  var txt =
    '{"employees":[' +
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

  var txt1 =
    '{"employees1":[' +
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

  var table1 = document.getElementById("table1");
  var table2 = document.getElementById("table2");
  for (var i = 0; i < indices.length; i++) {
    table1.rows[indices[i]].style.background = "#E3242B";
    table1.rows[indices[i]].style.color = table2.rows[indices[i]].style.color =
      "#FFFFFF";
    table2.rows[indices[i]].style.background = "#508030";
  }

  var pdfdata =
    '{"pdfname":"Abc.pdf","holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

  var pdfObject = $.parseJSON(pdfdata);

  var $table3 = $("<table id='table3' style='top:50px;'></table>");
  var $line3 = $("<tr style='border: unset'></tr>");
  var $line4 = $("<tr style='border: unset'></tr>");
  var $line5 = $("<tr style='border: unset'></tr>");
  $line3.html(pdfObject.pdfname);
  $line4.html("Account Holder Name: " + pdfObject.holder);
  $line5.html("Account No.: " + pdfObject.accountNo);
  $table3.append($line3);
  $table3.append($line4);
  $table3.append($line5);
  $table3.appendTo($("#dataPDF"));

  var pdfdata1 = '{"holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

  var pdfObject1 = $.parseJSON(pdfdata1);

  var $table4 = $("<table id='table3' style='top:50px;'></table>");
  var $line7 = $("<tr style='border: unset'></tr>");
  var $line8 = $("<tr style='border: unset'></tr>");
  $line7.html("Account Holder Name: " + pdfObject1.holder);
  $line8.html("Account No.: " + pdfObject1.accountNo);
  $table4.append($line7);
  $table4.append($line8);
  $table4.appendTo($("#dataPDF1"));
  // var $pdf1 = $("<div></div>");
  // var pdfObject = $.parseJSON(pdfdata).pdfObject;
});