const subsribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const btn = document.getElementById("mySubmit");
const para = document.getElementById("myP");
const para1 = document.getElementById("myP1");


btn.onclick = function () {
    if (subsribe.checked) {
        para1.textContent = `You have subscribed`
        if (visa.checked) {
            para.textContent = `You are using Visa`

        }
        else if (master.checked) {
            para.textContent = `You are using master card`

        }
        else if (paypal.checked) {
            para.textContent = `You are using paypal`

        } else {
            para.textContent = `You must select a payment method`
        }
    } else {
        para1.textContent = `You have not subscribed`

    }


}





