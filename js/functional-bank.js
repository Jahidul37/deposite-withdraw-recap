// step 01
document.getElementById('deposite-button').addEventListener('click', function () {
    // console.log('click');
    // step 02
    const depositeField = document.getElementById('deposit-area');
    const depositeFieldString = depositeField.value;
    const depositeAmount = parseFloat(depositeFieldString);


    // console.log(depositeAmount);
    // step 03 
    depositeField.value = '';


    // step 04
    const depositeBox = document.getElementById('Deposit-box');
    const depositeBoxString = depositeBox.innerText;
    const depositeBoxTotal = parseFloat(depositeBoxString)
    // console.log(depositeBoxTotal);

    // step 05
    const depositeAddTotal = depositeBoxTotal + depositeAmount;
    depositeBox.innerText = depositeAddTotal;

    // step 06
    const balanceElement = document.getElementById('Balance-box');
    const balanceElementString = balanceElement.innerText;
    const balanceElementTotal = parseFloat(balanceElementString);


    // step 07
    const balanceElementAdd = depositeAmount + balanceElementTotal
    balanceElement.innerText = balanceElementAdd;


})