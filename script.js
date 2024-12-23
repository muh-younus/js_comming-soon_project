var countDownDate = new Date('Dec 29, 2024 00:00:00').getTime();
 setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    // var difference = new Date(distance);
    // console.log("The difference is: ", difference.toString());

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor(distance%(1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    var minutes = Math.floor(distance%(1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)/1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

   
    
    
} ,1000)




// var now = new Date().getTime();
// var curr = new Date(now);
// console.log("The current Date" ,curr.toString());

// var launched = new Date(countDownDate);
// console.log("The launched Date is: " ,launched.toString());



