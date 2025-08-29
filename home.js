 
const validPin = 1234

//add money feature----------------------------------------------------
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
   const bank = document.getElementById("bank").value
   const accountNumber = document.getElementById("account-number").value
   const addAmount = parseInt(document.getElementById("add-amount").value)

    

   const addPin = parseInt(document.getElementById("pin-number").value)

   const availableBalance = parseInt(document.getElementById("available-balance").innerText)


   console.log(addAmount, availableBalance);
   

   if(accountNumber.length < 11)
   {
    alert("please provide valid account number.")
    return;
   }

  else if(addPin !== validPin)
   {
    alert("Please provide valid pin number")
    return;
   }

   //adding---------------------
   const totalNewAvailableBalance = addAmount + availableBalance;
   document.getElementById("available-balance").innerText = totalNewAvailableBalance
 })

//cashout money feature----------------------------------------

document.getElementById("withdraw-btn").addEventListener("click", function(e) {
      e.preventDefault()
      
          
        const agentNumber = document.getElementById("agentNumber-btn").value
         const outAmount = parseInt(document.getElementById("out-amount").value)

         const addPin = parseInt(document.getElementById("pin-number-2").value)
         const availableBalance  = parseInt(document.getElementById("available-balance").innerText)

         console.log(outAmount, availableBalance);

         if(agentNumber.length < 11){
            alert("Please enter valid number")
            return;
         }
        else  if(addPin !== validPin )
         {
            alert("Please enter valid pin ")
            return;
         }

         const totalNewAvailableBalance = availableBalance - outAmount
         document.getElementById("available-balance").innerText = totalNewAvailableBalance
         

})

//transfer money feature--------------------------------------------------------------------

document.getElementById("sendNow-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const userAccountNumber = document.getElementById("userNumber-btn").value
    const transferAmount = parseInt(document.getElementById("transfer-amount").value)
    const addPin = parseInt(document.getElementById("pin-number-3").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(userAccountNumber.length < 11)
    {
        alert("Please a valid account number")
        return;
    }
    else if(addPin !== validPin) 
    {
        alert("Please a valid pin")
    }

    const totalNewAvailableNumber = availableBalance - transferAmount
    document.getElementById("available-balance").innerText = totalNewAvailableNumber

})

//pay bill section--------------------------------------------------------
document.getElementById("payNow-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const billerAccountNumber = document.getElementById("billerAccount").value
    const addAmount = parseInt(document.getElementById("amountPay").value)
    const addPin = parseInt(document.getElementById("pin-number-4").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(billerAccountNumber.length< 11)
    {
        alert("Please enter a valid account number")
        return;
    }
    else if(addPin !== validPin) 
    {
        alert("Please a valid pin")
    }

    const totalNewAvailableNumber = availableBalance +  addAmount
    document.getElementById("available-balance").innerText = totalNewAvailableNumber

})

//  toggling feature----------------------------------------


document.getElementById("add-button").addEventListener("click", function (){  
      document.getElementById("cash-out-parent").style.display = "none";
      document.getElementById("add-money-parent").style.display = "block";
         document.getElementById("pay-bill-parent").style.display = "none";
      document.getElementById("get-bonus-parent").style.display = "none";
     document.getElementById("transfer-money-parent").style.display = "none";
      document.getElementById("transaction-parent").style.display = "none";
   
    

})
document.getElementById("cash-out-button").addEventListener("click", function (){  
    document.getElementById("cash-out-parent").style.display = "block";
      document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("pay-bill-parent").style.display = "none";
      document.getElementById("get-bonus-parent").style.display = "none";
     document.getElementById("transfer-money-parent").style.display = "none";
      document.getElementById("transaction-parent").style.display = "none";
})
document.getElementById("transfer-btn").addEventListener("click", function(){
    document.getElementById("transfer-money-parent").style.display = "block";
     document.getElementById("add-money-parent").style.display = "none";
     document.getElementById("cash-out-parent").style.display = "none";
           document.getElementById("pay-bill-parent").style.display = "none";
      document.getElementById("get-bonus-parent").style.display = "none";
       document.getElementById("transaction-parent").style.display = "none";
})

document.getElementById("get-bonus-btn").addEventListener("click", function () {
    document.getElementById("get-bonus-parent").style.display = "block";
      document.getElementById("transfer-money-parent").style.display = "none";
     document.getElementById("add-money-parent").style.display = "none";
     document.getElementById("cash-out-parent").style.display = "none";
       document.getElementById("pay-bill-parent").style.display = "none";
        document.getElementById("transaction-parent").style.display = "none";
})
document.getElementById("pay-bill-btn").addEventListener("click", function () {
      document.getElementById("pay-bill-parent").style.display = "block";
      document.getElementById("get-bonus-parent").style.display = "none";
     document.getElementById("transfer-money-parent").style.display = "none";
     document.getElementById("add-money-parent").style.display = "none";
     document.getElementById("cash-out-parent").style.display = "none";
       document.getElementById("transaction-parent").style.display = "none";
})
document.getElementById("transaction-btn").addEventListener("click", function () {
  document.getElementById("transaction-parent").style.display = "block";
      document.getElementById("pay-bill-parent").style.display = "none";
      document.getElementById("get-bonus-parent").style.display = "none";
     document.getElementById("transfer-money-parent").style.display = "none";
     document.getElementById("add-money-parent").style.display = "none";
     document.getElementById("cash-out-parent").style.display = "none";
})