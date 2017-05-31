
/*import moment from 'moment';

function cube(x) {
    return x * x * x;
}

export { cube };
export const foo = Math.sqrt(2);*/

//document.write("It works.");

//https://www.safaribooksonline.com/library/view/you-dont-know/9781491924471/ch01.html#chapter-1-into-programming

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