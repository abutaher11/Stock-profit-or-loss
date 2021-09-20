const initialPrice = document.querySelector("#inital-price");
const stocksQty = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const calBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");


function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current) {

        let loss = (initial - current)*quantity;
        let lossPercentage = ((initial - current)/initial)*100;
        outputBox.style.color = "red";
        showMessage(`The loss amount is ${loss} and the loss percent is ${lossPercentage}%`)
    }
    else if(current > initial) {

        let profit = (current - initial)*quantity;
        let profitPercentage = ((current - initial)/initial)*100;
        outputBox.style.color = "#6EE787";
        showMessage(`The profit amount is ${profit} and the profit percent is ${profitPercentage}%`)
    }
    else {
        outputBox.style.color = "#6EE787";
        showMessage("No pain no gain and no gain no pain")
    }
}



function calculateStonks() {
    hideMessage();
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQty.value);
    const cp = Number(currentPrice.value);

    if(ip>0 && qty>0 && cp>0) {
        calculateProfitAndLoss(ip, qty, cp)
    }
    else {
        outputBox.style.color = "red";
        showMessage("Please enter the correct values. Values cannot be negative or empty.");
    }
    
}


function hideMessage () {
    outputBox.style.display = "none";
}

function showMessage(msg) {
    outputBox.style.display = "block";
    outputBox.innerText = msg;
}


calBtn.addEventListener("click", calculateStonks);