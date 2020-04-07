var size, name;

function runDot() {
  setTimeout(function () {
    $("#dot1").css("background-color", "#6c63ff");
    $("#dot2").css("background-color", "#e5e5e5");
    $("#dot3").css("background-color", "#e5e5e5");
  }, 1500);
  setTimeout(function () {
    $("#dot2").css("background-color", "#6c63ff");
    $("#dot1").css("background-color", "#e5e5e5");
    $("#dot3").css("background-color", "#e5e5e5");
  }, 3000);
  setTimeout(function () {
    $("#dot3").css("background-color", "#6c63ff");
    $("#dot2").css("background-color", "#e5e5e5");
    $("#dot1").css("background-color", "#e5e5e5");
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
  var filed = document.getElementsByName("upload");
  document.getElementById("holder").style.display = "none";
  document.getElementById("pdfUploaded").style.display = "block";
  var x = document.getElementById("myFile");
  size = x.files[0].size;
  name = x.files[0].name;
  var demoP = document.getElementById("demo");
  console.log(filed);
  if (size <= 1024) demoP.innerHTML = name + "<br>(" + size + " B)";
  else if (size <= 1048576) {
    size = (size / 1024).toFixed(2);
    demoP.innerHTML = name + "<br>(" + size + " KB)";
  } else {
    size = (size / 1048576).toFixed(2);
    demoP.innerHTML = name + "<br>(" + size + " MB)";
  }
  document.getElementById("comp").disabled = false;
  document.getElementById("fromDate").disabled = false;
  document.getElementById("toDate").disabled = false;
}

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
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
    var done = document.getElementById("pdfUploaded");
    done.style.display = "unset";
    e.preventDefault();
    readfiles(e.dataTransfer.files);
    //e.originalEvent.dataTransfer.files;
    var filew = document.getElementsByName("upload");
    filew[0].files = e.dataTransfer.files;
    console.log(filew);
    var demoP = document.getElementById("demo");
    if (size <= 1024) demoP.innerHTML = name + "<br>(" + size + " B)";
    else if (size <= 1048576) {
      size = (size / 1024).toFixed(2);
      demoP.innerHTML = name + "<br>(" + size + " KB)";
    } else {
      size = (size / 1048576).toFixed(2);
      demoP.innerHTML = name + "<br>(" + size + " MB)";
    }
    document.getElementById("filenameHolder").value = name;
    document.getElementById("comp").disabled = false;
    document.getElementById("fromDate").disabled = false;
    document.getElementById("toDate").disabled = false;
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

  // var mongodbdata =
  //   '{"mongoDbData":[' + '{"holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}]}';

  // var txt =
  //   '{"employees":[' +
  //   '{"date":"08/10/03","desc":"Previous Balance", "withdrawl":"", "deposit":"", "balance":"0.55" },' +
  //   '{"date":"14/10/03","desc":"Payroll Deposit - HOTEL", "withdrawl":"", "deposit":"694.81", "balance":"695.36" },' +
  //   '{"date":"14/10/03","desc":"Web Bill Payment", "withdrawl":"200", "deposit":"", "balance":"495.36" },' +
  //   '{"date":"16/10/03","desc":"ATM Withdrawl", "withdrawl":"21.25", "deposit":"", "balance":"474.11" },' +
  //   '{"date":"16/10/03","desc":"Fees", "withdrawl":"1.50", "deposit":"", "balance":"472.61" }]}';

  // // $.parseJSON will parse the txt (JSON) and convert it to an
  // // JavaScript object. After its call, it gets the employees property
  // // and sets it to the employees variable
  // var employees = $.parseJSON(txt).employees;

  // var $table = $("<table class='pdfTable tables' id ='table1'></table>");

  // for (var i = 0; i < employees.length; i++) {
  //   var emp = employees[i];
  //   var $line = $("<tr></tr>");
  //   $line.append($("<td class='date'></td>").html(emp.date));
  //   $line.append($("<td class='description'></td>").html(emp.desc));
  //   $line.append($("<td class='withdrawl'></td>").html(emp.withdrawl));
  //   $line.append($("<td class='deposit'></td>").html(emp.deposit));
  //   $line.append($("<td class='balance'></td>").html(emp.balance));
  //   $table.append($line);
  // }
  // $table.appendTo($("#myDiv"));
  // // $('div span:nth-child(2)').css("background-color", "#6c63ff");

  // var txt1 =
  //   '{"employees1":[' +
  //   '{"date":"08/10/03","desc":"Previous Balance", "withdrawl":"", "deposit":"", "balance":"0.55" },' +
  //   '{"date":"14/10/03","desc":"Payroll Deposit - HOTEL", "withdrawl":"", "deposit":"794.81", "balance":"795.36" },' +
  //   '{"date":"14/10/03","desc":"Web Bill Payment", "withdrawl":"300", "deposit":"", "balance":"495.36" },' +
  //   '{"date":"16/10/03","desc":"ATM Withdrawl", "withdrawl":"21.25", "deposit":"", "balance":"474.11" },' +
  //   '{"date":"16/10/03","desc":"Fees", "withdrawl":"1.50", "deposit":"", "balance":"472.61" }]}';

  // // $.parseJSON will parse the txt (JSON) and convert it to an
  // // JavaScript object. After its call, it gets the employees property
  // // and sets it to the employees variable
  // var employees1 = $.parseJSON(txt1).employees1;
  // //console.log(employees1);

  // var $table1 = $("<table class='mongodbTable tables' id='table2'></table>");

  // for (var i = 0; i < employees1.length; i++) {
  //   var emp1 = employees1[i];
  //   var $line1 = $("<tr></tr>");
  //   $line1.append($("<td class='date'></td>").html(emp1.date));
  //   $line1.append($("<td class='description'></td>").html(emp1.desc));
  //   $line1.append($("<td class='withdrawl'></td>").html(emp1.withdrawl));
  //   $line1.append($("<td class='deposit'></td>").html(emp1.deposit));
  //   $line1.append($("<td class='balance'></td>").html(emp1.balance));
  //   $table1.append($line1);
  // }
  // $table1.appendTo($("#myDiv1"));

  // var table1 = document.getElementById("table1");
  // var table2 = document.getElementById("table2");
  // for (var i = 0; i < indices.length; i++) {
  //   table1.rows[indices[i]].style.background = "#E3242B";
  //   table1.rows[indices[i]].style.color = table2.rows[indices[i]].style.color =
  //     "#FFFFFF";
  //   table2.rows[indices[i]].style.background = "#508030";
  // }

  // var pdfdata =
  //   '{"pdfname":"Abc.pdf","holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

  // var pdfObject = $.parseJSON(pdfdata);

  // var $table3 = $("<table id='table3' style='top:50px;'></table>");
  // var $line3 = $("<tr style='border: unset'></tr>");
  // var $line4 = $("<tr style='border: unset'></tr>");
  // var $line5 = $("<tr style='border: unset'></tr>");
  // $line3.html(name);
  // $line4.html("Account Holder Name: " + pdfObject.holder);
  // $line5.html("Account No.: " + pdfObject.accountNo);
  // $table3.append($line3);
  // $table3.append($line4);
  // $table3.append($line5);
  // $table3.appendTo($("#dataPDF"));

  // var pdfdata1 = '{"holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

  // var pdfObject1 = $.parseJSON(pdfdata1);

  // var $table4 = $("<table id='table3' style='top:50px;'></table>");
  // var $line7 = $("<tr style='border: unset'></tr>");
  // var $line8 = $("<tr style='border: unset'></tr>");
  // $line7.html("Account Holder Name: " + pdfObject1.holder);
  // $line8.html("Account No.: " + pdfObject1.accountNo);
  // $table4.append($line7);
  // $table4.append($line8);
  // $table4.appendTo($("#dataPDF1"));
  // var $pdf1 = $("<div></div>");
  // var pdfObject = $.parseJSON(pdfdata).pdfObject;

  // var height =
  //   parseInt($("#table2").css("height")) +
  //   parseInt($("#table2").css("top")) +
  //   102;
  // $("#footy").css("top", height);
});

