/////////////////////////////////////////////////////////////

function printAmount(amt) {
    console.log(parseFloat(amt).toFixed(2));
}

function formatAmount() {
    return "$" + parseFloat(amount).toFixed(2);
}

var amount = 99.99;
printAmount(amount * 2);

amount = formatAmount();
console.log(amount);

/////////////////////////////////////////////////////////////

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
    // calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE);

    // return the new amount
    return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));     // "107.99"
alert(amount.toFixed(2));

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////