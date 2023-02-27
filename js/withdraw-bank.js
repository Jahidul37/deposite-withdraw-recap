// Step 01
document.getElementById('withdraw-button').addEventListener('click', function () {
    // Step 02
    const withdrawFlield = document.getElementById('withdraw-area');
    const withdrawFlieldString = withdrawFlield.value;
    const withdrawAmount = parseFloat(withdrawFlieldString);
    // console.log('', withdrawAmount);

    // Step 03
    withdrawFlield.value = '';

    // Step 04
    const withdrawElement = document.getElementById('Withdraw-box');
    const withdrawElementlString = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(withdrawElementlString);
    // console.log('', previousWithdrawAmount);

    // Step 05
    const totalCountWithdraw = previousWithdrawAmount + withdrawAmount;
    withdrawElement.innerText = totalCountWithdraw;

    // Step 06
    const balanceElement = document.getElementById('Balance-box');
    const balanceElementString = balanceElement.innerText;
    const previousBalanceAmount = parseFloat(balanceElementString);
    // console.log('', previousBalanceAmount);

    // Step 07
    const balanceAmount = previousBalanceAmount - withdrawAmount;
    balanceElement.innerText = balanceAmount;

})