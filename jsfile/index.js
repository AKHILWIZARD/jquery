
$(document).ready(function() {
    // Generate day options for all days of the month
    const daySelect = $("#daySelect");
    for (let day = 1; day <= 31; day++) {
        const option = $("<option>").val(day).text(day);
        daySelect.append(option);
    }

    // Generate year options for a range of years
    const yearSelect = $("#yearSelect");
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Adjust the range as needed
    for (let year = currentYear; year >= startYear; year--) {
        const option = $("<option>").val(year).text(year);
        yearSelect.append(option);
    }
});


$(document).ready(function() {
    $("#submitt").click(function() {
        var nameInput = $("#name").val();
        var emailInput = $("#email").val();
        var messageInput = $("#password").val();
        var choosenInput = $("#daySelect").val();
        var choosenInput1 = $("#month").val();
        var choosenInput2 = $("#yearSelect").val();
        var gender1 = $("#male").is(":checked");
        var gender2 = $("#female").is(":checked");
        var gender3 = $("#Other").is(":checked");
        var payitems = $("#upi").is(":checked");
        var payitems1 = $("#network").is(":checked");
        var payitems2 = $("#visa").is(":checked");
        var payitems3 = $("#paypal").is(":checked");

        var myModal = new bootstrap.Modal($('#invalid'));

        if (nameInput === "") {
            myModal.show();
            $("#aa").text("Please enter name");
        }
         else if (emailInput === "") {
            myModal.show();
            $("#aa").text("Please enter email");
        }
         else if (messageInput === "") {
            myModal.show();
            $("#aa").text("Please enter Password");
        } 
        else if (choosenInput === "DD") {
            myModal.show();
            $("#aa").text("Please select Date");
        }
        else if (choosenInput1 === "MM") {
            myModal.show();
            $("#aa").text("Please select Month");
        }
        else if (choosenInput2 === "YYYY") {
            myModal.show();
            $("#aa").text("Please select Year");
        }                        
        else if (!gender1 && !gender2 && !gender3) {
            myModal.show();
            $("#aa").text("Please enter gender");
        }
        else if (!payitems && !payitems1 && !payitems2 && !payitems3) {
            myModal.show();
            $("#aa").text("Please Enter Payment Details!")
        }
         else {
            $("#myForm").submit();
        }
    });
});