// Let’s see we an api url www.example.com/api/get/1 
// Write a sample code to call this url via ajax and 
// print its response

//process -1
$.ajax({
    type: "GET",
    url: "www.example.com/api/get/1",
    success: function(data) {
       console.log(data)
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
});

//process -2
function load() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "www.example.com/api/get/1", true);
xhttp.send();
}