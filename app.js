// Digital Clock Project:-

let displayTime=document.getElementById('displayTime')
setInterval(function () {
    let date=new Date()
    let hours=date.getHours()
    let mint=date.getMinutes()
    let sec=date.getSeconds()
    let ampm;
    console.log(hours)
    console.log(mint)
    console.log(sec)
 
  if(hours>12){
    ampm='PM'
    hours=hours-12
  }
  if(hours==12){
      ampm='AM'
    
  }
  if(sec<10){
    sec='0'+sec;
}
if(mint<10){
    mint='0'+mint;
}
if(hours<10){
hours='0'+hours;
}
    displayTime.innerText=`${hours} : ${mint} : ${sec} : ${ampm}`

},)