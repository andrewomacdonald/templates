var nameInput = document.getElementById('name');
var lastNameInput = document.getElementById('lastName');
var addressInput = document.getElementById('streetAddress');
var buildingNumber = document.getElementById('buildingNumber');
var email = document.getElementById('email');
var emptyStr;


document.querySelector('form.myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Name: ' + nameInput.value +
        '\nLast Name: ' +  lastNameInput.value +
        '\nAddress :' + addressInput.value +
        '\nBuilding #: ' + buildingNumber.value +
        "\nEmail: " +  email.value);
});
