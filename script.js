$(document).ready(function() {

    var timeFormat = 'HH:mm:ss'

    // Shows current time
    var dateFormat = moment().format('MMMM Do')
    var dayFormat = moment().format('dddd')
    $("#CurrentDate").text(dayFormat + ", " + dateFormat)

    past();
    current();
    future();
    var pastTime = setInterval(past, 1000);
    var currentTime = setInterval(current, 1000);
    var futureTime = setInterval(future, 1000);




// Retrieves content from Local Storages and places in
    // respective text area.
var nineAM = JSON.parse(localStorage.getItem('nineAM'));
$("#nineamtextarea").val(nineAM);
var tenAM = JSON.parse(localStorage.getItem('tenAM'));
$("#tenamtextarea").val(tenAM);
var elevenAM = JSON.parse(localStorage.getItem('elevenAM'));
$("#elevenamtextarea").val(elevenAM);
var twelvePM = JSON.parse(localStorage.getItem('twelvePM'));
$("#twelvepmtextarea").val(twelvePM);
var onePM = JSON.parse(localStorage.getItem('onePM'));
$("#onepmtextarea").val(onePM);
var twoPM = JSON.parse(localStorage.getItem('twoPM'));
$("#twopmtextarea").val(twoPM);
var threePM = JSON.parse(localStorage.getItem('threePM'));
$("#threepmtextarea").val(threePM);
var fourPM = JSON.parse(localStorage.getItem('fourPM'));
$("#fourpmtextarea").val(fourPM);
var fivePM = JSON.parse(localStorage.getItem('fivePM'));
$("#fivepmtextarea").val(fivePM);


// Sets 9am text area content in Local Storage
$("#9amsavebtn").click(function(){
    var nineValue = $("#nineamtextarea").val();
    console.log(nineValue)
    localStorage.setItem('nineAM', JSON.stringify(nineValue));
});

// Sets 10am text area content in Local Storage
$("#10amsavebtn").click(function(){
    var tenValue = $("#tenamtextarea").val();
    console.log(tenValue)
    localStorage.setItem('tenAM', JSON.stringify(tenValue));
});

// Sets 11am text area content in Local Storage
$("#11amsavebtn").click(function(){
    var elevenValue = $("#elevenamtextarea").val();
    console.log(elevenValue)
    localStorage.setItem('elevenAM', JSON.stringify(elevenValue));
});

// Sets 12pm text area content in Local Storage
$("#12pmsavebtn").click(function(){
    var twelveValue = $("#twelvepmtextarea").val();
    console.log(twelveValue)
    localStorage.setItem('twelvePM', JSON.stringify(twelveValue));
});

// Sets 1pm text area content in Local Storage
$("#1pmsavebtn").click(function(){
    var oneValue = $("#onepmtextarea").val();
    console.log(oneValue)
    localStorage.setItem('onePM', JSON.stringify(oneValue));
});

// Sets 2pm text area content in Local Storage
$("#2pmsavebtn").click(function(){
    var twoValue = $("#twopmtextarea").val();
    console.log(twoValue)
    localStorage.setItem('twoPM', JSON.stringify(twoValue));
});

// Sets 3pm text area content in Local Storage
$("#3pmsavebtn").click(function(){
    var threeValue = $("#threepmtextarea").val();
    console.log(threeValue)
    localStorage.setItem('threePM', JSON.stringify(threeValue));
});

// Sets 4pm text area content in Local Storage
$("#4pmsavebtn").click(function(){
    var fourValue = $("#fourpmtextarea").val();
    console.log(fourValue)
    localStorage.setItem('fourPM', JSON.stringify(fourValue));
});

// Sets 5pm text area content in Local Storage
$("#5pmsavebtn").click(function(){
    var fiveValue = $("#fivepmtextarea").val();
    console.log(fiveValue)
    localStorage.setItem('fivePM', JSON.stringify(fiveValue));
});

//set color to green if within time slot

function future(){
    if(moment().isBefore(moment('08:59:59', timeFormat))){
        $("#nineamtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('09:59:59', timeFormat))){
        $("#tenamtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('10:59:59', timeFormat))){
        $("#elevanamtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('11:59:59', timeFormat))){
        $("#twelvepmtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('12:59:59', timeFormat))){
        $("#onepmtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('13:59:59', timeFormat))){
        $("#twopmtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('14:59:59', timeFormat))){
        $("#threepmtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('15:59:59', timeFormat))){
        $("#fourpmtextarea").css("background-color","#b5d7a8")
    }
    if(moment().isBefore(moment('16:59:59', timeFormat))){
        $("#fivepmtextarea").css("background-color","#b5d7a8")
    }

}
// set background to red based on dedicated time 

function current(){
    if (moment().isBetween(moment('09:00:00', timeFormat), moment('09:59:59', timeFormat))) {
        $("#nineamtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('10:00:00', timeFormat), moment('10:59:59', timeFormat))) {
        $("#tenamtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('11:00:00', timeFormat), moment('11:59:59', timeFormat))) {
        $("#elevenamtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('12:00:00', timeFormat), moment('12:59:59', timeFormat))) {
        $("#twelvepmtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('13:00:00', timeFormat), moment('13:59:59', timeFormat))) {
        $("#onepmtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('14:00:00', timeFormat), moment('14:59:59', timeFormat))) {
        $("#twopmtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('15:00:00', timeFormat), moment('15:59:59', timeFormat))) {
        $("#threepmtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('16:00:00', timeFormat), moment('16:59:59', timeFormat))) {
        $("#fourpmtextarea").css("background-color","#ea9999")
    }
    if (moment().isBetween(moment('17:00:00', timeFormat), moment('17:59:59', timeFormat))) {
        $("#fivepmtextarea").css("background-color","#ea9999")
    }
}
// Set backgroung to grey past their dedicated time slot
function past(){
    if(moment().isAfter(moment('08:00:00', timeFormat))){
        $("#nineamtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('09:00:00', timeFormat))){
        $("#tenamtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('10:00:00', timeFormat))){
        $("#elevenamtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('11:00:00', timeFormat))){
        $("#twelvepmtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('12:00:00', timeFormat))){
        $("#onepmtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('13:00:00', timeFormat))){
        $("#twopmtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('14:00:00', timeFormat))){
        $("#threepmtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('15:00:00', timeFormat))){
        $("#fourpmtextarea").css("background-color","#b7b7b7")
    }
    if(moment().isAfter(moment('16:00:00', timeFormat))){
        $("#fivepmtextarea").css("background-color","#b7b7b7")
    }
}


})