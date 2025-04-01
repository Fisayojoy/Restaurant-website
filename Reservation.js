document.getElementById('reservation-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;

    if (!name || !email || !phone || !date || !time || !guests) {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission
    }
});
