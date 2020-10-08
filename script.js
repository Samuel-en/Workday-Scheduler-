$(document).ready(function () {
    
// code displays date and month on top of the page 
$("#currentDay").text(moment().format("dddd[,] MMMM Do"));
  
//Array of hours and corresponding colors 
    var hours = {

        amHrs: [9, 10, 11],

        pmHrs: [12, 1, 2, 3, 4, 5]
    };

    var colors = {

        amColorHrs: [9, 10, 11],

        pmColorHrs: [12, 13, 14, 15, 16, 17]
    };
    var i = 0;

    // for loop iterating amHrs through the container 
        for (var i = 0; i < hours.amHrs.length; i++) {

            var newRow = $(`<div class='row'></div>`);

                $('.container').append(newRow);

            var hrCol = $(`<div class='col-1 time-block'>${hours.amHrs[i]}AM</div>`);

            var textCol = $(`<textarea class="col-10" data-time=${colors.amColorHrs[i]}></textarea>`);

            var buttonCol = $("<button class='saveBtn col-1 far fa-save'>");

                $(newRow).append(hrCol, textCol, buttonCol);
        }
    
        //Loop iterating pmHrs through the container 
        for (var i = 0; i < hours.pmHrs.length; i++) {

            var newRow = $(`<div class='row'></div>`);

                $('.container').append(newRow);

            var hrCol = $(`<div class='col-1 time-block'>${hours.pmHrs[i]}PM</div>`);

            var textCol = $(`<textarea class="col-10" data-time=${colors.pmColorHrs[i]}></textarea>`);

            var buttonCol = $("<button class='saveBtn col-1 far fa-save'>");

                $(newRow).append(hrCol, textCol, buttonCol);
        }
        // check time to determine past present or future 
        function colChange() {

            $('textarea').each(function () {

                var presTime  = parseInt(moment().hours());

                var txtInfo = $('textarea').data('time');

                if (txtInfo < presTime) {

                    $('textarea').removeClass("present");

                    $('textarea').removeClass("future");

                    $('textarea').addClass("past");
                }
                else if (txtInfo === presTime) {

                    $('textarea').removeClass("past");

                    $('textarea').removeClass("future");

                    $('textarea').addClass("present");
                }
                else {

                    $('textarea').removeClass("past");

                    $('textarea').removeClass("present");

                    $('textarea').addClass("future");
                }
                console.log(txtInfo);

                console.log(presTime);
            });
        };
        colChange();
    });





