// Write your JavaScript code here.
let response=null;
let flight_Status=null;
window.addEventListener("load",function(){
response=document.getElementById("takeoff").addEventListener('click',function() { confirm("Confirm that the shuttle is ready for takeoff.");});

 if (response){
 document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
 }

});
// Remember to pay attention to page loading!