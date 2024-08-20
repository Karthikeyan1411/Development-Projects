function validateForm(){
    // GET Inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Reset Error Message
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    // Validate Name
    if(name === ''){
        document.getElementById('nameError').innerHTML = 'Name is Required';
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    {
        document.getElementById('emailError').innerHTML = 'Email is Required';
        return false;
    }
}