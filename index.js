var datos;
var success;
$("#btnGet").on("click",function(){
  $.getJSON( "https://172.17.255.130:8080/api/v3/requests/1100480", function( data ) {
    datos=data;
    console.log("Got Data")
  });

})
