$("#filter").on("click", function filter() {

    let service = $("#service").val()
    // let location = $("#location").val()

    if (service.toLowerCase() == 'plumber') {

        $("#plumber").show()
        $("#hairDresser").hide()
        $("#electrician").hide()
        $("#makeUp").hide()

    } else if (service.toLowerCase() == 'hair dresser') {

        $("#plumber").hide()
        $("#hairDresser").show()
        $("#electrician").hide()
        $("#makeUp").hide()

    } else if (service.toLowerCase() == 'electrician') {

        $("#plumber").hide()
        $("#hairDresser").hide()
        $("#electrician").show()
        $("#makeUp").hide()

    }else if (service.toLowerCase() == 'make up') {

        $("#plumber").hide()
        $("#hairDresser").hide()
        $("#electrician").hide()
        $("#makeUp").show()

    }else {
        alert("The Specified Service Provider Is not Available");
        $("#plumber").show()
        $("#hairDresser").show()
        $("#electrician").show()
        $("#makeUp").show()

    }



})