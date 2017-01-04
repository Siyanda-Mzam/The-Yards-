'use strict'

var i = 1;
var cache;
$("#residence_details").addClass("fade");
$("#education_details").addClass("fade");
$("#contact_details").addClass("fade");
$("#residence_type_and_choice").addClass("fade");
$("#payment_options").addClass("fade");
$("#go_back").addClass("fade");
$("#nsfas_form").addClass("fade");
$("#cash_form").addClass("fade");
$("#done").addClass("fade");
$('#continue').click(function (e) {
    e.preventDefault();
    switch (i) {
        case 1: $("#go_back").removeClass("fade");
            $("#personal_details").addClass("fade");
            $("#education_details").removeClass("fade");
            break;

        case 2: $("#education_details").addClass("fade");
            $("#contact_details").removeClass("fade");
            break;

        case 3: $("#contact_details").addClass("fade");
            $("#residence_type_and_choice").removeClass("fade");
            break;

        case 4: $("#residence_type_and_choice").addClass("fade");
            $("#payment_options").removeClass("fade");
            if (cache) {
                var str = "#" + cache + "_form";
                $(str).removeClass("fade");

            }
            break;
        default: break;
    }

    console.log("In Continue, I is: %s", i);
    if (i <= 4)
        i++;
});
$('#go_back').click(function (e) {
    console.log("This is the element that was received by Id: %s", document.getElementById("personal_details"));
    e.preventDefault();
    $("#continue").removeClass("fade");
    $("#done").addClass("fade");
    $("#nsfas_form").addClass("fade");
    $("#cash_form").addClass("fade");
    if (i == 2) {
        $("#personal_details").removeClass("fade");
        $("#education_details").addClass("fade");
    }
    else if (i == 3) {
        $("#education_details").removeClass("fade");
        $("#contact_details").addClass("fade");
    }
    else if (i == 4) {
        $("#contact_details").removeClass("fade");
        $("#residence_type_and_choice").addClass("fade");
    }
    else if (i == 5) {
        $("#residence_type_and_choice").removeClass("fade");
        $("#payment_options").addClass("fade");
    }
    i--;
    if (i == 1) {
        $("#go_back").addClass("fade");
    }
    console.log("In Go Back, I is: " + i);
});

function poption(val) {
    console.log("This is the value for val: %s", val);
    if (val.value === "nsfas") {
        $('#cash_form').addClass("fade");
        $("#nsfas_form").removeClass("fade");
    }
    else if (val.value === "other") {
        // Display a generic form that can capture information we care about.
        // This is going to be data generated from a database schema or something of that nature. 
        // I am not sure about the information that will be put in the other form.
    }
    else if (val.value === "cash") {
        $("#nsfas_form").addClass("fade");
        $("#cash_form").removeClass("fade");
    }
    cache = val.value;
};