function renderData() {
  $.get(
    "myfile.txt",
    function (data) {
      const word = data.split("\n");
      var mongoDBrec = JSON.parse(word[0]);
      var pdfrec = JSON.parse(word[1]);

      var $table = $("<table class='pdfTable tables' id ='table1'></table>");

      for (var i = 0; i < pdfrec.data.length; i++) {
        var emp = pdfrec.data[i];
        var $line = $("<tr></tr>");
        $line.append($("<td class='date'></td>").html(findDate(emp.strDate)));
        $line.append(
          $("<td class='description'></td>").html(
            emp.strDescription.split("_").join(" ")
          )
        );
        $line.append($("<td class='withdrawl'></td>").html(emp.strWithdraw));
        $line.append($("<td class='deposit'></td>").html(emp.strDeposit));
        $line.append($("<td class='balance'></td>").html(emp.strBalance));
        $table.append($line);
      }
      $table.appendTo($("#myDiv"));

      var $table1 = $(
        "<table class='mongodbTable tables' id='table2'></table>"
      );

      for (var i = 0; i < mongoDBrec.data.length; i++) {
        var emp1 = mongoDBrec.data[i];
        var $line1 = $("<tr></tr>");
        $line1.append($("<td class='date'></td>").html(findDate(parseInt(emp1.strDate.$numberLong))));
        $line1.append(
          $("<td class='description'></td>").html(
            emp1.strDescription.split("_").join(" ")
          )
        );
        $line1.append($("<td class='withdrawl'></td>").html(emp1.strWithdraw));
        $line1.append($("<td class='deposit'></td>").html(emp1.strDeposit));
        $line1.append($("<td class='balance'></td>").html(emp1.strBalance));
        $table1.append($line1);
      }
      $table1.appendTo($("#myDiv1"));

      var table1 = document.getElementById("table1");
      var table2 = document.getElementById("table2");
      for (var i = 2; i < word.length; i++) {
        table1.rows[parseInt(word[i])].style.background = "#E3242B";
        table1.rows[parseInt(word[i])].style.color = table2.rows[parseInt(word[i])].style.color =
          "#FFFFFF";
        table2.rows[parseInt(word[i])].style.background = "#508030";
      }

      var pdfdata =
        '{"pdfname":"Abc.pdf","holder":"LOREM IPSUM","accountNo":"XXXXXXXXXX"}';

      var pdfObject = $.parseJSON(pdfdata);

      var $table3 = $("<table id='table3' style='top:50px;'></table>");
      var $line3 = $("<tr style='border: unset'></tr>");
      var $line4 = $("<tr style='border: unset'></tr>");
      var $line5 = $("<tr style='border: unset'></tr>");
      $line3.html(name);
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
      var $pdf1 = $("<div></div>");
      var pdfObject = $.parseJSON(pdfdata).pdfObject;

      var height =
        parseInt($("#table2").css("height")) +
        parseInt($("#table2").css("top")) +
        102;
      $("#footy").css("top", height);
    },
    "text"
  ).fail(function () {
    alert("File not found")
  });
}

function findDate(timetStamp) {
  var d = new Date(timetStamp);
  return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}