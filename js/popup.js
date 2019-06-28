var targetedPopupClass; // Declare globally, so the escape key function knows which popup to close

$(function() {
    // Open popup
    $('[data-popup-open]').on('click', function(e)  {
        targetedPopupClass = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targetedPopupClass + '"]').fadeIn(200);
        e.preventDefault();
    });

    // Close popup
    $('[data-popup-close]').on('click', function(e)  {
        // targeted_popup_class = jQuery(this).attr('data-popup-close');

        // I believe the above code is unnecessary because targeted_popup_class is already set from opening the popup,
        // and we should never have 2 popups open at once

        $('[data-popup="' + targetedPopupClass + '"]').fadeOut(200);
        e.preventDefault();
    });

    // Prevent user from clicking through the popup to close it
    $('.popup-inner').on('click', function(e) {
        // Do nothing
        e.stopPropagation();
    });
});


// Close the popup if the escape key is pressed
$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        $('[data-popup="' + targetedPopupClass + '"]').fadeOut(200);
    }
});
