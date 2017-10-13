let customerInfoModal = document.getElementById('customer-info-modal');

let customerBillingModal = document.getElementById('customer-billing-modal');

let cards = document.getElementsByClassName("card");

let customerInfoModalCloseBtn = document.getElementsByClassName("fa-times")[0];

let customerBillingModalCloseBtn = document.getElementsByClassName("fa-times")[1];

let nextBtn = document.getElementById('next-btn');

let submitBtn = document.getElementById('submit-btn');

// When the user clicks on the button, open the modal 
// cards.onclick = function() {
//     // modal.style.display = "block";
//     console.log("works");
// }

nextBtn.onclick = function() {
    customerInfoModal.style.display = "none";
    customerBillingModal.style.display = "block";
}

// show customer info modal
function showCustomerInfoModal() {
    customerInfoModal.style.display = "block";
}

customerInfoModalCloseBtn.onclick = function() {
    customerInfoModal.style.display = "none";
}

customerBillingModalCloseBtn.onclick = function() {
    customerBillingModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == customerInfoModal || event.target == customerBillingModal) {
        customerInfoModal.style.display = "none";
        customerBillingModal.style.display = "none";
    }
}
submitBtn.onclick = function() {
    alert("Order Submitted. Thank you!");
    window.location.href = "/";
    return false;
}