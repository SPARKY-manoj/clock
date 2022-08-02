function time(){
    var date=new Date();
    var hrs=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();  

    var session='';
    if (hrs >= 12) {
        session="PM";
     }else{
         session="AM"
     }

      if (hrs<12) {
        document.getElementById('myname').innerHTML="Good Morning Manoj" + '<i class="fa-solid fa-sun"></i>'
      } else if (hrs >=12 && hrs<16 ) {
        document.getElementById('myname').innerHTML="Good Afternoon Manoj" + '<i class="fa-solid fa-cloud-sun"></i>'
      } else if (hrs >=16 && hrs<18 ) {
        document.getElementById('myname').innerHTML="Good Evening Manoj" + '<i class="fa-solid fa-cloud-sun"></i>'
      }else {
        document.getElementById('myname').innerHTML=`Good night Manoj `+`<i class="fa-solid fa-moon"></i>`
      }
    if(hrs >12){
        hrs-=12
    }
    if (hrs < 10) {
        hrs="0" + hrs;
    }
    if (min < 10) {
        min="0" + min;
    }
    if (sec < 10) {
        sec="0" + sec;
    }
    var time=hrs+":"+min+':'+sec +"  "+session;
    document.getElementById('time').innerHTML=time;
}
setInterval (function(){time()},1);
var date=new Date();
var day=date.getDate();
var month=date.getMonth();
month=(month+1);
var year=date.getFullYear();
if (day <10 ) {
    day="0" + day;
}
if (month < 10) {
    month="0" +month;
}
var time1=day+"/"+month+"/"+year;  
document.getElementById('time1').innerHTML=time1;
