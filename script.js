$(document).ready(function () {
  $.get(
    "myfile.txt",
    function (data) {
      const word = data.split("\n");
      var js = JSON.parse(word[1]);
      console.log(js.data[0]);
      var d = new Date(js.data[0].strDate);
      console.log(js.data.length);
    },
    "text"
  ).fail(function () {
    console.log("Not found");
  });
});
// $.get('Input.txt', function (data) {
//             var js = JSON.parse(data);
//             console.log(js.employees[0])
//             for (var i = 0; i < js.employees.length; i++) {
//                 var emp = js.employees[i];
//                 $("#root").append(emp.name + ",");
//             }
