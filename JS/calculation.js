document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositAmount = document.getElementById('user-deposit');
    const amount = depositAmount.value;

    if (amount != '') {
        const depositField = document.getElementById('deposit-amount');
        const previousDeposit = parseFloat(depositField.innerText);
        const currentDeposit = previousDeposit + parseFloat(amount);

        depositField.innerText = currentDeposit;
        depositAmount.value = '';
        const totalAmountField = document.getElementById('total-balance');
        const previousTotalBalance = parseFloat(totalAmountField.innerText);

        const currentTotalBalance = previousTotalBalance + parseFloat(amount);

        totalAmountField.innerText = currentTotalBalance;
    } else {
        alert('Please enter valid amount');
    }

})

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const WithdrawField = document.getElementById('user-withdraw');
    const withdrawAmount = WithdrawField.value;
    const previoustWithdrawField = document.getElementById('total-withdraw');

    WithdrawField.value = '';

    const totalAmountField = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(totalAmountField.innerText);

    if (withdrawAmount <= previousTotalBalance && withdrawAmount > 0 && withdrawAmount != '') {
        const previoustWithdrawAmount = parseFloat(previoustWithdrawField.innerText);

        const totalWithdraw = parseFloat(withdrawAmount) + previoustWithdrawAmount;
        previoustWithdrawField.innerText = totalWithdraw;
        const currentTotalBalance = previousTotalBalance - withdrawAmount;

        totalAmountField.innerText = currentTotalBalance;
    } else {
        alert('Sorry!!You Can not Withdraw this amount');
    }




})
