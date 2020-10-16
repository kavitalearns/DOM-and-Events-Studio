// Write your JavaScript code here.

window.addEventListener("load",function(){
 
 let take_off=document.getElementById("takeoff");
 let flight_screen=document.getElementById("shuttleBackground");
 let flightStatus=document.getElementById("flightStatus");
 let height=document.getElementById("spaceShuttleHeight");
 //let height=Number(heightEle.innerHTML);
 console.log(typeof(height));
 take_off.addEventListener('click',function (){
   let response=window.confirm("Confirm that the shuttle is ready for takeoff.");
  if(response) {
      flightStatus.innerHTML="Shuttle in flight.";
    flight_screen.style.backgroundColor="blue";
    (height.innerHTML)=(Number(height.innerHTML)+10000);
  };
  });

 let land=document.getElementById("landing");
 
 //if(flight_screen.style.backgroundColor==="blue"){
 land.addEventListener('click',function(){
       window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML="The shuttle has landed.";
    //height.innerHTML=0;
    height.innerHTML=0;
    flight_screen.style.backgroundColor="green";
    pic.style.bottom=0+'px';
    pic.style.left=0+'px';
  });
 
let abort=document.getElementById("missionAbort");
abort.addEventListener('click',function(){
 let response=window.confirm("Confirm that you want to abort the mission.");
 if (response) {
   flightStatus.innerHTML="Mission aborted.";
   flight_screen.style.backgroundColor="green";
   //height.innerHTML=0;
   height.innerHTML=0;
   pic.style.bottom=0+'px';
    pic.style.left=0+'px';
 }
});
 let pic=document.getElementById('rocket');
  let up=document.getElementById('up');
  let down=document.getElementById('down');
  let right=document.getElementById('right');
  let left=document.getElementById('left');
 let rockHt=0;
 let maxRockHt=250;
  up.addEventListener('click',function(){
    if(rockHt<maxRockHt){ 
        rockHt+=10;
pic.style.bottom=rockHt +'px';
(height.innerHTML)=(Number(height.innerHTML)+10000);

    }
 });

down.addEventListener('click',function(){
  if(rockHt>0){rockHt-=10;
pic.style.bottom=rockHt+'px';
(height.innerHTML)=(Number(height.innerHTML)-10000);
  }
});

let rockLat=0;
let maxRockLat=480;
right.addEventListener('click',function(){
if(rockLat<maxRockLat){rockLat+=10;
pic.style.left=rockLat+'px';
}
});

left.addEventListener('click',function(){
  if(rockLat>0){
rockLat-=10;
pic.style.left=rockLat+'px';
  }
});


});




