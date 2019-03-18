$(document).ready(function() {
    $('#menu-items li').children(this).addClass('sliding-link');
    // Add smooth scrolling to all links
    $(".sliding-link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $("#reservar").on("click", function() {
        $("#form").toggleClass("display");
    });
    // $("#submit").on("click", function() {
    //     $("#form").addClass("display");
    // });
});
// $(document).ready(function() {
//     $('#menu-mi-menu li').addClass('nav__item').children(this).addClass('nav__link scrolly');;
// });