 // login button functionality
 document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNUmberValueConverted = parseInt(pinNumberValue);

    console.log(mobileNumberValueConverted, pinNUmberValueConverted);

    if(mobileNumberValueConverted== mobileNumber && pinNUmberValueConverted == pinNumber)
    {
        window.location.href="/home.html";
    }
    else{
       alert("Invalid Credential");
    }
 })