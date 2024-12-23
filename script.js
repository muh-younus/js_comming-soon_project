var countDownDate = new Date('Dec 25, 2024 00:00:00').getTime();
var x = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    // var difference = new Date(distance);
    // console.log("The difference is: ", difference.toString());

    var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    
    
} )


// var now = new Date().getTime();
// var curr = new Date(now);
// console.log("The current Date" ,curr.toString());

// var launched = new Date(countDownDate);
// console.log("The launched Date is: " ,launched.toString());



