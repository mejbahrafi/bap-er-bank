

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);

    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    totalField.innerText = previousTotal + amount;
}
function getCurrentbalance() {
    const balancetotal = document.getElementById('balance-total');
    const balancetotalText = balancetotal.innerText;
    const previousBalanceTotal = parseFloat(balancetotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balancetotal = document.getElementById('balance-total');
    /* 
    const balancetotalText = balancetotal.innerText;
    const previousBalanceTotal = parseFloat(balancetotalText); */
    const previousBalanceTotal = getCurrentbalance();
    if (isAdd == true) {
        balancetotal.innerText = previousBalanceTotal + amount;

    }
    else {
        balancetotal.innerText = previousBalanceTotal - amount;
    }
}



document.getElementById('deposite-button').addEventListener('click', function () {

    // console.log(depositeAmount);
    // get and update deposite total 
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeText = depositeTotal.innerText;
    const prviousDepositeTotal = parseFloat(depositeText);
    depositeTotal.innerText = prviousDepositeTotal + depositeAmount;
 */

    // update Balance 
    /*  const balancetotal = document.getElementById('balance-total');
     const balancetotalText = balancetotal.innerText;
     const previousBalanceTotal = parseFloat(balancetotalText);
     balancetotal.innerText = previousBalanceTotal + depositeAmount; */


    const depositeAmount = getInputValue('deposite-ammount');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);

    }




});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {



    //get and update withdraw total 

    /*  const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    
 
 
 
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;  */



    // update balance after withdraw 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-ammount');
    const currentBalance = getCurrentbalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You cannot Withdraw more than what you have in your account.');
    }



});