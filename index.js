//Adding event listener
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get teh form data
    var forData = new FormData(event.target);

    //Covert teh form data to URL search parameters string
    var urlSearchParams = new URLSearchParams(formData).toString();

    //redirect teh user to order confirmation page with the form data as URL parameters
    window.location.href = 'order.html?' + urlSearchParams;
});


