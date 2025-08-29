 
 document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log("add money btn click");
    const bank =document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value);

    const addPin = document.getElementById("pin-number").value

    const availableBalance = parseInt( document.getElementById("available-balance").innerText);
    console.log(availableBalance);

        const totalNewAvailableBalance = addAmount + availableBalance;

        document.getElementById("available-balance").innerText = totalNewAvailableBalance;
 })