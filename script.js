// The ready event occurs when the DOM has been loaded.
$(document).ready(function(){
// moment.js for manupliation of date and month 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})
