function payPal() {
    payPal = document.getElementById('paypal');
    card = document.getElementById('card');

    if(card.style.display == 'flex'){
        card.style.display = "none";
        payPal.style.display = "flex";
    }
    else{
        payPal.style.display = "flex";
    }
}

function card() {
    payPal = document.getElementById('paypal');
    card = document.getElementById('card');

    if(payPal.style.display == 'flex'){
        payPal.style.display = "none";
        card.style.display = "flex";
    }
    else{
        card.style.display = "flex";
    }
}

